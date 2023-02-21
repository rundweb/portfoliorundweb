const menuActive = document.querySelectorAll(".nav-link a");
const btnToggle = document.querySelector(".toggle");
const listActive = document.querySelector("ul");
const searchActive = document.querySelector(".search-btn");
const search = document.querySelector(".search");

menuActive.forEach((button) => {
  button.addEventListener("click", function () {
    menuActive.forEach((act) => {
      act.classList.remove("active");
    });
    this.classList.add("active");
  });
});

searchActive.addEventListener("click", () => {
  search.classList.toggle("search-active");
});

document.querySelectorAll("ul").forEach((n) => {
  n.addEventListener("click", function () {
    search.classList.remove("search-active");
    listActive.classList.toggle("list-active");
  });
});

btnToggle.addEventListener("click", function () {
  listActive.classList.toggle("list-active");
});
