import { apiKey } from "./renderBackdrop.js";
/* Overview button */
export const overviewBtn = document.createElement("div");
export const overviewModal = (movie, durTxt) => {
  const overviewPoster = document.querySelector(".movie-poster");

  const overviewTitle = document.querySelector(".overview-title");
  const overviewYear = document.querySelector(".overview-year");
  const overviewDur = document.querySelector(".overview-dur");
  const overviewCR = document.querySelector(".overview-content-rating");
  const movieDescription = document.querySelector(".movie-description");
  const language = document.querySelector(".language");
  const starring = document.querySelector(".starring");
  const directedBy = document.querySelector(".directed-by");
  const closeBtn = document.querySelector(".close-modal");
  const overviewContainer = document.querySelector(".overview-container");

  overviewBtn.classList.add("fa-solid", "fa-message");
  overviewBtn.addEventListener("click", () => {
    overviewContainer.classList.add("active-modal");
    overviewPoster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
    overviewTitle.textContent = movie.title;
    overviewYear.textContent = movie.release_date.split("-")[0];
    overviewDur.textContent = durTxt;
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
  closeBtn.addEventListener("click", () => {
    overviewContainer.classList.remove("active-modal");
  });
};
