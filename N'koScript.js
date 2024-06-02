class NkoScript {
    constructor(answerKey = []) {
        this.answerKey = answerKey;
        this.currentQuestionIndex = 0;
    }

    displayDictionary() {
        const dictionary = {
            "\u07c0": 0, "\u07c1": 1, "\u07c2": 2, "\u07c3": 3, "\u07c4": 4,
            "\u07c5": 5, "\u07c6": 6, "\u07c7": 7, "\u07c8": 8, "\u07c9": 9
        };

        let htmlContent = "<p>----------- Dictionary -----------</p>";
        for (const key in dictionary) {
            htmlContent += `<p>N'KO Script: ${key}\t\tValue: ${dictionary[key]}</p>`;
        }

        const gameBox = document.getElementById('Ngame-box'); // Corrected ID
        gameBox.innerHTML += htmlContent; // Append to existing content
    }

    displayNextQuestion() {
        const questions = [
            "\u07c3 + \u07c9 = ", "\u07c1 - \u07c5 = ", "\u07c2 * \u07c6 = ",
            "\u07c8 + \u07c8 = ", "\u07c7 - \u07c7 = ", "\u07c8\u07c9 + \u07c7 = "
        ];

        const collectionText = document.getElementById('collection-text');
        const questionBox = document.createElement('div');
        questionBox.classList.add('Nquestion-box'); // Add a CSS class to style each question box
        questionBox.innerHTML = `<p>*${questions[this.currentQuestionIndex]}</p>`;
        if (collectionText.firstChild) {
            collectionText.insertBefore(questionBox, collectionText.firstChild);
        } else {
            collectionText.appendChild(questionBox);
        }
        this.currentQuestionBox = questionBox; // Store the current question box
    }

    checkAnswer(userAnswer) {
        const correctAnswer = this.answerKey[this.currentQuestionIndex];
        const isCorrect = parseInt(userAnswer) === correctAnswer;

        if (isCorrect) {
            this.currentQuestionBox.classList.add('correct'); // Add correct class
        } else {
            this.currentQuestionBox.classList.add('incorrect'); // Add incorrect class
        }

        if (this.currentQuestionIndex < this.answerKey.length - 1) {
            this.currentQuestionIndex++;
            this.displayNextQuestion();
        } else {
            this.displayScore();
        }
    }

    displayScore() {
        const collectionText = document.getElementById('collection-text');
        collectionText.innerHTML += "<p><br>You've completed all questions!</p>";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.small-box');

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            const textContent = box.querySelector('.text-content');
            const meaning = box.getAttribute('data-meaning');
            
            if (textContent.innerHTML === meaning) {
                // If the content is currently the meaning, switch to the Unicode symbol
                textContent.innerHTML = box.dataset.unicode;
            } else {
                // If the content is not the meaning, switch to the meaning
                textContent.innerHTML = meaning;
            }
        });
    });
});

