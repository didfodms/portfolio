const skillEl = document.querySelector("#skill");
const skillsWrapEl = skillEl.querySelector(".skills-wrap");
const sliderWrapEl = skillEl.querySelector(".slider-wrap");

const skillSliderEl = skillsWrapEl.querySelectorAll(".slider");
const sliderEl = sliderWrapEl.querySelectorAll(".slider");

const skillSliderListEl = skillsWrapEl.querySelector(".list");
const sliderListEl = sliderWrapEl.querySelector(".list");

const nextBtnEl = skillEl.querySelector(".btn.next");
const prevBtnEl = skillEl.querySelector(".btn.prev");

let currentIndex = 0;

/* button */
nextBtnEl.addEventListener("click", function (event) {
  currentIndex++;
  currentIndex %= sliderEl.length;
  skillSliderListEl.style.bottom = `${currentIndex * 100}%`;
  sliderListEl.style.bottom = `${currentIndex * 100}%`;

  event.stopPropagation();
});

prevBtnEl.addEventListener("click", function (event) {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderEl.length - 1;
  }
  skillSliderListEl.style.bottom = `${currentIndex * 100}%`;
  sliderListEl.style.bottom = `${currentIndex * 100}%`;

  event.stopPropagation();
});

/* html, css, js */
const firstSkillEl = skillEl.querySelector("#first-skill");
const htmlEl = skillEl.querySelector("#html");
const cssEl = skillEl.querySelector("#css");
const jsEl = skillEl.querySelector("#js");

const tagEl = skillEl.querySelectorAll(".tag");
console.log(tagEl);

htmlEl.addEventListener("click", function (event) {
  firstSkillEl.style.backgroundColor = ``;
  for (let i = 0; i < tagEl.length; i++) {
    tagEl[i].style.backgroundColor = ``;
    tagEl[i].style.color = ``;
    tagEl[i].style.borderColor = ``;
  }

  event.stopPropagation();
});

cssEl.addEventListener("click", function (event) {
  let r = getRandomInt(255);
  let g = getRandomInt(255);
  let b = getRandomInt(255);
  firstSkillEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  for (let i = 0; i < tagEl.length; i++) {
    r = getRandomInt(255);
    g = getRandomInt(255);
    b = getRandomInt(255);
    tagEl[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    r = getRandomInt(255);
    g = getRandomInt(255);
    b = getRandomInt(255);
    tagEl[i].style.color = `rgb(${r}, ${g}, ${b})`;
    r = getRandomInt(255);
    g = getRandomInt(255);
    b = getRandomInt(255);
    tagEl[i].style.borderColor = `rgb(${r}, ${g}, ${b})`;
  }

  event.stopPropagation();
});

jsEl.addEventListener("click", function (event) {
  console.log(event.target.checked);
  //documentElement == html
  document.documentElement.setAttribute(
    "theme",
    event.target.checked ? "dark-mode" : ""
  );

  event.stopPropagation();
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* ar.js, aframe */
const arJsEl = skillEl.querySelector("#ar.js");
const aframeEl = skillEl.querySelector("#aframe");
