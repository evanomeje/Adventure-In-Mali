const dialogueTexts = [
    "Oh no, we must align the elemets before its too late!😯"
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
    }, 50); 
  }

  function showNextDialogue() {
    if (index < dialogueTexts.length) {
      dialogueBox.style.display = 'block';
      avatar.style.display = 'block';
      typeWriter(dialogueTexts[index], dialogueSpan, () => {
        index++;

        if (index < dialogueTexts.length) {
          setTimeout(showNextDialogue, 900); 
        }

        if (index === dialogueTexts.length) { 
          setTimeout(showNextDialogue, 5000);
          window.location.href = "objective9.html"
        }
      });
    }
  }

  
  showNextDialogue();