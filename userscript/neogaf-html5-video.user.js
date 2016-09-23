// ==UserScript==
// @name            NeoGAF HTML5 Video Embedder
// @namespace       https://github.com/Coreda/neogaf-html5-video/
// @version         1.1
// @author          Coreda
// @description     Enables embedded WebM/Mp4 support on NeoGAF.com
// @homepageURL     https://github.com/Coreda/neogaf-html5-video/
// @updateURL       https://github.com/Coreda/neogaf-html5-video/raw/master/userscript/neogaf-html5-video.meta.js
// @downloadURL     https://github.com/Coreda/neogaf-html5-video/raw/master/userscript/neogaf-html5-video.user.js
// @icon            https://raw.githubusercontent.com/Coreda/neogaf-html5-video/master/images/icon48.png
// @icon64          https://raw.githubusercontent.com/Coreda/neogaf-html5-video/master/images/icon64.png
// @include         http://neogaf.com/*
// @include         http://www.neogaf.com/*
// @include         http://neogaf.net/*
// @include         http://www.neogaf.net/*
// @include         http://m.neogaf.com/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict'

    var videolinks = document.querySelectorAll('.post a[href$=".webm"], .post a[href$=".mp4"]')

    for (var a of videolinks) {
        var {href} = a
        var video = document.createElement('video')
        Object.assign(video, {className:'html5video', src: href, preload:'metadata', autoplay:false, loop:true, muted: true, controls: true, volume: 0.5})
        var img = a.querySelector('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]')
        if (img) video.poster = img.src
        a.parentNode.replaceChild(video, a)
    }

    var styling = function (css) {
        var head, style
        head = document.getElementsByTagName('head')[0]
        if (!head) { return }
        style = document.createElement('style')
        style.innerHTML = css
        head.appendChild(style)
    }

    styling('.html5video { max-width: 100%; vertical-align: middle; } .quote .html5video { max-width: 400px; } ')

})()
