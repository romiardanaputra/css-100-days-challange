let toast = document.querySelector(".toast");
let tooltip = document.querySelector(".tooltip");

const toastActive = () => {
   tooltip.addEventListener("click", () => {
      toast.classList.toggle("toast-active");
   });
};

toastActive();