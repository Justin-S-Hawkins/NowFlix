const apiKey = "89ace7f2ce3d9aef28abb3f6cb2d809e";
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; /* data.results */
const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`; /* data.genres */

/*Dom Elements*/
const leftArrow = document.querySelector(".hero-arrow-left");
const rightArrow = document.querySelector(".hero-arrow-right");
const backdropContainer = document.querySelector(".hero-backdrop");
const backdropList = document.querySelector(".hero-backdrop-list");

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

let currentIndex = 0;

export async function getPopularMovies() {
  const resolution = await fetch(popularUrl);
  const data = await resolution.json();
  console.log(data.results);
  const movies = data.results;
  renderBackdrop(movies);
}

const renderBackdrop = (movies) => {
  /*clear backdrop*/
  backdropList.innerHTML = "";
  /*determines what movie object in the array we're on by index*/
  const movie = movies[currentIndex];
  /*create the li that will be the dom container for all the informaion in the ul (backdropList)*/
  const li = document.createElement("li");
  /*adding the class for positioning*/
  li.classList.add("backdrop-li");
  /*styling the background for the li*/
  // li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
  // li.style.backgroundImage = `linear-gradient(to bottom, rgb(255,255,255), rgb(255,255,255) url(https://image.tmdb.org/t/p/original${movie.backdrop_path}))`;
  li.style.backgroundImage = `linear-gradient(to bottom, rgba(18, 5, 28, 1) -10%, transparent, transparent, rgba(18, 5, 28, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
  /* create the container to append all the movie information to */
  const InfoContainer = document.createElement("div");
  /*adding class for color and positioning */
  // InfoContainer.classList.add("movie-data");
  InfoContainer.classList.add("info-layout");
  /*call movieData function and input the container, and the movie, you want the information from and appended to the container in the parameters.*/
  movieData(movie, InfoContainer);
  /*append the container to the li*/
  li.append(InfoContainer);
  /*append the li to the backdrop ul */
  backdropList.appendChild(li);
};

const movieData = async (movie, container) => {
  /* Title */
  const movieTitle = document.createElement("h1");
  movieTitle.textContent = movie.title;
  movieTitle.classList.add("title");

  const info = document.createElement("div");
  info.classList.add("movie-data");

  /* Year */
  const year = document.createElement("div");
  year.textContent = movie.release_date.split("-")[0];

  /* Duration */
  const durationText = await getDuration(movie);
  const durationElm = document.createElement("div");
  durationElm.textContent = durationText;

  /* Genre */
  const genres = document.createElement("div");
  const value = movie.genre_ids
    .map((id) => genreMap[id])
    .filter(Boolean)
    .join(", ");
  genres.textContent = value;

  /* Overview button */
  const overviewBtn = document.createElement("div");
  overviewBtn.classList.add("fa-solid", "fa-message");
  overviewBtn.addEventListener("click", () => {
    overviewBtn.style.color = "red";
  });

  /* Play button */
  const playContainer = document.createElement("div");
  playContainer.classList.add("play-container");
  playContainer.innerHTML = `
    <i class="fa-solid fa-play play-icon"></i>
    <span>Watch Now </span><span class="free-txt">FREE</span>
  `;

  info.append(year, durationElm, genres, overviewBtn);
  container.append(movieTitle, info, playContainer);
};

/*Grab durration*/
async function getDuration(movie) {
  const getDur = await fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`
  );
  const data = await getDur.json();
  const hours = Math.floor(data.runtime / 60);
  const minutes = data.runtime % 60;
  const durString = `${hours}h ${minutes}m`;
  return durString;
}
