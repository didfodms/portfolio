const projectEl = document.querySelector("#project");

const projectWrapEl = projectEl.querySelector(".projects-wrap");
const projectSliderWrapEl = projectEl.querySelector(".slider-wrap");

const projectSliderEl = projectWrapEl.querySelectorAll(".slider");
const projectsEl = projectSliderWrapEl.querySelectorAll(".slider");

const projectListEl = projectWrapEl.querySelector(".list");
const projectSliderListEl = projectSliderWrapEl.querySelector(".list");

/* button el assign */
const nextBtnEl = projectEl.querySelector(".btn.next");
const prevBtnEl = projectEl.querySelector(".btn.prev");

let projectCurrentIndex = 0;

nextBtnEl.addEventListener("click", function (event) {
  projectCurrentIndex++;
  projectCurrentIndex %= projectSliderEl.length;
  projectListEl.style.bottom = `${projectCurrentIndex * 100}%`;
  projectSliderListEl.style.bottom = `${projectCurrentIndex * 100}%`;

  event.stopPropagation();
});

prevBtnEl.addEventListener("click", function (event) {
  projectCurrentIndex--;
  if (projectCurrentIndex < 0) {
    projectCurrentIndex = projectSliderEl.length - 1;
  }
  projectListEl.style.bottom = `${projectCurrentIndex * 100}%`;
  projectSliderListEl.style.bottom = `${projectCurrentIndex * 100}%`;

  event.stopPropagation();
});

/* prevent-event propagation */
const firstProjectEl = projectSliderListEl.querySelector("#first-project");
const secondProjectEl = projectSliderListEl.querySelector("#second-project");
const thirdProjectEl = projectSliderListEl.querySelector("#third-project");

firstProjectEl.addEventListener("click", function (event) {
  event.stopPropagation();
});
secondProjectEl.addEventListener("click", function (event) {
  event.stopPropagation();
});
thirdProjectEl.addEventListener("click", function (event) {
  event.stopPropagation();
});
