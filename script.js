function randomChoice() {
  var choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection) {
  //Make the input standard
  playerChoice =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  computerChoice = randomChoice();

  switch (playerChoice) {
    case "Rock":
      switch (computerChoice) {
        case "Rock":
          return 0;
          break;
        case "Paper":
          return -1;
          break;
        case "Scissors":
          return 1;
          break;
      }
      break;
    case "Paper":
      switch (computerChoice) {
        case "Rock":
          return 1;
          break;
        case "Paper":
          return 0;
          break;
        case "Scissors":
          return -1;
          break;
      }
      break;
    case "Scissors":
      switch (computerChoice) {
        case "Rock":
          return -1;
          break;
        case "Paper":
          return 1;
          break;
        case "Scissors":
          return 0;
          break;
      }
      break;
  }
}

function endGame() {}

function updateScore() {
  playerDisplay.textContent = `Player: ${playerScore}`;
  computerDisplay.textContent = `Computer: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const playerDisplay = document.querySelector(".player_score");
const computerDisplay = document.querySelector(".computer_score");

function handleClick(playerChoice) {
  if (playerScore == 5 || computerScore == 5) {
    endGame();
    return;
  }
  winner = playRound(playerChoice);
  switch (winner) {
    case -1:
      result.textContent = "Result: You loose";
      computerScore++;
      updateScore();
      break;
    case 0:
      result.textContent = "Result: Draw";
      break;
    case 1:
      result.textContent = "Result: You win";
      playerScore++;
      updateScore();
      break;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () => handleClick(button.classList[0]))
);
