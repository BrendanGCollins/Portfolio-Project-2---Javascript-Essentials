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
        question: "What is the capital of France?",
        answers: ["Paris", "Berlin", "Rome", "London"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Jupiter", "Mars ", "Venus"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 0
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Giraffe", "Hippopotamus", "Blue whale"],
        correctAnswer: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        correctAnswer: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["China", "Japan", "South Korea", "India"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["Wa", "H2O", "O2", "CO2"],
        correctAnswer: 1
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: [" Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"],
        correctAnswer: 3
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["Mount Kilimanjaro", "Mount Fuji", "Mount Everest", "Mount McKinley"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Australia?",
        answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        correctAnswer: 0
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Atlantic Ocean"],
        correctAnswer: 2
    },
    {
        question: "Which bird is known for its ability to imitate human speech?",
        answers: ["Penguin", "Eagle", "Parrot", "Sparrow"],
        correctAnswer: 2
    },
    {
        question: "Who was the first person to step on the moon?",
        answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"],
        correctAnswer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Gold", "Diamond", "Iron", "Platinum"],
        correctAnswer: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: ["Mercury", "Mars", "Venus", "Jupiter"],
        correctAnswer: 0
    },
    {
        question: "Who wrote the Harry Potter book series?",
        answers: ["George R.R. Martin", "J.R.R. Tolkien", "Suzanne Collins", "J.R.R. Tolkien"],
        correctAnswer: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Cu", "Au", "Fe", "Ag"],
        correctAnswer: 1
    },
    {
        question: "What is the currency of Japan?",
        answers: ["Yen", "Dollar", "Pound", "Euro"],
        correctAnswer: 0
    },
    {
        question: "Who painted the famous artwork 'The Starry Night'?",
        answers: ["Pablo Picasso", "Claude Monet", "Leonardo da Vinci", "Vincent van Gogh"],
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
        timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
});