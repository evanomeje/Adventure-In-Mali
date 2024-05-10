// Question class
class Question {
    constructor(question, answerKey, options) {
        this.question = question;
        this.answerKey = answerKey;
        this.options = options;
    }

    displayQuestion() {
        document.getElementById("question-box").innerText = this.question;
        const answerBoxes = document.querySelectorAll(".answer-box");
        this.options.forEach((option, index) => {
            answerBoxes[index].innerText = option;
        });
    }       

    checkAnswer(userAnswer) {
        const answerKey = this.answerKey.toLowerCase();
        userAnswer = userAnswer.toLowerCase();
        if (userAnswer === answerKey) {
            alert("Correct Answer!");
        } else {
            alert("Incorrect Answer!");
        }
    }
}

// CouncilGriot class
class CouncilGriot extends Question {
    constructor() {
        super(
            "Which ruler is known for his hajj pilgrimage to Mecca?",
            "a",
            ["a) Mansa Musa (correct)", "b) Sundiata Keita", "c) Askia Muhammad"]
        );

        this.questions = [
            new Question(
                "Which ruler is known for his hajj pilgrimage to Mecca?",
                "a",
                ["a) Mansa Musa (correct)", "b) Sundiata Keita", "c) Askia Muhammad"]
            ),
            new Question(
                "Who is considered the founder of the Mali Empire?",
                "c",
                ["a) Mansa Musa", "b) Askia Muhammad", "c) Sundiata Keita (correct)"]
            ),
            new Question(
                "What is the role of a griot?",
                "a",
                ["a) To keep stories and traditions alive through storytelling and music. (correct)", "b) To lead religious ceremonies and rituals.", "c) To manage trade relations with neighboring communities."]
            )
        ];
        this.currentQuestionIndex = 0;
    }

    displayQuestion() {
        this.questions[this.currentQuestionIndex].displayQuestion();
    }

    checkAnswer(userAnswer) {
        this.questions[this.currentQuestionIndex].checkAnswer(userAnswer);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questions.length) {
            alert("No more questions!");
            this.currentQuestionIndex = this.questions.length - 1;
        }
        this.displayQuestion();
    }
}

// DjenneGate class
class DjenneGate extends Question {
    constructor() {
        super(
            "What is the name of the famous mosque located in Mali?",
            "c",
            ["a) Great Mosque of Mecca", "b) Mosque of Al-Mutawakkil", "c) Great Mosque of Djenne (correct)"]
        );
    }
}

// Function to reset input
function resetInput() {
    document.getElementById("fname").value = "";
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("fname").value;
    councilGriot.checkAnswer(userAnswer);
}

// Function for "Next" button
function nextQuestion() {
    councilGriot.nextQuestion();
}

// Create an instance of the CouncilGriot class
const councilGriot = new DjenneGate();

// Display initial question for CouncilGriot class
councilGriot.displayQuestion();

