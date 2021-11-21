function winMessage(playerChoice, computerChoice) {
  return `You Win ! ${playerChoice} beats ${computerChoice}.`;
}

function looseMessage(playerChoice, computerChoice) {
  return `You Loose ! ${computerChoice} beats ${playerChoice}.`;
}

function drawMessage(playerChoice) {
  return `Draw ! You both played ${playerChoice}.`;
}

function computerPlay() {
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

function playRound(playerSelection, computerSelection) {
  //Make the input standard
  playerChoice =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  computerChoice = computerSelection;

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

function game() {
  playerScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Make your choice: Rock/Paper/Scissors ?");
    computerSelection = computerPlay();
    winner = playRound(playerSelection, computerSelection);

    switch (winner) {
      case -1:
        computerScore += 1;
        console.log(looseMessage(playerSelection, computerSelection));
        break;
      case 0:
        console.log(drawMessage(computerSelection));
        break;
      case 1:
        playerScore += 1;
        console.log(winMessage(playerSelection, computerSelection));
        break;
    }
  }
}

game();
