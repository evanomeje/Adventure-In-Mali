const dialogueTexts = [
    "STOP! 😡",
    "What's your business in Djenne, travelers?",
    "Just passing through, we mean no harm. 🙏",
    "To enter our city you must prove your knowledge!"
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
            } else {
              window.location.href = "Questionnaire.html";
              const djenneGate = new DjenneGate(); 
               djenneGate.displayQuestion(); 
              const userAnswer = document.getElementById("fname").value;
  councilGriot.checkAnswer(userAnswer);
              
            }
        }
    }, 100);
}


dialogueBoxes[index].style.display = 'block';
avatars[index].style.display = 'block';


typeWriter(dialogueTexts[index], dialogueSpans[index], dialogueBoxes[index]);