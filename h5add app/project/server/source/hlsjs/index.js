var video = document.getElementById('video');
// var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';点播
var videoSrc = 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8';

// var Hls = window.Hls;
// var video = document.querySelector("video")
var btn = document.querySelector(".btn")
var player = document.querySelector(".player")

if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function() {
    // video.play();
  });
}else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = videoSrc;
  video.addEventListener('loadedmetadata', function() {
    video.play();
  });
}
video.addEventListener("click",function(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
})

btn.addEventListener("click",function(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
})

video.addEventListener('play',function(){
    player.className = "player"
})
video.addEventListener("pause",function(){
    player.className = "player pause"
})