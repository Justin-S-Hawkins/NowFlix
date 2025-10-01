import { movieData } from "./renderMovieData.js";
/*build dots rotation*/
export const apiKey = "89ace7f2ce3d9aef28abb3f6cb2d809e";
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; /* data.results */

/*Dom Elements*/
const leftArrow = document.querySelector(".hero-arrow-left");
const rightArrow = document.querySelector(".hero-arrow-right");
const backdropList = document.querySelector(".hero-backdrop-list");
const dotsContainer = document.querySelector(".dots-container");

export let currentIndex = 0;
export const movieArray = [];
export async function getPopularMovies() {
  const resolution = await fetch(popularUrl);
  const data = await resolution.json();
  const movies = data.results.splice(1, 10);
  movies.forEach((movie) => {
    movieArray.push(movie);
  });
  renderBackdrop(movieArray);

  let slideInterval;
  const startInterval = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(next, 5000);
  };
  const next = () => {
    currentIndex =
      currentIndex + 1 < movieArray.length
        ? currentIndex + 1
        : (currentIndex = 0);
    dotsContainer.innerHTML = "";
    renderBackdrop(movieArray);
  };

  const right = () => {
    rightArrow.addEventListener("click", () => {
      dotsContainer.innerHTML = "";
      currentIndex =
        currentIndex + 1 < movieArray.length
          ? currentIndex + 1
          : (currentIndex = 0);

      renderBackdrop(movieArray, "right");
      startInterval();
    });
  };
  const left = () => {
    leftArrow.addEventListener("click", () => {
      dotsContainer.innerHTML = "";
      currentIndex = currentIndex
        ? currentIndex - 1
        : (currentIndex = movieArray.length - 1);

      renderBackdrop(movieArray, "left");
      startInterval();
    });
  };
  right();
  left();
  startInterval();
}

const renderBackdrop = (movies, direction = "right") => {
  const movie = movies[currentIndex];

  const li = document.createElement("li");

  li.classList.add("backdrop-li");

  li.style.backgroundImage = `linear-gradient(to bottom, rgba(18, 5, 28, 1) -10%, transparent, transparent , rgba(18, 5, 28, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;

  const InfoContainer = document.createElement("div");

  InfoContainer.classList.add("info-layout");
  InfoContainer.innerHTML = "";
  movieData(movie, InfoContainer);

  li.append(InfoContainer);

  li.style.transform =
    direction === "right" ? "translateX(100%)" : "translateX(-100%)";

  requestAnimationFrame(() => {
    const slides = backdropList.querySelectorAll(".backdrop-li");

    if (slides.length > 1) {
      slides[0].style.transform =
        direction === "right" ? "translateX(-100%)" : "translateX(100%)";
      slides[0].style.opacity = direction === "right" ? ".2" : ".2";
    }
    //animate new slide
    li.style.transform = "translateX(0)";
    li.style.opacity = "1";
  });
  //clean up old slides after animation
  setTimeout(() => {
    const slides = backdropList.querySelectorAll(".backdrop-li");
    if (slides.length > 1) {
      backdropList.removeChild(slides[0]);
    }
  }, 700);
  dotsContainer.innerHTML = "";
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
  backdropList.append(li);
};

console.log(movieArray);
