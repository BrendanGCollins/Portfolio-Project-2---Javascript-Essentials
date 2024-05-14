// Define variables
const timerElement = document.getElementById('timer');
const questionsArea = document.getElementById('questions-area');
const leadersArea = document.getElementById('leaders-area');
const startbtn = document.getElementById('startbtn');
const nextbtn = document.getElementById('nextbtn');
const finishbtn = document.getElementById('finishbtn');
const retrybtn = document.getElementById('retrybtn');
const scoreArea = document.createElement('div');

// Initialize
scoreArea.className = 'score-area';
scoreArea.textContent = 'Score: ';
let shuffledQuestions = [];
let currentQuestionPosition = 0;
let score = 0;
let maxQuestion = 0;
let timeLeft = 10;
let timerInterval;
let timeIsUp = false;

// Function to update timer
updateTimer = () => {
    timerElement.textContent = timeLeft + ' seconds';
    timeLeft--;

    if (timeLeft <0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Time Up!';
        timeIsUp = true;
        moveNext();
    }
}
// Function to move to the next question if no answer selected
moveNext = () => {
    // Reset timeIsUp flag
    timeIsUp = false;

    // Increment question position
    currentQuestionPosition++;

    // Create the next question
    createQuestions();

    // Start the timer for the next question
    timeLeft = 10;
    timerElement.textContent = timeLeft + ' seconds';
    timerInterval = setInterval(updateTimer, 1000);    

    // Check if it's the last question and adjust button visibility accordingly
    if (maxQuestion === 9) {
        nextbtn.style.display = "none";
        finishbtn.style.display = "block";
    }
}

