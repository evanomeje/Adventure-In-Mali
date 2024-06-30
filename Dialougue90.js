const dialogueTexts = [
    "We must reflect on the grandeur of the Mali Empire, my brothers. *:･ﾟ✧",
    "Indeed. Under Sundiata Keita, it epitomized West African civilization. *:･ﾟ✧",
    "Sundiata Keita united our people. *:･ﾟ✧",
    "And Mansa Musa's Hajj elevated Mali's prominence. *:･ﾟ✧",
    "Ah, Mansa Musa, a symbol of wealth and generosity. *:･ﾟ✧",
    "His pilgrimage showcased Mali's prosperity. *:･ﾟ✧",
    "But Mali faced challenges—internal strife, external pressures. *:･ﾟ✧",
    "True, its decline reminds us of history's tides. *:･ﾟ✧",
    "Yet, Mali's legacy inspires future generations. *:･ﾟ✧",
    "As griots, we keep Mali's history alive. *:･ﾟ✧",
    "Absolutely, Kofi. Our stories carry our civilization's legacy. *:･ﾟ✧"
  ]
  ;
    
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
              avatars[index].style.display = 'block'; 
              scrollToLatestDialogue(); 
              setTimeout(() => {
                typeWriter(dialogueTexts[index], dialogueSpans[index], dialogueBoxes[index]);
              }, 1000); 
            } else {
            
              window.location.href = 'objective2.html';
            }
          }
        }, 100);
      }
  
      function scrollToLatestDialogue() {
        const latestDialogue = dialogueBoxes[index];
        latestDialogue.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    
      
      dialogueBoxes[index].style.display = 'block';
      avatars[index].style.display = 'block';
      scrollToLatestDialogue(); 
    
   
      typeWriter(dialogueTexts[index], dialogueSpans[index], dialogueBoxes[index]);