const containerEl = document.querySelectorAll(".container");

const containerClickEvent = $(containerEl).on("click", function (event) {
  const currentIndex = $(this).index();
  const currentContainer = containerEl[currentIndex];

  // window.pageYOffset +
  const eventPositionY = event.clientY;
  const currentContainerTop = currentContainer.getBoundingClientRect().top;
  const currentContainerBottom =
    currentContainer.getBoundingClientRect().bottom;
  const currentBound = (currentContainerTop + currentContainerBottom) / 2;

  if (currentIndex === 0 || eventPositionY > currentBound) {
    if (currentIndex < containerEl.length - 1) {
      window.scrollBy({
        top: containerEl[currentIndex + 1].getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
  } else if (
    currentIndex === containerEl.length - 1 ||
    eventPositionY < currentBound
  )
    if (currentIndex > 0) {
      window.scrollBy({
        top: containerEl[currentIndex - 1].getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
});
