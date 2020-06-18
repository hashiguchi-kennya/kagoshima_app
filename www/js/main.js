// index.html_Audio
// var music = new Audio();
//   function init() {
//     music.preload = "auto";
//     music.src = "./music/bgm/betelgeuse.mp3";
//     music.load();

//     music.addEventListener("ended", function () {
//       music.currentTime = 0;
//       music.play();
//     }, false);
//   }

//   function play() {
//     music.loop = true;
//     music.play();
//   }

//   function stop() {
//     music.pause();
//     music.currentTime = 0;
//   }

//   init();

document.getElementById('play').addEventListener('click', () => {
  const music = document.getElementById('music');
  music.loop = true;
  music.play();
});
document.getElementById('stop').addEventListener('click', () => {
  const music = document.getElementById('music');
  music.pause();
  music.currentTime = 0;
});

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

// スライドショーの配列
const photo = document.getElementById('photo');
const scale = document.getElementById('scale');
const comment = document.getElementById('comment');
const results = [
  {img:'../www/image/sakurajima.jpg', s:'桜島', c:'鹿児島のシンボル'},
  {img:'../www/image/yakushima.jpg', s:'屋久島', c:'樹齢1000年の屋久杉。世界遺産'},
  {img:'../www/image/senganen.jpg', s:'仙巌園', c:'薩摩の殿様と姫君が愛した島津家の庭園。世界遺産'},
  {img:'../www/image/sogi_fall.jpg', s:'曾木の滝', c:'東洋のナイアガラ'},
  {img:'../www/image/ogawa_fall.jpg', s:'雄川の滝', c:'エメラルドグリーンでフォトジェニックな絶景'},
  {img:'../www/image/nagabuchi.jpg', s:'叫びの肖像', c:'鹿児島出身の長渕剛が約7万5千人の観衆でオールナイトコンサート。桜島からの音は海を越えた鹿児島市でも聞き取れたそう'},
  {img:'../www/image/saigoutakamori.jpg', s:'西郷隆盛銅像', c:'鹿児島の有名な偉人、西郷どん'},
  {img:'../www/image/rocet.jpg', s:'種子島宇宙センター', c:'日本最大のロケット発射場で世界一美しいロケット発射場と言われている'},
  {img:'../www/image/sunamusi_onsen.jpg', s:'指宿砂蒸し温泉', c:'身体の芯まで温まる砂蒸し温泉'},
  {img:'../www/image/tamatebako_onsen.jpg', s:'玉手箱温泉', c:'開聞岳を望む絶景露天風呂'},
  {img:'../www/image/kurobuta_syabusyabu.jpg', s:'黒豚しゃぶしゃぶ', c:'西郷隆盛も愛した黒豚しゃぶしゃぶ。「薩摩の黒」と呼ばれるご当地グルメ'},
  {img:'../www/image/sirokuma_muzyaki.jpg', s:'シロクマ無邪気', c:'鹿児島名物のスイーツ。具だくさんのかき氷'},
  {img:'../www/image/kibinago.jpg', s:'きびなごの刺身', c:'繊細で傷みやすいきびなごは、新鮮第一。食べるときは酢味噌で'},
  {img:'../www/image/tukeage.jpg', s:'さつま揚げ', c:'鹿児島のお土産といえばこれ！'},
  {img:'../www/image/zyanbomochi.jpg', s:'両棒餅（ぢゃんぼ餅）', c:'楕円状のお餅を竹串に2個指し、上から甘い砂糖醤油のとろみたれをかけたもの'},
  {img:'../www/image/katuobushi.jpg', s:'かつお節', c:'鹿児島県枕崎市はかつお節の生産量日本一'},
];

let n;
photo.src = results[mySwiper].img;
scale.textContent = results[mySwiper].s;
comment.textContent = results[mySwiper].c;