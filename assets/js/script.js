const timerElement = document.getElementById('timer');
//const timerInterval = setInterval(updateTimer, 1000);//
const questionsArea = document.getElementById('questions-area');
const startbtn = document.getElementById('startbtn');
const nextbtn = document.getElementById('nextbtn');

let shuffledQuestions = [];
let currentQuestionPosition = 0;
//let timeLeft = 10;//

/*function updateTimer() {
    timerElement.textContent = timeLeft + ' seconds';
    timeLeft--; 

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Time Up!'; 
}*/

function shuffleQuestions() {
    shuffledQuestions = [...questionsData]; // Make a copy of questionsData array
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

function createQuestions() {
    const quizData = shuffledQuestions[currentQuestionPosition];
    const questionTitle = document.createElement('div');
    questionTitle.className = 'questionTitle'; //need to create this class//
    questionTitle.innerHTML = quizData.question;
    const questionAnswerArea = document.createElement('div');
    questionAnswerArea.className = 'questionAnswers'; //need to create this class//

    
    for (let i=0; i<4; i++){
        const questionAnswer = document.createElement('label');
        questionAnswer.className = 'questionAnswer'; //need to create this class//
        const questionInput = document.createElement('input');
        questionInput.className = 'questionInput'; //need to create this class//
        questionInput.type = 'radio';
        questionInput.name = 'chosenAnswer_' + currentQuestionPosition;
        questionInput.value = quizData.answers[i];
        
        const labeltext = document.createTextNode(quizData.answers[i]);
        questionAnswer.appendChild(questionInput);
        questionAnswer.appendChild(labeltext);
        questionAnswerArea.appendChild(questionAnswer);

    }
    questionsArea.innerHTML = '';
    questionsArea.appendChild(questionTitle);
    questionsArea.appendChild(questionAnswerArea);
    currentQuestionPosition++;
}

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
        question: " What does the 'this' keyword refer to in JavaScript?",
        answers: ["The current function", "The global object", "The parent object", "The variable being passed to a function"],
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
        correctAnswer: 3
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
]

shuffleQuestions();

nextbtn.style.display = "none";

startbtn.addEventListener("click", function() {
    startbtn.style.display = "none";
    nextbtn.style.display = "block";
    createQuestions();
});

nextbtn.addEventListener("click", function() {
    createQuestions();
});