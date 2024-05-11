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