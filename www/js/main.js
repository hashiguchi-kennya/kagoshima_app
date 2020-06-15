$(function() {
     
  // show popupボタンクリック時の処理
  $('#show').click(function(e) {
      $('#popup, #layer').show();
  });
   
  // レイヤー/ポップアップのcloseボタンクリック時の処理
  $('#close, #layer').click(function(e) {
      $('#popup, #layer').hide();
  });
   
});

var music = new Audio();
  function init() {
    music.preload = "auto";
    music.src = "./music/bgm/bgm_maoudamashii_acoustic49.mp3";
    music.load();

    music.addEventListener("ended", function () {
      music.currentTime = 0;
      music.play();
    }, false);
  }

  function play() {
    music.loop = true;
    music.play();
  }

  function stop() {
    music.pause();
    music.currentTime = 0;
  }

  init();