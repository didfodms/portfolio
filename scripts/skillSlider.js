const skillEl = document.querySelector("#skill");
const sliderEl = skillEl.querySelectorAll(".slider");
const sliderListEl = skillEl.querySelector(".list");

const nextBtnEl = skillEl.querySelector(".btn.next");
const prevBtnEl = skillEl.querySelector(".btn.prev");

let currentIndex = 0;

nextBtnEl.addEventListener("click", function (event) {
  currentIndex++;
  currentIndex %= sliderEl.length;
  sliderListEl.style.bottom = `${currentIndex * 100}%`;

  /* 여기 skill 바뀌는거 추가 */

  event.stopPropagation();
});

prevBtnEl.addEventListener("click", function (event) {
  event.stopPropagation();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderEl.length - 1;
  }
  sliderListEl.style.bottom = `${currentIndex * 100}%`;

  /* 여기 skill 바뀌는거 추가 */

  event.stopPropagation();
});
