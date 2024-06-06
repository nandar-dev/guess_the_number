let generateRamdomNumber = Math.floor(Math.random() * 100 + 1);
const button = document.querySelector("button");
const message = document.getElementById("message");
const inputtedNumberElement = document.querySelector('input[type="number"');
const previousGuesses = document.getElementById("previous-guesses");
const guessesRemaining = document.getElementById("guesses-remaining");
const restartGame = document.querySelector(".restart-game");

let totalAttems = 10;
const warnColor = "#d9d905";
const errorColor = "#f60303";
const successColor = "#90ee90";
let previousGussessArray = [];

button.addEventListener("click", () => {
  if (totalAttems < 1) {
    message.innerHTML = `Game Over! The correct number was <span style="
    color: #d9d905;
    font-weight: bold;
    font-size: 17px;">${generateRamdomNumber}</span>. Better luck next time!`;
    message.style.color = errorColor;
    inputtedNumberElement.setAttribute("disabled", true);
    button.style.cursor = "not-allowed";
    button.style.opacity = "0.5";
    restartGame.style.display = "block";
    restartGame.style.cursor = "pointer";
    return;
  }
  const inputtedNumberValue = document.querySelector(
    'input[type="number"'
  ).value;

  if (inputtedNumberValue > 100 || inputtedNumberValue < 1) {
    message.textContent = "Your guessed number must be between 1 to 100.";
    message.style.color = errorColor;
  } else {
    message.textContent = "";
    previousGussessArray.push(inputtedNumberValue);
    if (generateRamdomNumber == inputtedNumberValue) {
      message.textContent = "Congratulations! You guessed the right number! 🎉";
      message.style.color = successColor;
      button.style.cursor = "not-allowed";
      inputtedNumberElement.setAttribute("disabled", true);
      restartGame.style.display = "block";
      restartGame.style.cursor = "pointer";
      return;
    }
    totalAttems = totalAttems - 1;
    guessesRemaining.textContent = totalAttems;
    previousGuesses.textContent = previousGussessArray.join(", ");
    inputtedNumberElement.value = "";

    if (inputtedNumberValue - generateRamdomNumber > 50) {
      message.textContent = "Number is too height";
      message.style.color = warnColor;
    } else if (inputtedNumberValue - generateRamdomNumber < -50) {
      message.textContent = "Number is too low";
      message.style.color = warnColor;
    }
  }
});

restartGame.addEventListener("click", () => {
  generateRamdomNumber = Math.floor(Math.random() * 100 + 1);
  totalAttems = 10;
  message.textContent = "";
  inputtedNumberElement.value = "";
  inputtedNumberElement.removeAttribute("disabled");
  button.style.cursor = "pointer";
  button.style.opacity = "1";
  restartGame.style.display = "none";
  previousGuesses.textContent = "Empty";
  previousGussessArray = [];
  guessesRemaining.textContent = totalAttems;
});
