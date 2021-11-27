const menu = document.getElementById("clickMenu");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("logoOverlay");
const closeOverlay = document.getElementById("close");
const headerHide = document.getElementById("headerHide");
const mainHide = document.getElementById("mainHide");
const footerHide = document.getElementById("footerHide");

document.getElementById("menu").addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.style.display = "flex";
  menu.style.justifyContent = "space-around";
  menu.style.transition = "0.6s";
  closeOverlay.classList.remove("hidden");
  overlay.classList.remove("hidden");
  logo.classList.remove("hidden");
  headerHide.classList.add("hidden");
  mainHide.classList.add("hidden");
  footerHide.classList.add("hidden");
});

function closeMenu() {
  menu.classList.add("hidden");
  menu.style.display = "none";
  closeOverlay.classList.add("hidden");
  overlay.classList.add("hidden");
  logo.classList.add("hidden");
  headerHide.classList.remove("hidden");
  mainHide.classList.remove("hidden");
  footerHide.classList.remove("hidden");
}

overlay.addEventListener("click", closeMenu);
closeOverlay.addEventListener("click", closeMenu);

(function () {
  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  const checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = window.scrollY || document.documentElement.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  const toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      //replace 52 with the height of your header in px

      headerHide.classList.add("hideHeader");
      prevDirection = direction;
    } else if (direction === 1) {
      headerHide.classList.remove("hideHeader");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();
