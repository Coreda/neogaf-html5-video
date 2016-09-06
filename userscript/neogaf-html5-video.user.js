// ==UserScript==
// @name            WebM/Mp4 Embedder for NeoGAF
// @namespace       https://github.com/Coreda/neogaf-html5-video/
// @version         1.0
// @description     Enables embedded WebM/Mp4 support on NeoGAF.com
// @homepageURL     https://github.com/Coreda/neogaf-html5-video/
// @updateURL       https://github.com/Coreda/neogaf-html5-video/raw/master/userscript/neogaf-html5-meta.js
// @downloadURL     https://github.com/Coreda/neogaf-html5-video/raw/master/userscript/neogaf-html5-video.js
// @icon            https://raw.githubusercontent.com/Coreda/neogaf-html5-video/master/icon48.png
// @icon64          https://raw.githubusercontent.com/Coreda/neogaf-html5-video/master/icon64.png
// @include         http://neogaf.com/*
// @include         http://www.neogaf.com/*
// @include         http://neogaf.net/*
// @include         http://www.neogaf.net/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

var videos = document.querySelectorAll('.post a'),
  link, video;

for (var i = 0; i < videos.length; i++) {
  link = videos[i].href;
  if (link.match(".webm$") || link.match(".mp4$")) {
    video = document.createElement('video');
    video.src = link;
    video.preload = "metadata";
    video.autoplay = false;
    video.loop = true;
    video.muted = true;
    video.controls = true;
    video.volume = 0.5;

    videos[i].parentNode.replaceChild(video, videos[i]);
  }

var addGlobalStyle = function (css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
};

addGlobalStyle('video { max-width: 100% ! important; } blockquote.quote video { max-width: 400px !important }');

}

})();
