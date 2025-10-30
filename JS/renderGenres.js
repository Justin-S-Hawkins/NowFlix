import { apiKey } from "./renderBackdrop.js";
import { genreMap, getDuration } from "./renderMovieData.js";
import { addToFavorites } from "./favorites.js";
import { overviewModal } from "./overview.js";
import { playMovie, footerPosition } from "./movieModal.js";
import { logo, header, footer } from "./main.js";

const genresContainer = document.querySelector(".genres-container");
const genreModalContainer = document.querySelector(".genre-modal-container");
const genreModalName = document.querySelector(".genre-modal-name");

//keep track of pages + total pages per genre
const genreState = {};

const renderGenre = (genreMap) => {
  console.log(Object.keys(genreMap));
  //individual genre container

  for (let key of Object.keys(genreMap)) {
    //genre scroll
    const scroll = document.createElement("ul");

    scroll.classList.add("scroll");
    scroll.dataset.id = key;

    const scrollPosition = document.createElement("div");
    scrollPosition.classList.add("scroll-position");
    scrollPosition.append(scroll);
    scrollPosition.dataset.genreId = `${key}`;

    // const returnFunction = (currentGenre) => {
    //   // console.log(currentGenre);
    //   // console.log(scrollPosition);
    //   scrollPosition.append(scroll);
    // };
    //genre tab
    const genreTab = document.createElement("div");
    genreTab.classList.add("genre-chevron-tab");

    const genreName = document.createElement("h2");
    genreName.classList.add("genre-name");
    genreName.textContent = `${genreMap[key]}`;
    const genreMovie = document.querySelector(".genre-movies");
    genreTab.addEventListener("click", () => {
      genreModalContainer.classList.add("active");
      genreModalContainer.append(footer);
      genreModalName.textContent = `${genreMap[key]}`;
      header.classList.add("dark-header-movie");
      genreMovie.append(scroll);
      scroll.classList.add("adjust-genre-container");
      // const currentGenre = genreMovie.firstChild.dataset.id;
      // console.log(`${scroll.dataset.id}`);
      // returnFunction(currentGenre);
      console.log(genreMap[key]);
      logo.addEventListener("click", () => {
        genreModalContainer.classList.remove("active");
        header.classList.remove(".dark-header-movie");
        footerPosition.append("footer");
        scrollPosition.append(scroll);
        scroll.classList.remove("adjust-genre-container");
      });
      const exit = () => {
        genreModalContainer.classList.remove("active");
        header.classList.remove(".dark-header-movie");
        footerPosition.append("footer");
        scrollPosition.append(scroll);
        scroll.classList.remove("adjust-genre-container");
      };
      const genreList = document.querySelector(".genre-list");
      const favorites = document.querySelector(".favorites");
      logo.addEventListener("click", exit);
      favorites.addEventListener("click", exit);
      genreList.addEventListener("click", exit);
    });

    genreName.id = `${genreMap[key]}`;

    const chevron = document.createElement("div");
    chevron.classList.add("fa-solid", "fa-chevron-right", "genre-chevron");

    genreTab.append(genreName, chevron);

    //init state for this genre
    genreState[key] = { page: 1, totalPages: null, loading: false };

    renderByGenre(key, scroll);

    //set up infinite scroll listener
    // scroll.addEventListener("scroll", () => {
    //   handleScroll(key, scroll);
    // });
    // const scrollPosition = document.createElement("div");
    // scrollPosition.classList.add("scroll-position");
    // scrollPosition.append(scroll);
    // scrollPosition.dataset.genreId = `${key}`;

    genresContainer.append(genreTab, scrollPosition);

    console.log(genreMap[key]);
  }
};
renderGenre(genreMap);

async function renderByGenre(key, container) {
  if (genreState[key].loading) return;
  genreState[key].loading = true;

  const { page } = genreState[key];

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${key}&page=${page}`
  );

  const data = await response.json();

  //store total pages from the Movie APi
  if (!genreState[key].totalPages) {
    genreState[key].totalPages = data.total_pages;
  }

  const movieArray = data.results.slice(0, 10);

  movieArray.forEach((movie) => {
    const movieContainer = document.createElement("li");
    movieContainer.classList.add("movie-li");
    movieContainer.dataset.id = movie.id;
    movieContainer.dataset.originalListId = container.dataset.id;
    console.log(movieContainer.dataset.originalList);

    const addIcon = document.createElement("div");
    addIcon.classList.add("add-icon");
    addIcon.textContent = "Add To My Favorites";

    const removeIcon = document.createElement("div");
    removeIcon.classList.add("add-icon");
    removeIcon.textContent = "Remove From My Favorites";

    const playIcon = document.createElement("i");
    playIcon.classList.add("fa-solid", "fa-play", "play-btn");

    const containerM = document.createElement("div");
    containerM.classList.add("container-m");

    const moviePosterPath = document.createElement("div");
    moviePosterPath.classList.add("genre-poster-path");
    moviePosterPath.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;

    const movieInfo = document.createElement("i");
    movieInfo.classList.add("movie-info", "fa-solid", "fa-circle-info");

    getDuration(movie).then((data) => {
      overviewModal(movie, data, movieInfo);
      playMovie(movie, data, playIcon);
    });

    moviePosterPath.append(movieInfo, playIcon, addIcon);

    const movieTitle = document.createElement("div");
    movieTitle.textContent = movie.title;
    movieTitle.classList.add("movie-title");
    movieContainer.dataset.title = `${movie.title}`;

    containerM.append(moviePosterPath);
    movieContainer.append(containerM, movieTitle);
    container.append(movieContainer);
    addToFavorites(moviePosterPath, movieContainer, addIcon, removeIcon);
  });
  //mark as done loading
  genreState[key].loading = false;

  // console.log(movieArray);
}

logo.addEventListener("click", () => {
  genreModalContainer.classList.remove("active");
  header.classList.remove(".dark-header-movie");
  footerPosition.append("footer");
});
