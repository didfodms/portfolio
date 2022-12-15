const activityEl = document.querySelector("#activity");

const innerActivityEl = activityEl.querySelector("#inner");
//const outerActivityEl = activityEl.querySelector("#outer");
const studyActivityEl = activityEl.querySelector("#study");
const elseActivityEl = activityEl.querySelector("#else");

/* innerActivity - slider */
const innerActivityListEl = innerActivityEl.querySelector(".list");
const innerActivitySliderEl = innerActivityListEl.querySelectorAll(".slider");

let innerActivityCurrentIndex = 0;

const innerActivityClickEvent = $(innerActivitySliderEl).on(
  "click",
  function (event) {
    const currentIndex = $(this).index();
    const currentSlider = innerActivitySliderEl[currentIndex];

    const eventPositionY = event.clientY;
    const currentContainerTop = currentSlider.getBoundingClientRect().top;
    const currentContainerBottom = currentSlider.getBoundingClientRect().bottom;
    const currentBound = (currentContainerTop + currentContainerBottom) / 2;

    event.stopPropagation();

    if (currentIndex === 0 || eventPositionY > currentBound) {
      if (currentIndex < innerActivitySliderEl.length - 1) {
        innerActivityCurrentIndex = currentIndex + 1;
        if (innerActivityCurrentIndex >= innerActivitySliderEl.length) {
          innerActivityCurrentIndex = 0;
        }
        innerActivityListEl.style.bottom = `${
          innerActivityCurrentIndex * 100
        }%`;
      }
    } else if (
      currentIndex === innerActivitySliderEl.length - 1 ||
      eventPositionY < currentBound
    )
      if (currentIndex > 0) {
        innerActivityCurrentIndex = currentIndex - 1;
        if (innerActivityCurrentIndex < 0) {
          innerActivityCurrentIndex = innerActivitySliderEl.length - 1;
        }
        innerActivityListEl.style.bottom = `${
          innerActivityCurrentIndex * 100
        }%`;
      }
  }
);

/* study - slider */
const studyActivityListEl = studyActivityEl.querySelector(".list");
const studyActivitySliderEl = studyActivityListEl.querySelectorAll(".slider");

let studyActivityCurrentIndex = 0;

const studyActivityClickEvent = $(studyActivitySliderEl).on(
  "click",
  function (event) {
    const currentIndex = $(this).index();
    const currentSlider = studyActivitySliderEl[currentIndex];

    const eventPositionY = event.clientY;
    const currentContainerTop = currentSlider.getBoundingClientRect().top;
    const currentContainerBottom = currentSlider.getBoundingClientRect().bottom;
    const currentBound = (currentContainerTop + currentContainerBottom) / 2;

    event.stopPropagation();

    if (currentIndex === 0 || eventPositionY > currentBound) {
      if (currentIndex < studyActivitySliderEl.length - 1) {
        studyActivityCurrentIndex = currentIndex + 1;
        if (studyActivityCurrentIndex >= studyActivitySliderEl.length) {
          studyActivityCurrentIndex = 0;
        }
        studyActivityListEl.style.bottom = `${
          studyActivityCurrentIndex * 100
        }%`;
      }
    } else if (
      currentIndex === studyActivitySliderEl.length - 1 ||
      eventPositionY < currentBound
    )
      if (currentIndex > 0) {
        studyActivityCurrentIndex = currentIndex - 1;
        if (studyActivityCurrentIndex < 0) {
          studyActivityCurrentIndex = studyActivitySliderEl.length - 1;
        }
        studyActivityListEl.style.bottom = `${
          studyActivityCurrentIndex * 100
        }%`;
      }
  }
);

/* else - slider */
const elseActivityListEl = elseActivityEl.querySelector(".list");
const elseActivitySliderEl = elseActivityListEl.querySelectorAll(".slider");

let elseActivityCurrentIndex = 0;

const elseActivityClickEvent = $(elseActivitySliderEl).on(
  "click",
  function (event) {
    const currentIndex = $(this).index();
    const currentSlider = elseActivitySliderEl[currentIndex];

    const eventPositionY = event.clientY;
    const currentContainerTop = currentSlider.getBoundingClientRect().top;
    const currentContainerBottom = currentSlider.getBoundingClientRect().bottom;
    const currentBound = (currentContainerTop + currentContainerBottom) / 2;

    event.stopPropagation();

    if (currentIndex === 0 || eventPositionY > currentBound) {
      if (currentIndex < elseActivitySliderEl.length - 1) {
        elseActivityCurrentIndex = currentIndex + 1;
        if (elseActivityCurrentIndex >= elseActivitySliderEl.length) {
          elseActivityCurrentIndex = 0;
        }
        elseActivityListEl.style.bottom = `${elseActivityCurrentIndex * 100}%`;
      }
    } else if (
      currentIndex === elseActivitySliderEl.length - 1 ||
      eventPositionY < currentBound
    )
      if (currentIndex > 0) {
        elseActivityCurrentIndex = currentIndex - 1;
        if (elseActivityCurrentIndex < 0) {
          elseActivityCurrentIndex = elseActivitySliderEl.length - 1;
        }
        elseActivityListEl.style.bottom = `${elseActivityCurrentIndex * 100}%`;
      }
  }
);
