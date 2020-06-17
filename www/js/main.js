// index.html_Audio
var music = new Audio();
  function init() {
    music.preload = "auto";
    music.src = "./music/bgm/betelgeuse.mp3";
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

  // スライドショー
  var mySwiper = new Swiper('.swiper-container', {
    freeMode: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
    },
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },
  });