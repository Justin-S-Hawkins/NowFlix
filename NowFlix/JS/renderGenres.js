import { apiKey } from "./renderBackdrop.js";
import { genreMap } from "./renderMovieData.js";

const genresContainer = document.querySelector(".genres-container");
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
    // const genreScroll = document.createElement("ul");
    const scroll = document.createElement("ul");
    // genreScroll.classList.add("scroll");
    scroll.classList.add("scroll");
    // div append
    renderByGenre(key, scroll);
    genresContainer.append(genreTab, scroll);
    //clone li
    // genreScroll.innerHTML += genreScroll.innerHTML;
    // genreContainer.addEventListener("scroll", () => {
    //   const scrollWidth = genreContainer.scrollWidth / 2;
    //   if (genreContainer.scrollLeft >= scrollWidth) {
    //     genreContainer.scrollLeft = 0;
    //   }
    // });
    console.log(genreMap[key]);
  }
  // genresContainer.append(div);
};
renderGenre(genreMap);

async function renderByGenre(key, container) {
  const moviesByGenre = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${key}`
  );

  // const movie = await fetch(
  //   `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${apiKey}`
  // );
  // console.log(movie);
  const data = await moviesByGenre.json();
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
    containerM.append(moviePosterPath);
    movieContainer.append(containerM, movieTitle);
    container.append(movieContainer);
  });

  // console.log(movieArray);
}
