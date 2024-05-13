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

        const gameBox = document.getElementById('game-box');
        gameBox.innerHTML += htmlContent; // Append to existing content
    }

    displayNextQuestion() {
        const questions = [
            "\u07c3 + \u07c9 = ", "\u07c1 - \u07c5 = ", "\u07c2 * \u07c6 = ",
            "\u07c8 + \u07c8 = ", "\u07c7 - \u07c7 = ", "\u07c8\u07c9 + \u07c7 = "
        ];
    
        const collectionText = document.getElementById('collection-text');
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box'); // Add a CSS class to style each question box
        questionBox.innerHTML = `<p>*${questions[this.currentQuestionIndex]}</p>`;
        if (collectionText.firstChild) {
            collectionText.insertBefore(questionBox, collectionText.firstChild);
        } else {
            collectionText.appendChild(questionBox);
        }
    }
    

    checkAnswer(userAnswer) {
        const correctAnswer = this.answerKey[this.currentQuestionIndex];
        const isCorrect = parseInt(userAnswer) === correctAnswer;

        const collectionText = document.getElementById('collection-text');
        if (isCorrect) {
            collectionText.innerHTML += "<p>Correct!</p>";
        } else {
            collectionText.innerHTML += "<p>Incorrect. Try again!</p>";
        }

        if (this.currentQuestionIndex < this.answerKey.length - 1) {
            this.currentQuestionIndex++;
            this.displayNextQuestion();
        } else {
            this.displayScore();
        }
    }

    displayScore() {
        let correct = 0;
        for (let i = 0; i < this.answerKey.length; i++) {
            if (this.answerKey[i] === parseInt(this.vector_input[i])) {
                correct++;
            }
        }
        const score = correct * 10;
        const collectionText = document.getElementById('collection-text');
        collectionText.innerHTML += `<p><br>Your score: ${score}</p>`;
    }
}