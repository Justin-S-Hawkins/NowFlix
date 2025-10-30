// https://www.youtube.com/watch?v=uy1tgKOnPB0

// backdropRender(movies[currentIndex]);
// rightArrow.addEventListener("click", () => {
//   currentIndex =
//     currentIndex === movies.length
//       ? (currentIndex = movies.length)
//       : (currentIndex += 1);
//   backdropRender(movies[currentIndex]);
// });
// leftArrow.addEventListener("click", () => {
//   currentIndex =
//     currentIndex === movies.length
//       ? (currentIndex = movies.length)
//       : (currentIndex -= 1);
//   backdropRender(movies[currentIndex]);
//   backdropRender(movies[currentIndex]);
// });

// const backdropRender = (movie) => {
//   backdropContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   backdropContainer.style.backgroundSize = "cover";
//   backdropContainer.style.backgroundPosition = "center";
//   backdropContainer.style.backgroundRepeat = "no-repeat";
//   backdropContainer.style.transition = "all .5s ease-in-out";
// };

// movies.forEach((movie) => {
//   console.log(movie.backdrop_path);
//   const li = document.createElement("li");
//   li.classList.add("backdrop-li");
//   li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   backdropList.appendChild(li);
// });

// const renderBackdrop = (movies) => {
//   movies.forEach((movie) => {
//     console.log(movie.backdrop_path);
//     const li = document.createElement("li");
//     li.classList.add("backdrop-li");
//     li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//     backdropList.appendChild(li);
//   });
// };

//   renderCarousel(movies[currentIndex]);
//   rightArrow.addEventListener("click", () => {
//     currentIndex =
//       currentIndex === movies.length
//         ? (currentIndex = movies.length)
//         : (currentIndex += 1);
//     renderCarousel(movies);
//   });
//   leftArrow.addEventListener("click", () => {
//     currentIndex =
//       currentIndex === movies.length
//         ? (currentIndex = movies.length)
//         : (currentIndex -= 1);
//     renderCarousel(movies[currentIndex]);
//   });
// }
// const movieInfo = (movie) => {
//   const poster = movie.poster_path;
//   const title = movie.title;
//   const review = movie.vote_average;
//   const year = movie.release_date.split("-")[0];
//   const overview = movie.overview;
//   console.log(poster, title, review, year, overview);
// };

// const renderBackdrop = (movies) => {
//   backdropList.innerHTML = "";
//   const movie = movies[currentIndex];
//   const li = document.createElement("li");
//   li.classList.add("backdrop-li");
//   li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   const InfoContainer = document.createElement("div");
//   InfoContainer.classList.add("movie-data");
//   movieData(movie, InfoContainer);
//   li.appendChild(InfoContainer);
//   backdropList.appendChild(li);
// };

// getPopularMovies();
// /*if current movies[index] is equal to currentindex variable, then give display of visible,/ flex, if it is not, then display of hidden or none.*/

// const movieData = (movie, container) => {
//   /*grab Year*/
//   const year = document.createElement("div");
//   year.textContent = `${movie.release_date.split("-")[0]}`;

//   /*star container*/
//   const starContainer = document.createElement("div");
//   starContainer.classList.add("star-container");
//   const starReview = document.createElement("span");
//   const star = document.createElement("i");
//   star.classList.add("fa-solid", "fa-star", "star");
//   const roundReview = Math.ceil(movie.vote_average * 10) / 10;
//   starReview.textContent = `${roundReview}`;
//   starContainer.append(starReview, star);

//   /*genre*/
//   const genres = document.createElement("div");
//   genres.textContent = `${movie.genre_ids}`;

//   /*overview*/
//   const overviewBtn = document.createElement("div");
//   overviewBtn.classList.add("fa-solid", "fa-message");
//   overviewBtn.addEventListener("click", () => {
//     overviewBtn.style.color = "red";
//   });

//   container.append(year, starContainer, genres, overviewBtn);
// };

// const getOverviewDetails = () => {};

/*star container*/ /*duration?*/
// const starContainer = document.createElement("div");
// starContainer.classList.add("star-container");
// const starReview = document.createElement("span");
// const star = document.createElement("i");
// star.classList.add("fa-solid", "fa-star", "star");
// const roundReview = Math.ceil(movie.vote_average * 10) / 10;
// starReview.textContent = `${roundReview}`;
// starContainer.append(starReview, star);

