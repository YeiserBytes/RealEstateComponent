const btnFavorite = document.querySelector('#btnFavorite');
const heartFill = document.querySelector(".hidden");
const heartEmpty = document.querySelector(".show");

function toggleFavorite() {
  if (heartFill.classList.contains("hidden")) {
    heartFill.classList.remove("hidden");
    heartEmpty.classList.add("hidden");
    localStorage.setItem('favorite', true);
  } else {
    heartFill.classList.add("hidden");
    heartEmpty.classList.remove("hidden");
    localStorage.setItem('favorite', false);
  }
}

btnFavorite.addEventListener("click", toggleFavorite);

const isFavorite = localStorage.getItem('favorite');
if (isFavorite === 'true') {
  heartFill.classList.remove("hidden");
  heartEmpty.classList.add("hidden");
} else {
  heartFill.classList.add("hidden");
  heartEmpty.classList.remove("hidden");
}
