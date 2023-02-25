//Sellectors
const primaryNav = document.querySelector(".app__navbar-links");
const openMenu = document.querySelector(".burger");
const arrowOne = document.querySelector(".arrowdown1");
const arrowTwo = document.querySelector(".arrowdown2");
const boxOne = document.querySelector(".app__navbar-dropdown-left-box");
const boxTwo = document.querySelector(".app__navbar-dropdown-right-box");
// event listner & Functions
openMenu.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    openMenu.setAttribute("aria-expanded", true);
    document.querySelector(".menu-open").style.display = "none";
    document.querySelector(".menu-close").style.display = "block";
    document.querySelector(".app__navbar-login").style.display = "block";
    document.querySelector(".log").style.display = "block";
    document.querySelector(".reg").style.display = "flex";

    primaryNav.style.boxShadow = "-164px 0px 0px rgba(0, 0, 0, 0.7)";
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    openMenu.setAttribute("aria-expanded", false);
    document.querySelector(".menu-open").style.display = "block";
    document.querySelector(".menu-close").style.display = "none";
    document.querySelector(".app__navbar-login").style.display = "none";
    document.querySelector(".log").style.display = "none";
    document.querySelector(".reg").style.display = "none";
    primaryNav.style.boxShadow = "none";
  }
});
arrowOne.addEventListener("click", () => {
  arrowOne.classList.toggle("rotate");
  if (boxOne.style.display !== "block") {
    boxOne.style.display = "block";
  } else {
    boxOne.style.display = "none";
  }
});
arrowTwo.addEventListener("click", () => {
  arrowTwo.classList.toggle("rotate");
  if (boxTwo.style.display !== "block") {
    boxTwo.style.display = "block";
  } else {
    boxTwo.style.display = "none";
  }
});
