var imageswiper = new Swiper(".images-slider", {
  effect: "cards",
  grabCursor: true,
  loop: true,
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
  loop: true,
  clickable: false,
  pagination: {
    el: ".swiper-pagination-info",
    dynamicBullets: true,
  },
});

imageswiper.controller.control = this.infoswiper;