// const searchContainer = document.querySelector(".search-container");
// const overlay = document.querySelector(".overlay");
// const browseContainer = document.querySelector(".browse-container");
// const genreList = document.querySelector(".browse-dropdown-right");
// const tabsList = document.querySelector(".tabs-list");
// const genres = document.querySelector(".genres");
// const header = document.querySelector("header");

// /*search stays open when clicked*/
// searchContainer.addEventListener("click", () => {
//   searchContainer.style.width = "340px";
// });

// document.addEventListener("click", (e) => {
//   if (!searchContainer.contains(e.target)) {
//     searchContainer.style.width = "53px";
//   }
// });

// /*use "mouseenter" instead of "click" to make the background appear deep purple */

// browseContainer.addEventListener("mouseenter", () => {
//   overlay.classList.add("dark-active");
//   header.classList.add("dark-header");
// });

// browseContainer.addEventListener("mouseleave", () => {
//   overlay.classList.remove("dark-active");
//   header.classList.remove("dark-header");
// });

// /*apikey and url targets */
// const apiKey = "89ace7f2ce3d9aef28abb3f6cb2d809e";
// const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; /* data.results */
// const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`; /* data.genres */

// /*Dom Elements*/
// const leftArrow = document.querySelector(".hero-arrow-left");
// const rightArrow = document.querySelector(".hero-arrow-right");
// const backdropContainer = document.querySelector(".hero-backdrop");
// const backdropList = document.querySelector(".hero-backdrop-list");

// const genreMap = {
//   28: "Action",
//   12: "Adventure",
//   16: "Animation",
//   35: "Comedy",
//   80: "Crime",
//   18: "Drama",
//   10751: "Family",
//   14: "Fantasy",
//   27: "Horror",
//   10402: "Music",
//   9648: "Mystery",
//   10749: "Romance",
//   878: "Science Fiction",
//   53: "Thriller",
//   10752: "War",
//   37: "Western",
// };

// let currentIndex = 0;

// export async function getPopularMovies() {
//   const resolution = await fetch(popularUrl);
//   const data = await resolution.json();
//   console.log(data.results);
//   const movies = data.results;
//   renderBackdrop(movies);
// }

// const renderBackdrop = (movies) => {
//   /*clear backdrop*/
//   backdropList.innerHTML = "";
//   /*determines what movie object in the array we're on by index*/
//   const movie = movies[currentIndex];
//   /*create the li that will be the dom container for all the informaion in the ul (backdropList)*/
//   const li = document.createElement("li");
//   /*adding the class for positioning*/
//   li.classList.add("backdrop-li");
//   /*styling the background for the li*/
//   // li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   // li.style.backgroundImage = `linear-gradient(to bottom, rgb(255,255,255), rgb(255,255,255) url(https://image.tmdb.org/t/p/original${movie.backdrop_path}))`;
//   li.style.backgroundImage = `linear-gradient(to bottom, rgba(18, 5, 28, 1) -10%, transparent, transparent, rgba(18, 5, 28, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   /* create the container to append all the movie information to */
//   const InfoContainer = document.createElement("div");
//   /*adding class for color and positioning */
//   // InfoContainer.classList.add("movie-data");
//   InfoContainer.classList.add("info-layout");
//   /*call movieData function and input the container, and the movie, you want the information from and appended to the container in the parameters.*/
//   movieData(movie, InfoContainer);
//   /*append the container to the li*/
//   li.append(InfoContainer);
//   /*append the li to the backdrop ul */
//   backdropList.appendChild(li);
// };

// const movieData = (movie, container) => {
//   /*Title*/
//   const movieTitle = document.createElement("h1");
//   movieTitle.textContent = `${movie.title}`;
//   movieTitle.classList.add("title");

//   const info = document.createElement("div");
//   info.classList.add("movie-data");
//   /*grab Year*/
//   const year = document.createElement("div");
//   year.textContent = `${movie.release_date.split("-")[0]}`;

//   /*Grab durration*/

