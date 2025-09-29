import { apiKey } from "./renderBackdrop.js";
import { overviewModal, overviewBtn } from "./overview.js";
export const genreMap = {
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

export const movieData = async (movie, container) => {
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
  overviewModal(movie, durationText, overviewBtn);

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
export async function getDuration(movie) {
  const getDur = await fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`
  );
  const data = await getDur.json();
  const hours = Math.floor(data.runtime / 60);
  const minutes = data.runtime % 60;
  const durString = `${hours}h ${minutes}m`;
  return durString;
}
