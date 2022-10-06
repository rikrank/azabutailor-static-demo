import "./lib/smoothScroll";
import "regenerator-runtime/runtime";
import { featureSliderHandler, mvSliderHandler } from "./lib/swiper";
import { Top } from "./namespace/top";

// import axios from "axios";

// const insertSprite = async () => {
//   const res = await axios.get("/dist/assets/svg/sprite.svg");

//   const data = res.data;
//   const body = document.getElementsByTagName("body")[0];

//   body.insertAdjacentHTML("afterbegin", data);
// };

// insertSprite();

window.addEventListener("DOMContentLoaded", () => {
  featureSliderHandler();
  mvSliderHandler();
});

Top();