//   /*genre*/
//   const genres = document.createElement("div");
//   const decodeGenres = (genreIds) => {
//     const value = genreIds
//       .map((id) => `${genreMap[id]}`) // look up the name by id
//       .filter(Boolean) // remove any undefined values (in case an id isn’t in the map)
//       .join(", "); // turn into a string
//     genres.textContent = value;
//     console.log(value);
//   };
//   decodeGenres(movie.genre_ids);
//   /*overview*/
//   const overviewBtn = document.createElement("div");
//   overviewBtn.classList.add("fa-solid", "fa-message");
//   overviewBtn.addEventListener("click", () => {
//     overviewBtn.style.color = red;
//   });
//   /*Getting movie content rating */
//   const rating = document.createElement("div");
//   rating.classList.add("rating");
//   async function getRatings(movieId) {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${apiKey}`
//     );

//     const data = await res.json();
//     const usRelease = data.results.find((r) => r.iso_3166_1 === "US");
//     if (usRelease.release_dates.length > 0) {
//       console.log(usRelease.release_dates[0].certification || "NR");
//       rating.textContent = usRelease.release_dates[0].certification || "NR";
//     }
//     console.log(usRelease);
//   }
//   getRatings(movie.id);
//   /*watch free button*/
//   const playContainer = document.createElement("div");
//   playContainer.classList.add("play-container");
//   const playIcon = document.createElement("i");
//   playIcon.classList.add("fa-solid", "fa-play", "play-icon");
//   const playTextOne = document.createElement("span");
//   playTextOne.textContent = "Watch Now ";
//   const playTextTwo = document.createElement("span");
//   playTextTwo.textContent = "FREE";
//   playTextTwo.classList.add("free-txt");
//   playContainer.append(playIcon, playTextOne, playTextTwo);
//   info.append(year, genres, overviewBtn, rating);
//   container.append(movieTitle, info, playContainer);
// };
// // -fix overview container and toggle with styles for it
// // -add the title section
// // -add a play button that doesnt work but does some thing else

// const movieData = (movie, container) => {
//   /*Title*/
//   const movieTitle = document.createElement("h1");
//   movieTitle.textContent = `${movie.title}`;
//   movieTitle.classList.add("title");

//   const info = document.createElement("div");
//   info.classList.add("movie-data");
//   /*grab Year*/
//   const year = document.createElement("div");
//   year.textContent = `${movie.release_date.split("-")[0]}`;
//   /*duration*/
//   const getMovieTime = getDuration(movie).then((res) => {
//     const createDurationElm = document.createElement("div");
//     createDurationElm.textContent = `${res}`;
//     // const dur = getDuration(movie);
//     console.log(createDurationElm);
//   });

//   /*genre*/
//   const genres = document.createElement("div");
//   const decodeGenres = (genreIds) => {
//     const value = genreIds
//       .map((id) => `${genreMap[id]}`) // look up the name by id
//       .filter(Boolean) // remove any undefined values (in case an id isn’t in the map)
//       .join(", "); // turn into a string
//     genres.textContent = value;
//     console.log(value);
//   };
//   decodeGenres(movie.genre_ids);
//   /*overview*/
//   const overviewBtn = document.createElement("div");
//   overviewBtn.classList.add("fa-solid", "fa-message");
//   overviewBtn.addEventListener("click", () => {
//     overviewBtn.style.color = "red";
//   });
//   /*Getting movie content rating */
//   const rating = document.createElement("div");
//   rating.classList.add("rating");
//   async function getRatings(movieId) {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${apiKey}`
//     );

//     const data = await res.json();
//     const usRelease = data.results.find((r) => r.iso_3166_1 === "US");
//     if (usRelease.release_dates.length > 0) {
//       console.log(usRelease.release_dates[0].certification || "NR");
//       rating.textContent = usRelease.release_dates[0].certification || "NR";
//     }
//     console.log(usRelease);
//   }
//   getRatings(movie.id);
//   /*watch free button*/
//   const playContainer = document.createElement("div");
//   playContainer.classList.add("play-container");
//   const playIcon = document.createElement("i");
//   playIcon.classList.add("fa-solid", "fa-play", "play-icon");
//   const playTextOne = document.createElement("span");
//   playTextOne.textContent = "Watch Now ";
//   const playTextTwo = document.createElement("span");
//   playTextTwo.textContent = "FREE";
//   playTextTwo.classList.add("free-txt");
//   playContainer.append(playIcon, playTextOne, playTextTwo);
//   info.append(year, getMovieTime, genres, overviewBtn, rating);
//   container.append(movieTitle, info, playContainer);
// };
// const apiKey = "89ace7f2ce3d9aef28abb3f6cb2d809e";
// const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; /* data.results */
// const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`; /* data.genres */

