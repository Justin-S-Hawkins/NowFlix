import { getPopularMovies } from "./renderBackdrop.js";
import { genreMap } from "./renderMovieData.js";

const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");
const browseContainer = document.querySelector(".browse-container");
const header = document.querySelector("header");
const body = document.querySelector("body");
/*search stays open when clicked*/
searchContainer.addEventListener("click", () => {
  searchContainer.style.width = "340px";
});

document.addEventListener("click", (e) => {
  if (!searchContainer.contains(e.target)) {
    searchContainer.style.width = "53px";
  }
});

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
  a.href = `#${value}`;
  a.textContent = value;
  li.append(a);
  li.classList.add("gen-li");
  renderGenreTab.append(li);
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

getPopularMovies();
