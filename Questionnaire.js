class Question {
    constructor(question, answerKey, options) {
        this.question = question;
        this.answerKey = answerKey;
        this.options = options;
    }

    getQuestion() {
        return this.question;
    }

    getAnswerKey() {
        return this.answerKey;
    }

    getOptions() {
        return this.options;
    }
}


//------------------------DjenneGate Class----------------------------------------//
class DjenneGate extends Question {
    constructor() {
        super("What is the traditional title of the ruler of the Mali Empire?", "a", ["a) Mansa (answer)", "b) Sultan", "c) Pharaoh"]);
    }
}

// Create an instance of the DjenneGate class
const djenneGateQuestion = new DjenneGate();

// Display question
document.getElementById("question-box").innerText = djenneGateQuestion.getQuestion();


//Display options
const answerbox1 = document.getElementById("answer-box1");
const answerbox2 = document.getElementById("answer-box2");
const answerbox3 = document.getElementById("answer-box3");

const options = djenneGateQuestion.getOptions();

for ( let i = 0; i < options.length; i++ ) {
    const optionElement = document.createElement("div");
    optionElement.textContent = options[i];

    if (i === 0) {
        answerbox1.appendChild(optionElement);
    } else if (i === 1) {
        answerbox2.appendChild(optionElement);
    } else if (i === 2) {
        answerbox3.appendChild(optionElement);
    }

}


// Function to check answer
function checkAnswer() {
    const userAnswer = document.getElementById("fname").value;
    const answerKey = djenneGateQuestion.getAnswerKey();
    if (userAnswer.toLowerCase() === answerKey) {
        alert("Correct Answer!");
    } else {
        alert("Incorrect Answer!");
    }
}

// Function to reset input
function resetInput() {
    document.getElementById("fname").value = "";
}

//******************************************Counicl of griot class*********************************************** *//


