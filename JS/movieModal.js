import { overviewModal } from "./overview.js";

const movieModal = document.querySelector(".movie-modal");
const movieName = document.querySelector(".movie-name");
const overviewPosition = document.querySelector(".overview-position");
const overviewContainer = document.querySelector(".overview-container");
export const footerPosition = document.querySelector(".footer-position");
const footer = document.querySelector("footer");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");
export const playMovie = async (movie, data, btn) => {
  btn.addEventListener("click", () => {
    movieName.textContent = `${movie.title}`;
    movieModal.classList.add("active");
    header.classList.add("dark-header-movie");
    movieModal.append(overviewContainer, footer);
  });
  overviewModal(movie, data, btn);
};
logo.addEventListener("click", () => {
  movieModal.classList.remove("active");
  overviewContainer.classList.remove("active-modal");
  header.classList.remove("dark-header-movie");
  overviewPosition.append(overviewContainer);
  footerPosition.append(footer);
});

// const endTime = document.querySelector(".end-time");
// endTime.textContent = movie.durText;
