import { closeHamburgerFunction } from "./main.js";
const favoritesTab = document.querySelector(".favorites");
const favoriteModal = document.querySelector(".favorite-collection");
const favUl = document.querySelector(".favorite-list");
const closeModal = document.querySelector(".close-modal-fav");
const header = document.querySelector("header");
const movieNav = document.querySelector(".movies");

favoritesTab.addEventListener("click", () => {
  favoriteModal.classList.add("active-modal-fav");
  header.classList.add("modal-header-bg");
});
closeModal.addEventListener("click", () => {
  favoriteModal.classList.remove("active-modal-fav");
  header.classList.remove("modal-header-bg");
  closeHamburgerFunction();
});
movieNav.addEventListener("click", () => {
  favoriteModal.classList.remove("active-modal-fav");
  header.classList.remove("modal-header-bg");
  console.log("working");
});

export const addToFavorites = (
  moviePosterPath,
  movieLi,
  addIcon,
  removeIcon
) => {
  addIcon.addEventListener("click", () => {
    if (movieLi.parentElement !== favUl) {
      movieLi.classList.add("in-favorites");
      favUl.append(movieLi);
      moviePosterPath.removeChild(addIcon);
      moviePosterPath.append(removeIcon);
    }
  });
  removeIcon.addEventListener("click", () => {
    if (movieLi.parentElement === favUl) {
      movieLi.classList.remove("in-favorites");
      favUl.removeChild(movieLi);

      const originalListId = movieLi.dataset.originalListId;
      const originalList = document.querySelector(
        `[data-id="${originalListId}"]`
      );
      if (originalList) {
        originalList.append(movieLi);
      }
      moviePosterPath.removeChild(removeIcon);
      moviePosterPath.append(addIcon);
    }

    // if (movieLi.parentElement === favUl) {
    //   favUl.removeChild(movieLi);
    //   moviePosterPath.removeChild(removeIcon);
    //   moviePosterPath.append(addIcon);
    //   returnToList(movieLi, movieGenres);
    // }
    //   returnToList(movieLi, movieGenres, ListId);
    // });
    // console.log(ListId);
    // movieGenres.forEach((genre) => {
    //   console.log(genre === ListId);
    //   console.log(genre);
    // });
    // movieGenres.forEach((relGenre) => {
    //   if (relGenre === ListId) {
    //     favUl.removeChild(movieLi);
    //     ListId.append(movieLi);
    //     moviePosterPath.removeChild(removeIcon);
    //     moviePosterPath.append(addIcon);
    //     console.log("hi");
    //   }
    // });
  });
};

const sortBtn = document.createElement("button");
sortBtn.textContent = "A-Z";
sortBtn.classList.add("sort");
favUl.append(sortBtn);

let ascending = true;

sortBtn.addEventListener("click", () => {
  // grab current favorites
  const favoriteItems = Array.from(favUl.querySelectorAll(".in-favorites"));

  // toggle sort direction
  ascending = !ascending;

  // sort favorites
  favoriteItems.sort((a, b) => {
    return ascending
      ? a.dataset.title.localeCompare(b.dataset.title) // A → Z
      : b.dataset.title.localeCompare(a.dataset.title); // Z → A
  });

  // re-append in sorted order
  favoriteItems.forEach((item) => favUl.appendChild(item));

  // update button label
  sortBtn.textContent = ascending ? "A-Z" : "Z-A";
});
