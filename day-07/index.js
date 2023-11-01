var searchBar = document.querySelector(".search-bar");
var inputForm = document.querySelector("#input-search");
const isClick = () => {
   searchBar.addEventListener("click", () => {
      if (inputForm.classList.contains("input-fade-in")) {
         inputForm.classList.add("input-fade-out");
         inputForm.classList.remove("input-fade-in");
      } else {
         inputForm.classList.add("input-fade-in");
         inputForm.classList.remove("input-fade-out");
      }
   });
};

isClick();
