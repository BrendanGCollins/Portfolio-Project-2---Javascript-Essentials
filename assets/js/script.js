const timerElement = document.getElementById('timer');

let timeLeft = 10;

function updateTimer() {
    timerElement.textContent = timeLeft + ' seconds';
    timeLeft--; 

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Time Up!'; 
        moveToNextQuestion();
}
}

const timerInterval = setInterval(updateTimer, 1000);

const questions [
    {
        question: "What is Javascript?",
        answers: ["A programming language", "A database management system", "A markup language", "An operating system"]
        correctAnswer: 0;
    }
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        answers: ["To create a new variable", "To concatenate strings", "To check the data type of a variable", "To define a function"]
        correctAnswer: 2;
    }
    {
        question: "How do you declare a variable in JavaScript?",
        answers: ["var", "variable", "let", "v"]
        correctAnswer: 0;
    }

]