// Function to shuffle questions
function shuffleQuestions() {
    shuffledQuestions = [...questionsData];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

// Function to create questions
function createQuestions() {
    timeLeft = 10;
    updateTimer();

    const quizData = shuffledQuestions[currentQuestionPosition];
    const questionTitle = document.createElement('div');
    questionTitle.className = 'questionTitle';
    questionTitle.textContent = quizData.question;
    const questionAnswerArea = document.createElement('div');
    questionAnswerArea.className = 'questionAnswers';

    for (let i = 0; i < 4; i++) {
        const questionAnswer = document.createElement('label');
        questionAnswer.className = 'questionAnswer';
        const questionInput = document.createElement('input');
        questionInput.className = 'questionInput';
        questionInput.type = 'radio';
        questionInput.name = 'chosenAnswer_' + currentQuestionPosition;
        questionInput.value = i;

        const labeltext = document.createTextNode(quizData.answers[i]);
        questionAnswer.appendChild(questionInput);
        questionAnswer.appendChild(labeltext);
        questionAnswerArea.appendChild(questionAnswer);
    }

    // Add event listener to radio buttons
    questionAnswerArea.querySelectorAll('input[type="radio"]').forEach(radioButton => {
        radioButton.addEventListener('click', function() {
            stopTimer(); // Stop the timer when any radio button is clicked
        });
    });   

    questionsArea.innerHTML = '';
    questionsArea.appendChild(questionTitle);
    questionsArea.appendChild(questionAnswerArea);
    document.body.appendChild(scoreArea);

    maxQuestion++;
}

// Update score area text content
function updateScore() {
    scoreArea.textContent = 'Score: ' + score.toString();
}

// Question Array
const questionsData = [
    {
        question: "What is Javascript?",
        answers: ["A programming language", "A database management system", "A markup language", "An operating system"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        answers: ["To create a new variable", "To concatenate strings", "To check the data type of a variable", "To define a function"],
        correctAnswer: 2
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers: ["var", "variable", "let", "v"],
        correctAnswer: 0
    },
    {
        question: "What does the '===' operator in JavaScript do?",
        answers: ["Assigns a value to a variable", "Checks if a variable is defined", "Performs bitwise XOR operation", "Compares values for equality without type coercion"],
        correctAnswer: 3
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        answers: ["def", "func", "function", "define"],
        correctAnswer: 2
    },
    {
        question: "How do you comment a single-line in JavaScript?",
        answers: ["/* */", "//", "#", "---"],
        correctAnswer: 1
    },
    {
        question: " Which method is used to remove the last element from an array?",
        answers: ["shift()", "pop()", "splice()", "slice()"],
        correctAnswer: 1
    },
    {
        question: "How do you check if a variable is an array in JavaScript?",
        answers: [" isObject()", "typeofArray()", "arrayCheck()", "isArray()"],
        correctAnswer: 3
    },
    {
        question: "Which keyword is used to prevent a variable from being modified?",
        answers: ["freeze", "lock", "const", "protect"],
        correctAnswer: 2
    },
    {
        question: "What does the acronym 'JSON' stand for in JavaScript?",
        answers: ["JavaScript Object Notation", "Java Syntax Object Notation", "Just Simple Object Naming", "JavaScript Oriented Notation"],
        correctAnswer: 0
    },
    {
        question: "What does the 'isNaN' function do?",
        answers: ["Checks if a value is a number", "Checks if a value is not a number", "Converts a string to a number", "Rounds a number to the nearest integer"],
        correctAnswer: 1
    },
    {
        question: "How do you convert a string to a number in JavaScript?",
        answers: ["parseInt()", "toNumber()", "Number()", "stringToNumber()"],
        correctAnswer: 2
    },
    {
        question: "What does the 'addEventListener' method do in JavaScript?",
        answers: ["Removes an event listener from a DOM element", "Appends a new child element to a parent element", "Adds an event listener to a DOM element", "Adds a new event to the event queue"],
        correctAnswer: 2
    },
    {
        question: "How do you reverse the order of elements in an array?",
        answers: ["flip()", "invert()", "reverse()", "backward()"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'concat' method in JavaScript?",
        answers: ["Creates a new array with the results of calling a function for every array element", "Combines two arrays into one", "Adds elements to the end of an array", "Removes elements from an array"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'slice' method in JavaScript?",
        answers: ["Returns a section of a string", "Removes elements from an array and returns the removed elements", "Adds elements to the end of an array", "Reverses the elements of an array"],
        correctAnswer: 0
    },
    {
        question: "What does the 'toLowerCase' method do in JavaScript?",
        answers: ["Splits a string into an array of substrings", "Removes leading and trailing whitespaces from a string", "Converts a string to uppercase", "Converts a string to lowercase"],
        correctAnswer: 3
    },
    {
        question: "How do you convert a number to a string in JavaScript?",
        answers: ["toText()", "toString()", "stringify()", "numberToString()"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'includes' method in JavaScript?",
        answers: ["Checks if an array includes a certain element", "Checks if a value is not a number", "Checks if a value is a number", "Checks if a string includes a certain substring"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'find' method in JavaScript?",
        answers: ["Iterates over the elements of an array and applies a function to each element", "Creates a new array with all elements that pass a test", "Reduces the array to a single value", "Returns the first element in an array that satisfies a provided testing function"],
        correctAnswer: 3
    }
];

// Shuffle questions at the beginning
shuffleQuestions();

// Hide buttons initially
nextbtn.style.display = "none";
finishbtn.style.display = "none";
retrybtn.style.display = "none";

// Event listener for the start button
startbtn.addEventListener("click", function() {
    startbtn.style.display = "none";
    nextbtn.style.display = "block";
    document.getElementById('explanation').style.display = "none";
    createQuestions();
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
});

// Event listener for the next button
nextbtn.addEventListener("click", function() {
    if (maxQuestion < 10) {
        const selectedAnswer = document.querySelector('input[name="chosenAnswer_' + (currentQuestionPosition) + '"]:checked');
        console.log("Selected answer:", selectedAnswer);
        if (!timeIsUp && !selectedAnswer) {
            // No answer selected
            document.querySelector('.game-area').classList.add('incorrect');
            setTimeout(() => {
                document.querySelector('.game-area').classList.remove('incorrect');
            }, 2000);
            return;
        }

        timeIsUp = false;
        const selectedAnswerIndex = parseInt(selectedAnswer.value);

        if (selectedAnswerIndex === shuffledQuestions[currentQuestionPosition].correctAnswer) {
            document.querySelector('.game-area').classList.add('correct');
            score++;
            updateScore();
            setTimeout(() => {
                document.querySelector('.game-area').classList.remove('correct');
            }, 2000);
        } else  {
            const correctAnswerIndex = shuffledQuestions[currentQuestionPosition].correctAnswer;
            const correctAnswerLabel = document.querySelector('.questionAnswers label:nth-child(' + (correctAnswerIndex + 1) + ')');
            correctAnswerLabel.classList.add('correct-answer');
            document.querySelector('.game-area').classList.add('incorrect');
            setTimeout(() => {
                document.querySelector('.game-area').classList.remove('incorrect');
                correctAnswerLabel.classList.remove('correct-answer');
            }, 2000);
        }
        currentQuestionPosition++;

        setTimeout(() => {
            createQuestions();
        }, 2000);

        if (maxQuestion == 9) {
            nextbtn.style.display = "none";
            finishbtn.style.display = "block";
        }
        // Reset the timer when clicking the Next button
        timeLeft = 10;
        clearInterval(timerInterval);
        timerElement.textContent = timeLeft + ' seconds';
        timerInterval = setInterval(updateTimer, 1000);
    }
});

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Event listener for the finish button
finishbtn.addEventListener("click", function() {
    stopTimer();
    const congratulationsMessage = document.createElement('div');
    congratulationsMessage.textContent = "Congratulations! You've completed the quiz.";
    const scoreMessage = document.createElement('div');
    scoreMessage.textContent = "Your score: " + score + " out of 10.";
    questionsArea.style.display = "none";
    finishbtn.style.display = "none";

    leadersArea.appendChild(congratulationsMessage);
    leadersArea.appendChild(scoreMessage);

    retrybtn.style.display = "block";
});

// Event listener for the retry button
retrybtn.addEventListener("click", function() {
    currentQuestionPosition = 0;
    score = 0;
    maxQuestion = 0;
    timeLeft = 10;
    timeIsUp = false;

    leadersArea.innerHTML = '';

    retrybtn.style.display = "none";
    scoreArea.textContent = 'Score: 0';

    questionsArea.style.display = "block";
    startbtn.style.display = "none";
    nextbtn.style.display = "block";

    document.getElementById('explanation').style.display = "none";

    timerElement.textContent = '';

    shuffleQuestions();
    createQuestions();
});