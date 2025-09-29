const favoritesTab = document.querySelector(".favorites");
const favoriteModal = document.querySelector(".favorite-collection");
const favUl = document.querySelector(".favorite-list");
const closeModal = document.querySelector(".close-modal-fav");
const header = document.querySelector("header");
const movieNav = document.querySelector(".movies");
const scroll = document.querySelector(".scroll");
// const inFav = document.querySelectorAll(".in-favorites");
favoritesTab.addEventListener("click", () => {
  favoriteModal.classList.add("active-modal-fav");
  header.classList.add("modal-header-bg");
});
closeModal.addEventListener("click", () => {
  favoriteModal.classList.remove("active-modal-fav");
  header.classList.remove("modal-header-bg");
});
movieNav.addEventListener("click", () => {
  favoriteModal.classList.remove("active-modal-fav");
  header.classList.remove("modal-header-bg");
  console.log("working");
});
//make real one in HTML
// const addBtn = document.createElement("button");
// addBtn.classList.add("add-btn");
// const favoriteIds = new Set();
// export const addToFavorites = (movieLi, addIcon, removeIcon) => {
//   const clone = movieLi.cloneNode(true);
//   addIcon.addEventListener("click", () => {
//     const id = movieLi.dataset.id;
//     if (!favoriteIds.has(id)) {
//       favoriteIds.add(id);
//       favUl.append(clone);
//     }
//     if (favoriteIds.has(id)) {
//       movieLi.remove(addIcon);
//       movieLi.add(removeIcon);
//     }

//     console.log(clone.dataset.id);
//     // if (favoriteIds.has(clone.dataset.id)) {
//     //   favUl.remove(clone.dataset.id);
//     // }
//   });
// };

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
      // console.log(movieLi.dataset.id);
      // const originalListId = movieLi.dataset.originalListId;
      // console.log(movieLi.title);
      // console.log(movieGenres);
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

// const sort = document.createElement("button");
// sort.textContent = "A-Z";
// sort.classList.add("sort");
// favUl.append(sort);
// sort.addEventListener("click", () => {
//   const favoriteItems = Array.from(favUl.querySelectorAll(".in-favorites"));
//   favoriteItems.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
//   favoriteItems.sort((a, b) => b.dataset.title.localeCompare(a.dataset.title));
//   favoriteItems.forEach((item) => favUl.appendChild(item));
// });
const sortBtn = document.createElement("button");
sortBtn.textContent = "A-Z";
sortBtn.classList.add("sort");
favUl.append(sortBtn); // keep button OUTSIDE favUl if possible

let ascending = true; // track sort direction

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

// let flag = false;

// export const sorted = (moiveLi) => {
//   sort.addEventListener("click", () => {
//     const favMoviesInArray = Array.from(favUl.querySelectorAll(".movie"));

//     favMoviesInArray.sort((a, b) => {
//       const titleA = a.dataset.title.toLowerCase();
//       const titleB = b.dataset.title.toLowerCase();
//       return flag === false
//         ? titleA.localeCompare(titleB)
//         : titleB.localeCompare(titleA);
//     });

//     favMoviesInArray.forEach((movie) => favUl.appendChild(movie));

//     flag = !flag;
//   });
// };
//need to make it to where when removeIcon is clicked the movie is added back to the respective genres
// const returnToList = (movieLi, movieGenres, ListId) => {
//   movieGenres.forEach((relGenre) => {
//     if (relGenre === ListId) {
//       favUl.removeChild(movieLi);
//       ListId.append(movieLi);
//       moviePosterPath.removeChild(removeIcon);
//       moviePosterPath.append(addIcon);
//       console.log("hi");
//     }
//   });
// };
