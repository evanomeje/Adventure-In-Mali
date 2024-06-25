
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
  "SHHHH I hear a conversation,💫\n",
  "I think those are the griots the merchant told us about. 😮\n",
   "We must listen carefully!\n"
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
        window.location.href = "Drama90.html"
      }
    });
  }
}

showNextDialogue();