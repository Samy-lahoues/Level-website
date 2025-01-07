// Select Dom elements
const dateIcons = document.querySelectorAll(".calendar i");
const dateInputs = document.querySelectorAll(".calendar input");
const mobileBtn = document.getElementById("mobile-btn");
const mobileId = document.getElementById("mobile");
const mobileMenu = document.getElementById("mobile-menu");
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const video = document.querySelector(".video-container video");
new Swiper('.card-wrapper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 40,
      }
    }
  });
dateIcons[0].addEventListener("click", () => {
    // Trigger click event on the corresponding input field
    dateInputs[0].click();
});
dateIcons[1].addEventListener("click", () => {
    // Trigger click event on the corresponding input field
    dateInputs[1].click();
});
document.onl
mobileBtn.addEventListener("click", () => {
    if (mobileMenu.style.display != "flex"){
        mobileMenu.style.display = "flex";
        mobileId.style.height = "160px";
    }
    else{
        mobileMenu.style.display = "none";
        mobileId.style.height = "0";
    }
})
playIcon.addEventListener("click", () => {
  playIcon.style.display = "none";
  pauseIcon.style.display = "inline-block"
  video.play();
})
pauseIcon.addEventListener("click", () => {
  pauseIcon.style.display = "none";
  playIcon.style.display = "inline-block"
  video.pause();
})