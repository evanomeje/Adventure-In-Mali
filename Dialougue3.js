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
"AH, MY PIPU! WELCOME, WELCOME TO MY SHOP OF WONDERS!",
"I DEY FEEL SAY DESTINY DON BRING U PIPU HERE FOR ANSWERS.",
"NO WORRY SHA, INSIDE THIS SMALL SMALL SHOP WEY I DEY SELL,",
"YOU GO SEE DI KEY WEY YOU DEY FIND."

];

const dialogueBox = document.querySelector('.dialogue-box');
const dialogueSpan = document.querySelector('.dialogue-text');
const avatar = document.querySelector('.avatar');
let index = 0;

function typeWriter(text, spanElement, callback) {
  let charIndex = 0;
  spanElement.innerHTML = ''; 
  const typing = setInterval(() => {
    if (charIndex < text.length) {
      spanElement.innerHTML += text.charAt(charIndex);
      charIndex++;
      
    } else {
      clearInterval(typing);
      if (callback) callback();
      
    }
  }, 100);
}

function showNextDialogue() {
if (index < dialogueTexts.length) {
dialogueBox.style.display = 'block';
avatar.style.display = 'block';
typeWriter(dialogueTexts[index], dialogueSpan, () => {
  index++;
  if (index < dialogueTexts.length) {
    setTimeout(showNextDialogue, 200); 
  }

  if (index === dialogueTexts.length) { 
    setTimeout(showNextDialogue, 5000);
    window.location.href = "objective1.html";
  }
});
}
}
showNextDialogue();