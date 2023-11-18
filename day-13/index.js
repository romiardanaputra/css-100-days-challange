let btnPluses = document.querySelectorAll(".btn-plus");
let layers = document.querySelectorAll(".layer");

let cardProfile = document.querySelector(".card-profile");
let cardBackgroundImage = document.querySelector(".card-background-image");
let profile = document.querySelector(".profile");
let profileLayer = document.querySelector(".profile-layer");
let socialMedia = document.querySelector(".social-media");
let closeBtn = document.querySelector(".close-btn");

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

const btnPlusClick = () => {
   for (let i = 0; i < btnPluses.length; i++) {
      btnPluses[i].addEventListener("click", () => {
         cardProfile.classList.add("card-profile-active");
         cardBackgroundImage.classList.add("card-background-image-active");
         profile.classList.add("profile-active");
         profileLayer.classList.add("profile-layer-active");
         socialMedia.classList.add("social-media-active");
         closeBtn.classList.add("close-btn-active");
         // kondisi zindex pada cardprofile jadi 0
         if(cardProfile.classList.contains("card-profile-active")){
            cardProfile.style.zIndex = "0";
         }
      });
   }
};

btnPlusClick();

const btnCloseClick = () => {
   closeBtn.addEventListener("click", () => {
     
      cardProfile.classList.remove("card-profile-active");
      cardBackgroundImage.classList.remove("card-background-image-active");
      profile.classList.remove("profile-active");
      profileLayer.classList.remove("profile-layer-active");
      socialMedia.classList.remove("social-media-active");
      closeBtn.classList.remove("close-btn-active");
         // kondisi zindex pada cardprofile jadi -1
         setTimeout(function() {
            // kondisi zindex pada cardprofile jadi -1
            if (!cardProfile.classList.contains("card-profile-active")) {
                cardProfile.style.zIndex = "-1";
            }
        }, 2000);

   });
};

btnCloseClick();
