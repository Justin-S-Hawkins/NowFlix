import { getPopularMovies } from "./renderBackdrop.js";
import { genreMap } from "./renderMovieData.js";

const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");
const browseContainer = document.querySelector(".browse-container");
export const header = document.querySelector("header");
const body = document.querySelector("body");
export const footer = document.querySelector("footer");
/*search stays open when clicked*/
searchContainer.addEventListener("click", () => {
  searchContainer.style.width = "340px";
});

document.addEventListener("click", (e) => {
  if (!searchContainer.contains(e.target)) {
    searchContainer.style.width = "53px";
  }
});
export const closeHamburgerFunction = () => {
  browseDropdown.classList.remove("translate-dropdown");
  searchContainer.classList.remove("show");
  hammyText.classList.remove("show");
  signIn.classList.remove("hide");
  register.classList.remove("hide");
  logo.classList.remove("hide");
};

/*use "mouseenter" instead of "click" to make the background appear deep purple */

browseContainer.addEventListener("mouseenter", () => {
  overlay.classList.add("dark-active");
  header.classList.add("dark-header");
});

browseContainer.addEventListener("mouseleave", () => {
  overlay.classList.remove("dark-active");
  header.classList.remove("dark-header");
});

const renderGenreTab = document.querySelector(".genre-list");
for (let value of Object.values(genreMap)) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.classList.add("gen-li");
  a.href = `#${value}`;
  a.textContent = value;
  li.append(a);

  renderGenreTab.append(li);
  li.addEventListener("click", closeHamburgerFunction);
  console.log;
}
const homeBtnContainer = document.createElement("div");
homeBtnContainer.classList.add("home-btn-container");
const homeBtn = document.createElement("a");
homeBtn.classList.add("fa-solid", "fa-house", "home-btn");
homeBtn.href = "#nowflix";
homeBtnContainer.append(homeBtn);
body.append(homeBtnContainer);
// document.append(homeBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    homeBtnContainer.classList.add("show");
  } else {
    homeBtnContainer.classList.remove("show");
  }
});
const browseDropdown = document.querySelector(".browse-dropdown");
const hamburger = document.querySelector(".hamburger");
// const closeHamburger = document.querySelector(".close-hamburger");
const closeHamburger = document.querySelector(".hammy-container");
const signIn = document.querySelector(".sign-in-btn");
const register = document.querySelector(".register-btn");
export const logo = document.querySelector(".logo");
const hammyText = document.querySelector(".hamburger-close-text");
hamburger.addEventListener("click", () => {
  // browseDropdown.style.translate = "unset";
  browseDropdown.classList.add("translate-dropdown");
  hammyText.classList.add("show");
  searchContainer.classList.add("show");
  signIn.classList.add("hide");
  register.classList.add("hide");
  logo.classList.add("hide");
});

// window.addEventListener(scroll, () => {
//   if (window.scrollY > 1) {
//     header.classList.add("dark-header-movie");
//   } else {
//     header.classList.remove("dark-header-movie");
//   }
// });

getPopularMovies();

closeHamburger.addEventListener("click", closeHamburgerFunction);

closeHamburgerFunction();
