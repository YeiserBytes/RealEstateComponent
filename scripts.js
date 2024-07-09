const btnFavorite = document.querySelector('#btnFavorite');
const heartFill = document.querySelector(".hidden")
const heartEmpty = document.querySelector(".show")

function toggleFavorite() {
  if (heartFill.classList.contains("hidden")) {
    heartFill.classList.remove("hidden");
    heartEmpty.classList.add("hidden");
  } else {
    heartFill.classList.add("hidden");
    heartEmpty.classList.remove("hidden");
  }
}

btnFavorite.addEventListener("click", toggleFavorite);
