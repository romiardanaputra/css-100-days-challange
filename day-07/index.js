var searchIcon = document.querySelector(".search-icon");
var inputField = document.querySelector("#input-search");
var hamIcon = document.querySelector(".ham-icon");
var card = document.querySelector(".card")
const isClick = () => {
   searchIcon.addEventListener("click", () => {
      inputField.classList.toggle("input-field-active");
   });
};

const navBar = () => {
   hamIcon.addEventListener("click", () =>{
      card.classList.toggle("menu-active");
   })
}

isClick();
navBar();
