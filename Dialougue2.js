let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}



const dialogueTexts = [
  "The city is bustling with activity today. Traders from all corners of West-Africa have gathered here to exchange goods.\n",




  
];

const dialogueBoxes = document.querySelectorAll('.dialogue-box');
const dialogueSpans = document.querySelectorAll('.dialogue-text');
const avatars = document.querySelectorAll('.avatar');
let index = 0;

function typeWriter(text, spanElement, dialogueBox) {
  let charIndex = 0;
  const typing = setInterval(() => {
    if (charIndex < text.length) {
      spanElement.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typing);
      index++;
      if (index < dialogueTexts.length) {
        dialogueBoxes[index].style.display = 'block'; 
        setTimeout(() => {
          typeWriter(dialogueTexts[index], dialogueSpans[index], dialogueBoxes[index]);
        }, 1000); 
      }
      window.location.href = "Drama3.html"
    }
  }, 100);
}

dialogueBoxes[index].style.display = 'block';
avatars[index].style.display = 'block';


typeWriter(dialogueTexts[index], dialogueSpans[index], dialogueBoxes[index]);