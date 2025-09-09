// import { getPopularMovies } from "./popularBackdrop.js";
import { getPopularMovies } from "./renderBackdrop.js";

const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");
const browseContainer = document.querySelector(".browse-container");
const genreList = document.querySelector(".browse-dropdown-right");
const tabsList = document.querySelector(".tabs-list");
const genres = document.querySelector(".genres");
const header = document.querySelector("header");

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

getPopularMovies();
