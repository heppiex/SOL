const menu = document.getElementById("clickMenu");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("logoOverlay");
const closeOverlay = document.getElementById("close");

document.getElementById("menu").addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.style.display = "flex";
  menu.style.justifyContent = "space-around";
  closeOverlay.classList.remove("hidden");
  overlay.classList.remove("hidden");
  logo.classList.remove("hidden");
});

function closeMenu() {
  menu.classList.add("hidden");
  menu.style.display = "none";
  closeOverlay.classList.add("hidden");
  overlay.classList.add("hidden");
  logo.classList.add("hidden");
}

overlay.addEventListener("click", closeMenu);
closeOverlay.addEventListener("click", closeMenu);
