//computer random selection

function game() {
  var playerScore = [];
  var compScore = [];

  for (let i = 0; i < 5; i++) {
    //computer move
    function getComputerChoice() {
      const compOptions = ["rock", "paper", "scissors"];
      const randomSelection =
        compOptions[Math.floor(Math.random() * compOptions.length)];
      return randomSelection;
    }
    const compMove = getComputerChoice();

    //human selection
    const humanChoice = prompt("Rock, paper, or scissors?");
    const humanMove = humanChoice.toLowerCase();

    //check
    console.log("computer chose " + compMove);
    console.log("you chose " + humanMove);

    function playRound() {
      if (humanMove == "rock" && compMove == "scissors") {
        playerScore.push("win!");
        return "You win!";
      } else if (humanMove == "paper" && compMove == "rock") {
        playerScore.push("win!");
        return "you win!";
      } else if (humanMove == "scissors" && compMove == "paper") {
        playerScore.push("win!");
        return "you win!";
      } else if (humanMove == "rock" && compMove == "rock") {
        playerScore.push("win!");
        return "It's a tie!";
      } else if (humanMove == "paper" && compMove == "paper") {
        return "It's a tie!";
      } else if (humanMove == "scissors" && compMove == "scissors") {
        return "It's a tie!";
      } else if (humanMove == "rock" && compMove == "paper") {
        compScore.push("win!");
        return "computer wins!";
      } else if (humanMove == "paper" && compMove == "scissors") {
        compScore.push("win!");
        return "computer wins!";
      } else if (humanMove == "scissors" && compMove == "rock") {
        compScore.push("win!");
        return "compuer wins!";
      } else {
        return "error";
      }
    }
    console.log(playRound());
  }

  function checkScore() {
    if (playerScore.length > compScore.length) {
      return "Player wins the game!";
    } else if (playerScore.length < compScore.length) {
      return "Computer wins the game!";
    } else {
      return "The game is a tie!";
    }
  }
  console.log(checkScore());
}

console.log(game());
