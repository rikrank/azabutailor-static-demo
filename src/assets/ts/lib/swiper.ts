import Swiper, { Navigation, Pagination, Autoplay, SwiperOptions } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

// const transition = Number(getComputedStyle(document.documentElement).getPropertyValue("--slide-transition"));

let featureSlide: any;
let SPEED = 2500;
const SLIDE_CHANGE_DURATION = 300;

const initProgressAnimationDuration = () => {
  const inidicatorsIn = document.querySelectorAll(".c-swiper-progress-in");
  inidicatorsIn.forEach((el: any, index) => {
    el.style.animationDuration = SPEED + "ms";
  });
};

const changeStatusClass = (rIdx: number) => {
  const indicators = document.querySelectorAll(".swiper-pagination-bullet");
  indicators.forEach((el, index) => {
    rIdx > index && el.classList.add("is-completed"); // 現在のインデックス以前のものには「.is-completed」を付与
    rIdx < index && el.classList.remove("is-completed"); // 現在のインデックス以降のものは「.is-completed」を削除
  });
};

const swiperOptions: SwiperOptions = {
  speed: SLIDE_CHANGE_DURATION,
  slidesPerView: 1.75,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: SPEED,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".p-top-feature__swiper-pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "<b class='c-swiper-progress-in'>" + "</b>" + "</span>";
    },
  },
  navigation: {
    nextEl: ".p-top-feature__swiper-button-next",
    prevEl: ".p-top-feature__swiper-button-prev",
  },
  on: {
    slideChange: (s) => {
      if (featureSlide) {
        featureSlide.params.autoplay.delay = SPEED - SLIDE_CHANGE_DURATION;
        changeStatusClass(s.realIndex);
      }
    },
  },
};

const mvSwiperElems = document.querySelectorAll(".p-top-mv__swiper-slide");
const currentNumber = document.querySelector(".p-top-mv__swiper-number-display__current");
const maxNumber = document.querySelector(".p-top-mv__swiper-number-display__max");

const mvSwiperOptions: SwiperOptions = {
  speed: SLIDE_CHANGE_DURATION,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 16,
  autoplay: {
    delay: SPEED,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".p-top-mv__swiper-pagination",
    clickable: false,
    type: "bullets",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "<b class='c-swiper-progress-in'>" + "</b>" + "</span>";
    },
  },
  navigation: {
    nextEl: ".p-top-mv__swiper-button-next",
    prevEl: ".p-top-mv__swiper-button-prev",
  },
  on: {
    slideChange: (s) => {
      if (featureSlide && currentNumber) {
        featureSlide.params.autoplay.delay = SPEED - SLIDE_CHANGE_DURATION;
        currentNumber.textContent = `0${String(s.realIndex + 1)}`;
      }
    },
  },
};

const featureSliderHandler = () => {
  featureSlide = new Swiper(".p-top-feature__body", swiperOptions);
  initProgressAnimationDuration();
};

const mvSliderHandler = () => {
  if (currentNumber && maxNumber) {
    maxNumber.textContent = `0${String(mvSwiperElems.length)}`;
  }
  featureSlide = new Swiper(".p-top-mv__swiper", mvSwiperOptions);
  initProgressAnimationDuration();
};

export { featureSliderHandler, mvSliderHandler };
