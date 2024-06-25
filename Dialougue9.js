const dialogueTexts = [
    "Now why where you listening to our conversation??🤬",
    "My brother please, we are just looking for the Hidden Temple of Kangaba😭",
    "Ahhh Kofi relax, you travelers must trek across the sahara desert.*:･ﾟ✧",
    "Yes, Kofi is right the music and spirts will guide you there.*:･ﾟ✧"
  ];

  const typingSpeeds = [
    50, 
    100,
    100,
    100
  ];

  const dialogueBoxes = document.querySelectorAll('.dialogue-box, .angry-dialogue-box');
  const dialogueSpans = document.querySelectorAll('.dialogue-text');
  const avatars = document.querySelectorAll('.avatar');
  let index = 0;

  function redirectToQuestionnaire() {
    window.location.href = 'DramaSaharaDesert.html';
  }

  function typeWriter(text, spanElement, dialogueBox, typingSpeed) {
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
          avatars[index].style.display = 'block'; 
          scrollToLatestDialogue(); 
          setTimeout(() => {
            typeWriter(dialogueTexts[index], dialogueSpans[index], dialogueBoxes[index], typingSpeeds[index]);
          }, 1000); 
        } else {
         
          setTimeout(redirectToQuestionnaire, 1000); 
        }
      }
    }, typingSpeed);
  }

  function scrollToLatestDialogue() {
    const latestDialogue = dialogueBoxes[index];
    latestDialogue.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  dialogueBoxes[index].style.display = 'block';
  avatars[index].style.display = 'block';
  scrollToLatestDialogue(); 

  typeWriter(dialogueTexts[index], dialogueSpans[index], dialogueBoxes[index], typingSpeeds[index]);