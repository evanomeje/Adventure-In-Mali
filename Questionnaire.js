
class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questionElement = document.getElementById("question");
        this.answerButtonContainer = document.getElementById("answer-buttons");
        this.init();
    }

    init() {
        this.showQuestion();
    }

    showQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        this.questionElement.textContent = currentQuestion.text;

        this.answerButtonContainer.innerHTML = '';

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add("btn");
            button.addEventListener('click', () => this.checkAnswer(answer.correct));
            this.answerButtonContainer.appendChild(button);
        });
    }

    checkAnswer(correct) {
        if (correct) {
            this.score++;
        }
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.endQuiz();
        }
    }

    endQuiz() {
        alert(`Quiz ended. You scored ${this.score} out of ${this.questions.length}`);
        // Optionally, you can perform further actions here, like sending the score to a server, etc.
    }
}

const questions = [
    new Question("What is the traditional title of the ruler of the Mali Empire?", [
        { text: "Mansa (answer)", correct: true },
        { text: "Sultan", correct: false },
        { text: "Pharaoh", correct: false }
    ]),

    new Question("Which ruler is known for his hajj pilgrimage to Mecca?", [
        { text: "Mansa Musa (correct)", correct: true },
        { text: "Sundiata Keita", correct: false },
        { text: "Askia Muhammad", correct: false }
    ]),

    new Question("Who is considered the founder of the Mali Empire?", [
        { text: "Mansa Musa", correct: false },
        { text: "Askia Muhammad", correct: false },
        { text: "Sundiata Keita (correct)", correct: true }
    ]),

    new Question("What is the role of a griot?", [
        { text: "To keep stories and traditions alive through storytelling and music. (correct)", correct: true },
        { text: "To lead religious ceremonies and rituals.", correct: false },
        { text: "To manage trade relations with neighboring communities.", correct: false }
    ])
    
];

const quiz = new Quiz(questions);

