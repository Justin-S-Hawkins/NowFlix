const apiKey = "89ace7f2ce3d9aef28abb3f6cb2d809e";
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; /* data.results */
const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`; /* data.genres */

/*Dom Elements*/
const leftArrow = document.querySelector(".hero-arrow-left");
const rightArrow = document.querySelector(".hero-arrow-right");
const backdropContainer = document.querySelector(".hero-backdrop");
const backdropList = document.querySelector(".hero-backdrop-list");
const dotsContainer = document.querySelector(".dots-container");

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
const movieArray = [];
export async function getPopularMovies() {
  const resolution = await fetch(popularUrl);
  const data = await resolution.json();
  // console.log(data.results);
  const movies = data.results;

  ////////
  movies.forEach((movie) => {
    movieArray.push(movie);
  });
  renderBackdrop(movieArray);
  console.log(movieArray.length);

  const next = () => {
    currentIndex =
      currentIndex + 1 < movieArray.length
        ? currentIndex + 1
        : (currentIndex = 0);
    console.log(currentIndex);
    dotsContainer.innerHTML = "";
    renderBackdrop(movieArray);
  };
  ///////
  right();
  left();
  setInterval(next, 5000);
}
const right = () => {
  rightArrow.addEventListener("click", () => {
    dotsContainer.innerHTML = "";
    currentIndex =
      currentIndex + 1 < movieArray.length
        ? currentIndex + 1
        : (currentIndex = 0);

    renderBackdrop(movieArray);
  });
};
// right();
const left = () => {
  leftArrow.addEventListener("click", () => {
    dotsContainer.innerHTML = "";
    currentIndex = currentIndex
      ? currentIndex - 1
      : (currentIndex = movieArray.length - 1);
    renderBackdrop(movieArray);
  });
};
// left();

// const renderBackdrop = (movie) => {
//   backdropList.innerHTML = "";
//   const li = document.createElement("li");
//   li.classList.add("backdrop-li");
//   li.style.backgroundImage = `linear-gradient(to bottom, rgba(18, 5, 28, 1) -10%, transparent, transparent , rgba(18, 5, 28, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   backdropList.append(li);
// };

const renderBackdrop = (movies) => {
  /*clear backdrop*/
  backdropList.innerHTML = "";
  /*current index === current backdrop / movie */
  const movie = movies[currentIndex];
  console.log(movies[currentIndex]);
  // const movie = movies[currentIndex];

  /*create the li that will be the dom container for all the informaion in the ul (backdropList)*/
  const li = document.createElement("li");

  /*adding the class for positioning*/
  li.classList.add("backdrop-li");
  /*styling the background for the li*/
  // li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
  // li.style.backgroundImage = `linear-gradient(to bottom, rgb(255,255,255), rgb(255,255,255) url(https://image.tmdb.org/t/p/original${movie.backdrop_path}))`;
  li.style.backgroundImage = `linear-gradient(to bottom, rgba(18, 5, 28, 1) -10%, transparent, transparent , rgba(18, 5, 28, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
  /* create the container to append all the movie information to */
  const InfoContainer = document.createElement("div");
  /*adding class for color and positioning */
  // InfoContainer.classList.add("movie-data");
  InfoContainer.classList.add("info-layout");
  /*build dots rotation*/

  /*call movieData function and input the container, and the movie, you want the information from and appended to the container in the parameters.*/
  movieData(movie, InfoContainer);
  /*append the container to the li*/
  li.append(InfoContainer);
  /*append the li to the backdrop ul */

  for (let i = 0; i < movies.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.append(dot);
    if (i === currentIndex) {
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
    }
  }
  console.log(dotsContainer);
  backdropList.append(li);
};
console.log(movieArray);
// renderBackdrop(movieArray);
// const renderBackdrops = (movies) => {
//   backdropList.innerHTML = "";
//   movies.forEach((movie) => {
//     const li = document.createElement("li");
//     li.classList.add("backdrop-li");
//     li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//     backdropList.append(li);
//     console.log(movie);
//   });
// };
// renderBackdrops(movieArray);
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

  /*Getting movie content rating */
  const rating = document.createElement("div");
  rating.classList.add("rating");
  async function getRatings(movieId) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${apiKey}`
    );

    const data = await res.json();
    const usRelease = data.results.find((r) => r.iso_3166_1 === "US");
    if (usRelease.release_dates.length > 0) {
      console.log(usRelease.release_dates[0].certification || "NR");
      console.log(data.results.iso_3166_1);
      rating.textContent = usRelease.release_dates[0].certification || "NR";
    }
    console.log(usRelease);
  }
  getRatings(movie.id);

  info.append(year, durationElm, genres, overviewBtn, rating);
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
