
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click",()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('toggle');
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
  ) {
      menu.classList.remove('fa-times');
      navbar.classList.remove('toggle');
  } 
}



let slideIndex = 0;
showSlides();
//Image Slider
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//login


