const guessInput = document.getElementById('userGuess');
const submitButton = document.getElementById('submitGuess');
const resultDiv = document.getElementById('resultMessage');
const guessDiv = document.getElementById('guessCounter');
const winGifDiv = document.getElementById('win-gif');
const debugDiv = document.getElementById('debug-number');

const randNum = Math.floor(Math.random() * 100) + 1;
console.log('Random Number:', randNum);

debugDiv.textContent = `This is the random number: ${randNum}`;
setTimeout(() => debugDiv.textContent = "", 5000);

let guessCount = 0;

submitButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultDiv.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    guessCount++;
    guessDiv.textContent = `Guess #${guessCount}`;

    if (guess < randNum) {
        resultDiv.textContent = "Too low! Try again.";
    } else if (guess > randNum) {
        resultDiv.textContent = "Too high! Try again.";
    } else {
        resultDiv.textContent = `Correct! You guessed the number: ${randNum} in ${guessCount} tries!`;
        winGifDiv.innerHTML = `<img src="images/yes-hooray.gif" alt="You win!" width="300">`;
    }

    guessInput.value = "";
});
