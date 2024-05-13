class MarketChallenge {
    constructor(answerKey) {
        this.answerKey = answerKey.map(item => item.toLowerCase()); 
        this.collection = [];
    }

    display() {
        const collectionText = document.getElementById("collection-text");
      
        collectionText.innerHTML = "";
      
        this.collection.forEach(item => {
            const textBox = document.createElement("input");
            textBox.type = "custom-textbox ";
            textBox.value = `* ${item}`;
            textBox.classList.add("custom-textbox");
            if (this.answerKey.includes(item)) {
                textBox.classList.add("custom-textbox-green");
            } else {
                textBox.classList.add("custom-textbox-red");
            }
            textBox.readOnly = true; 
            collectionText.appendChild(textBox);
            collectionText.appendChild(document.createElement("br")); 
        });
    }

    checkAnswer(userAnswer) {
        userAnswer = userAnswer.toLowerCase(); 
        if (this.answerKey.includes(userAnswer)) {
            if (!this.collection.includes(userAnswer)) {
                this.collection.push(userAnswer);
                this.display();
            } else {
                alert("Item already exists in the collection. Try again.");
            }
        } else {
            alert("Incorrect! That's not part of the mask.");
            this.collection.push(userAnswer);
            this.display();
        }
    }
}



const marketChallenge = new MarketChallenge(["Wood", "Clay", "Beads", "Cowrie", "Knife", "Pigment"]);

function checkAnswer() {
    const userAnswer = document.getElementById("fname").value; 
    marketChallenge.checkAnswer(userAnswer);
}

function resetInput() {
    document.getElementById("fname").value = "";
}

document.querySelector('.interactive-picture').addEventListener('focusin', function() {
    this.classList.add('hover');
});

document.querySelector('.interactive-picture').addEventListener('focusout', function() {
    this.classList.remove('hover');
});