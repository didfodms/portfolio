const skillEl = document.querySelector("#skill");
const skillsWrapEl = skillEl.querySelector(".skills-wrap");
const skillSliderWrapEl = skillEl.querySelector(".slider-wrap");

const skillSliderEl = skillsWrapEl.querySelectorAll(".slider");
const sliderEl = skillSliderWrapEl.querySelectorAll(".slider");

const skillSliderListEl = skillsWrapEl.querySelector(".list");
const sliderListEl = skillSliderWrapEl.querySelector(".list");

/* html, css, js */
const firstSkillEl = skillEl.querySelector("#first-skill");

/* prevent slide */
firstSkillEl.addEventListener("click", function (event) {
  event.stopPropagation();
});

const htmlEl = skillEl.querySelector("#html");
const cssEl = skillEl.querySelector("#css");
const jsEl = skillEl.querySelector("#js");

const tagEl = skillEl.querySelectorAll(".tag");

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
