var searchBar = document.querySelector(".search-bar");
console.log(searchBar);
const isClick = () => {
   searchBar.addEventListener("click", () => {
      alert(1);
   });
};

isClick();