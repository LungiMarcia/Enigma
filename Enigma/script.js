let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 2 seconds (adjust as needed)
}

function showText(element) {
  element.querySelector(".back").style.display = "block";
}

function hideText(element) {
  element.querySelector(".back").style.display = "none";
}