// /*Dom Elements*/
// const leftArrow = document.querySelector(".hero-arrow-left");
// const rightArrow = document.querySelector(".hero-arrow-right");
// const backdropContainer = document.querySelector(".hero-backdrop");
// const backdropList = document.querySelector(".hero-backdrop-list");
// const dotsContainer = document.querySelector(".dots-container");

// const genreMap = {
//   28: "Action",
//   12: "Adventure",
//   16: "Animation",
//   35: "Comedy",
//   80: "Crime",
//   18: "Drama",
//   10751: "Family",
//   14: "Fantasy",
//   27: "Horror",
//   10402: "Music",
//   9648: "Mystery",
//   10749: "Romance",
//   878: "Science Fiction",
//   53: "Thriller",
//   10752: "War",
//   37: "Western",
// };

// let currentIndex = 0;
// const movieArray = [];
// export async function getPopularMovies() {
//   const resolution = await fetch(popularUrl);
//   const data = await resolution.json();
//   console.log(data.results);
//   const movies = data.results;
//   renderBackdrop(movies);
//   const right = () => {
//     rightArrow.addEventListener("click", () => {
//       dotsContainer.innerHTML = "";
//       currentIndex =
//         currentIndex + 1 < movies.length
//           ? currentIndex + 1
//           : (currentIndex = 0);
//       renderBackdrop(movies);
//     });
//   };
//   right();
//   const left = () => {
//     leftArrow.addEventListener("click", () => {
//       dotsContainer.innerHTML = "";
//       currentIndex = currentIndex
//         ? currentIndex - 1
//         : (currentIndex = movies.length - 1);
//       renderBackdrop(movies);
//     });
//   };
//   left();
//   ////////
//   movies.forEach((movie) => {
//     movieArray.push(movie);
//   });
//   console.log(movieArray);
//   ///////
//   const next = () => {
//     currentIndex =
//       currentIndex + 1 < movies.length ? currentIndex + 1 : (currentIndex = 0);
//     console.log(currentIndex);
//     dotsContainer.innerHTML = "";
//     renderBackdrop(movies);
//   };
//   setInterval(next, 5000);
// }

