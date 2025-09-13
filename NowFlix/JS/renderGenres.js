import { apiKey } from "./renderBackdrop.js";
import { genreMap } from "./renderMovieData.js";

const genresContainer = document.querySelector(".genres-container");

//keep track of pages + total pages per genre
const genreState = {};

const renderGenre = (genreMap) => {
  console.log(Object.keys(genreMap));
  //individual genre container
  // const div = document.createElement("div");
  // div.classList.add("genre-box");
  // const genreContainer = document.querySelector(".genres-container");
  for (let key of Object.keys(genreMap)) {
    //genre tab
    const genreTab = document.createElement("div");
    genreTab.classList.add("genre-chevron-tab");

    const genreName = document.createElement("h2");
    genreName.classList.add("genre-name");
    genreName.textContent = `${genreMap[key]}`;

    const chevron = document.createElement("div");
    chevron.classList.add("fa-solid", "fa-chevron-right", "genre-chevron");

    genreTab.append(genreName, chevron);

    //genre scroll
    const scroll = document.createElement("ul");
    scroll.classList.add("scroll");

    //init state for this genre
    genreState[key] = { page: 1, totalPages: null, loading: false };

    renderByGenre(key, scroll);

    //set up infinite scroll listener
    scroll.addEventListener("scroll", () => {
      handleScroll(key, scroll);
    });

    genresContainer.append(genreTab, scroll);

    console.log(genreMap[key]);
  }
  // genresContainer.append(div);
};
renderGenre(genreMap);

async function renderByGenre(key, container) {
  if (genreState[key].loading) return;
  genreState[key].loading = true;

  const { page } = genreState[key];

  // const moviesByGenre = await fetch(
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${key}`
  // );

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${key}&page=${page}`
  );

  // const movie = await fetch(
  //   `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${apiKey}`
  // );
  // console.log(movie);
  // const data = await moviesByGenre.json();
  const data = await response.json();

  //store total pages from API
  if (!genreState[key].totalPages) {
    genreState[key].totalPages = data.total_pages;
  }

  const movieArray = data.results.slice(0, 10);

  // moviePosterPath.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${.poster_path})`;

  movieArray.forEach((movie) => {
    const movieContainer = document.createElement("li");
    movieContainer.classList.add("movie-li");

    const containerM = document.createElement("div");
    containerM.classList.add("container-m");

    const moviePosterPath = document.createElement("div");
    moviePosterPath.classList.add("genre-poster-path");
    moviePosterPath.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;

    const movieTitle = document.createElement("div");
    movieTitle.textContent = movie.title;
    movieTitle.classList.add("movie-title");

    // const playBtn = document.createElement("i");
    // playBtn.classList.add("fa-solid", "fa-play play-btn");

    containerM.append(moviePosterPath /*,playBtn*/);
    movieContainer.append(containerM, movieTitle);
    container.append(movieContainer);
  });
  //mark as done loading
  genreState[key].loading = false;

  // console.log(movieArray);
}

//handles detecting scroll near end
function handleScroll(key, container) {
  const { page, totalPages, loading } = genreState[key];

  // don’t fetch if already loading or done
  if (loading || (totalPages && page >= totalPages)) return;

  // check if user is near end of horizontal scroll

  console.log(
    "scrollLeft:",
    container.scrollLeft,
    "clientWidth:",
    container.clientWidth,
    "scrollWidth:",
    container.scrollWidth
  );

  if (
    container.scrollLeft + container.clientWidth >=
    container.scrollWidth - 200
  ) {
    genreState[key].page++;
    renderByGenre(key, container);
  }
}
