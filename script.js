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

function updateChoiceDisplay(playerChoice, computerChoice) {
  const playerDisp = document.querySelector(".player_choice");
  const computerDisp = document.querySelector(".computer_choice");
  switch (playerChoice) {
    case "Rock":
      playerDisp.src = "./Images/rock.png";
      break;
    case "Paper":
      playerDisp.src = "./Images/paper.png";
      break;
    case "Scissors":
      playerDisp.src = "./Images/scissors.png";
      break;
  }
  switch (computerChoice) {
    case "Rock":
      computerDisp.src = "./Images/rock.png";
      break;
    case "Paper":
      computerDisp.src = "./Images/paper.png";
      break;
    case "Scissors":
      computerDisp.src = "./Images/scissors.png";
      break;
  }
}

function playRound(playerSelection) {
  //Make the input standard
  playerChoice =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  computerChoice = randomChoice();
  updateChoiceDisplay(playerChoice, computerChoice);

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

function endGame() {
  if (playerScore > computerScore) {
    alert("You win!");
  } else {
    alert("You loose!");
  }
  playerScore = 0;
  computerScore = 0;
  updateScore();
  result.textContent = "Result: Not Started";
}

function updateScore() {
  playerDisplay.textContent = `Player: ${playerScore}`;
  computerDisplay.textContent = `Computer: ${computerScore}`;
}

function handleClick(playerChoice) {
  winner = playRound(playerChoice);
  switch (winner) {
    case -1:
      result.textContent = "Result: You loose";
      computerScore++;
      updateScore();
      root.style.setProperty("--click-color", "green");
      break;
    case 0:
      result.textContent = "Result: Draw";
      root.style.setProperty("--click-color", "white");

      break;
    case 1:
      result.textContent = "Result: You win";
      playerScore++;
      updateScore();
      root.style.setProperty("--click-color", "red");

      break;
  }

  if (playerScore == 5 || computerScore == 5) {
    endGame();
    return;
  }
}
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const playerDisplay = document.querySelector(".player_score");
const computerDisplay = document.querySelector(".computer_score");
const root = document.documentElement;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () => handleClick(button.classList[0]))
);
