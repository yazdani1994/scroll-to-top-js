// DOM
const scrollToTopDOM = document.getElementsByClassName("scroll-top")[0];
let scrollToTopDOMActive = null;

// property
const maxDegreeRotate = 180;
let isScrolling = false;

// set handlers
window.onscroll = windowOnScrollHandler;
scrollToTopDOM.onclick = scrollToTopDOMClickHandler;

// handlers

function windowOnScrollHandler(event) {
  const thisElement = this;
  const offsetScrollY = parseInt(thisElement.scrollY);

  let finallDegreeRotate = offsetScrollY / 8;

  if (maxDegreeRotate < finallDegreeRotate) {
    finallDegreeRotate = maxDegreeRotate;
    if (!isScrolling) {
      scrollToTopDOM.classList.add("active");
    }
  } else {
    scrollToTopDOM.classList.remove("active");
  }

  scrollToTopDOM.style.transform = `rotate(${finallDegreeRotate}deg)`;
}

function scrollToTopDOMClickHandler(event) {
  if (
    !isScrolling &&
    scrollToTopDOM.classList.contains("active") &&
    0 < window.scrollY
  ) {
    isScrolling = true;
    scrollToTopDOM.classList.remove("active");
    scrollToTopDOMScrollAnimation();
  }
}

function scrollToTopDOMScrollAnimation() {
  if (window.scrollY <= 0) {
    isScrolling = false;
    return false;
  }

  window.scrollBy(0, -50);
  setTimeout(scrollToTopDOMScrollAnimation, 1000 / 60);
}
