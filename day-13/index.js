let btnPluses = document.querySelectorAll(".btn-plus");
let layers = document.querySelectorAll(".layer");

const btnHov = () => {
   for (let i = 0; i < layers.length; i++) {
      layers[i].addEventListener("mouseover", () => {
         btnPluses[i].classList.add("btn-plus-active");
      });
      layers[i].addEventListener("mouseout", () => {
         btnPluses[i].classList.remove("btn-plus-active");
      });
   }
};

btnHov();
