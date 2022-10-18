var imageswiper = new Swiper(".images-slider", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var infoswiper = new Swiper(".info-slider", {
  direction: "vertical",
  effect: "slide",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-info",
    dynamicBullets: true,
  },

  allowTouchMove: false,
});

imageswiper.controller.control = this.infoswiper;

document.addEventListener(
  "play",
  function (e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);
