import "./css/style.css";
import "./css/fonts.css";

const animated = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", animated);
