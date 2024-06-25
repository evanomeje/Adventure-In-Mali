let slideIndex = 0;
let cycleCount = 0;
const totalCycles = 1; 
const slides = document.getElementsByClassName("slides");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
    cycleCount++;
  }
  slides[slideIndex - 1].style.display = "block";
  if (cycleCount >= totalCycles) {
    window.location.href = 
    "Drama6.html";
  } else {
    setTimeout(showSlides, 2000); 
  }
}

showSlides();