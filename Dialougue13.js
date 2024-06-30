const dialogueTexts = [
    "Uhoh the temple starts to shake!"
  ];

  const dialogueBox = document.querySelector('.dialogue-box');
  const dialogueSpan = document.querySelector('.dialogue-text');
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
    }, 50); 
  }

  function showNextDialogue() {
    if (index < dialogueTexts.length) {
      dialogueBox.style.display = 'block';
      typeWriter(dialogueTexts[index], dialogueSpan, () => {
        index++;

        if (index < dialogueTexts.length) {
          setTimeout(showNextDialogue, 900); 
        }

        if (index === dialogueTexts.length) { 
          setTimeout(showNextDialogue, 5000);
          window.location.href = "Drama14.html";
        }
      });
    }
  }

  
  showNextDialogue();