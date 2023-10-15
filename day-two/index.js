var firstBar = document.querySelector(".first-bar");
var secondBar = document.querySelector(".second-bar");
var thirdBar = document.querySelector(".third-bar");
var barsActive = document.querySelector(".bars-active");
var bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
   if (bars.classList.contains("bars-active")) {
      // If the "bars-active" class is already present, toggle to reverse animation
      revAnimate();
   } else {
      // If the "bars-active" class is not present, start the regular animation
      removeRevAnimate();
      bars.classList.add("bars-active");
      firstBar.classList.add("animated-bar1");
      secondBar.classList.add("animated-bar2");
      thirdBar.classList.add("animated-bar3");
   }
});

const revAnimate = () => {
   removeAnimatedBars();
   firstBar.classList.add("animated-bar1-reverse");
   secondBar.classList.add("animated-bar2-reverse");
   thirdBar.classList.add("animated-bar3-reverse");
};

const removeRevAnimate = () => {
   firstBar.classList.remove("animated-bar1-reverse");
   secondBar.classList.remove("animated-bar2-reverse");
   thirdBar.classList.remove("animated-bar3-reverse");
};

const removeAnimatedBars = () => {
   firstBar.classList.remove("animated-bar1");
   secondBar.classList.remove("animated-bar2");
   thirdBar.classList.remove("animated-bar3");
   bars.classList.remove("bars-active");
};
