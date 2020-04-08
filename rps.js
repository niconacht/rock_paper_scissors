let buttons = document.querySelectorAll("btn");
buttons.forEach((button) => {
  button.addEventListener("click", singleRound)
})

function singleRound(event) {
  const playerSelection = event.target.id;
  const computerSelection = computerPlay();

  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Win! Rock beats Scissors!");
    return 1;
  }
  else if(playerSelection === "paper" && computerSelection === "rock") {
    console.log( "Win!Paper beats Rock!");
    return 1;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log( "Win! Scissors beat Paper");
    return 1;
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("Loose! Rock beats Scissors!");
    return -1;
  }
  else if(computerSelection === "paper" && playerSelection === "rock") {
    console.log("Loose!Paper beats Rock!");
    return -1;
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("Loose! Scissors beat Paper");
    return -1;
  }
}


function computerPlay() {
   const arr = ["rock", "paper", "scissors"];
   return arr[Math.floor(Math.random() * arr.length)];
 }
 //play a single round of RPS



// function playerSelect(button) {
//   let playerS = "";
//  if (button == button_rock) {
//    playerS = "rock";
//    //changeBackground(button_scissors);
//  }
//  else if (button == button_scissors) {
//    playerS = "scissors";
//    //console.log("scissors");
//  }
//  else if (button == button_paper) {
//    playerS = "paper";
//  }
//  return playerS;
// };
