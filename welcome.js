checkAnswer() {
    if (this.)
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