const renderBackdrop = (movies) => {
  /*clear backdrop*/
  backdropList.innerHTML = "";
  /*current index === current backdrop / movie */
  const movie = movies[currentIndex];

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

start; //

/*build dots rotation*/
const apiKey = "89ace7f2ce3d9aef28abb3f6cb2d809e";
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; /* data.results */
const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`; /* data.genres */

/*Dom Elements*/
const leftArrow = document.querySelector(".hero-arrow-left");
const rightArrow = document.querySelector(".hero-arrow-right");
const backdropContainer = document.querySelector(".hero-backdrop");
const backdropList = document.querySelector(".hero-backdrop-list");
const dotsContainer = document.querySelector(".dots-container");
const closeBtn = document.querySelector(".close-modal");
const overviewContainer = document.querySelector(".overview-container");

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
  // console.log(movieArray.length);

  const next = () => {
    currentIndex =
      currentIndex + 1 < movieArray.length
        ? currentIndex + 1
        : (currentIndex = 0);
    // console.log(currentIndex);
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

// const renderBackdrop = (movies) => {
//   /*clear backdrop*/
//   backdropList.innerHTML = "";
//   /*current index === current backdrop / movie */
//   const movie = movies[currentIndex];
//   // console.log(movies[currentIndex]);
//   // const movie = movies[currentIndex];

//   /*create the li that will be the dom container for all the informaion in the ul (backdropList)*/
//   const li = document.createElement("li");

//   /*adding the class for positioning*/
//   li.classList.add("backdrop-li");
//   /*styling the background for the li*/
//   // li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   // li.style.backgroundImage = `linear-gradient(to bottom, rgb(255,255,255), rgb(255,255,255) url(https://image.tmdb.org/t/p/original${movie.backdrop_path}))`;
//   li.style.backgroundImage = `linear-gradient(to bottom, rgba(18, 5, 28, 1) -10%, transparent, transparent , rgba(18, 5, 28, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//   /* create the container to append all the movie information to */
//   const InfoContainer = document.createElement("div");
//   /*adding class for color and positioning */
//   // InfoContainer.classList.add("movie-data");
//   InfoContainer.classList.add("info-layout");
//   /*build dots rotation*/

//   /*call movieData function and input the container, and the movie, you want the information from and appended to the container in the parameters.*/
//   movieData(movie, InfoContainer);
//   /*append the container to the li*/
//   li.append(InfoContainer);
//   /*append the li to the backdrop ul */

//   for (let i = 0; i < movies.length; i++) {
//     const dot = document.createElement("span");
//     dot.classList.add("dot");
//     dotsContainer.append(dot);
//     if (i === currentIndex) {
//       dot.classList.add("active-dot");
//     } else {
//       dot.classList.remove("active-dot");
//     }
//   }
//   // console.log(dotsContainer);
//   backdropList.append(li);
// };

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
  const overviewPoster = document.querySelector(".movie-poster");
  const overviewBtn = document.createElement("div");
  const overviewTitle = document.querySelector(".overview-title");
  const overviewYear = document.querySelector(".overview-year");
  const overviewDur = document.querySelector(".overview-dur");
  const overviewCR = document.querySelector(".overview-content-rating");
  const movieDescription = document.querySelector(".movie-description");
  const language = document.querySelector(".language");
  const starring = document.querySelector(".starring");
  const directedBy = document.querySelector(".directed-by");
  overviewBtn.classList.add("fa-solid", "fa-message");
  overviewBtn.addEventListener("click", () => {
    overviewContainer.classList.add("active-modal");
    overviewPoster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
    overviewTitle.textContent = movie.title;
    overviewYear.textContent = movie.release_date.split("-")[0];
    overviewDur.textContent = durationText;
    //OVERVIEW CR
    async function overviewRating(movieId) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${apiKey}`
      );
      const data = await res.json();
      const usRelease = data.results.find((r) => r.iso_3166_1 === "US");
      if (usRelease.release_dates.length > 0) {
        // console.log(usRelease.release_dates[0].certification || "NR");
        // console.log(data.results.iso_3166_1);
        overviewCR.textContent =
          usRelease.release_dates[0].certification || "NR";
      }
    }
    overviewRating(movie.id);
    //END OVERVIEW CR
    movieDescription.textContent = `Description: ${movie.overview}`;
    const lang =
      movie.original_language === "en"
        ? `Audio-Language: English, English - Audio description\n
        Subtitles: English`
        : `Language: Unknown, Unknown - Audio description\n
        Subtitles: Unknown`;
    language.textContent = lang;

    async function getStarringAndDirected(movieId) {
      const getStar = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
      );
      const data = await getStar.json();
      // console.log(data.cast);
      // const cast = data.cast.map((obj) => obj.name);
      const directors = data.crew
        .filter((obj) => obj.known_for_department === "Directing")
        .map((obj) => obj.name);
      const castNames = data.cast.map((obj) => obj.name);
      const limitedCast = castNames.slice(0, 10);
      starring.textContent = `Starring:  ${limitedCast}`;
      directedBy.textContent = `Directed by: ${directors}`;
      // console.log();
    }
    getStarringAndDirected(movie.id);
  });
  starring.addEventListener("click", () => {
    starring.classList.add("full");
  });
  closeBtn.addEventListener("click", () => {
    overviewContainer.classList.remove("active-modal");
  });

  /* Play button */
  const playContainer = document.createElement("div");
  playContainer.classList.add("play-container");
  playContainer.innerHTML = `
    <i class="fa-solid fa-play play-icon"></i>
    <span>Watch Now </span><span class="free-txt">FREE</span>
  `;
  getRatings(movie.id);
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
      // console.log(usRelease.release_dates[0].certification || "NR");
      // console.log(data.results.iso_3166_1);
      rating.textContent = usRelease.release_dates[0].certification || "NR";
    }
    // console.log(usRelease);
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

// handles scrollss
// function handleScroll(key, container) {
//   const { page, totalPages, loading } = genreState[key];

//   // don’t fetch if already loading or done
//   if (loading || (totalPages && page >= totalPages)) return;

//   // check if user is near end of horizontal scroll

//   console.log(
//     "scrollLeft:",
//     container.scrollLeft,
//     "clientWidth:",
//     container.clientWidth,
//     "scrollWidth:",
//     container.scrollWidth
//   );

//   if (
//     container.scrollLeft + container.clientWidth >=
//     container.scrollWidth - 200
//   ) {
//     genreState[key].page++;
//     renderByGenre(key, container);
//   }
// }
