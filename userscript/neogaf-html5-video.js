// ==UserScript==
// @name            WebM/Mp4 Embedder for NeoGAF
// @namespace   
// @description     Enables embedded WebM/Mp4 support on NeoGAF.com
// @include         http://neogaf.com/*
// @include         http://www.neogaf.com/*
// @version         0.1
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
