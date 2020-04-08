
 //return randomly either Rock, Paper or Scissors


function computerPlay() {
   const arr = ["rock", "paper", "scissors"];
   return arr[Math.floor(Math.random() * arr.length)];
 }
 //play a single round of RPS
 function singleRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
     console.log("Gleichstand!")
     return 0;
   }

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


 //play 5 rounds and keep score, report winner and loser

 function game() {
   let counter = 0;
   let playerSelection = Array.from(buttons).forEach((button)=>{
      button.addEventListener("click", () => {
        playerSelect(button);
      });
   });

   let computerSelection = computerPlay();

   singleResult = singleRound(playerSelection, computerSelection);
   console.log(singleResult)
  counter += singleResult;
   }
   if (counter > 0){
     return "You are the Winner!";
   }
   else if (counter === 0) {
     return "No Winner no Looser!";
   }
   else {
     return "Sorry, you lost!";
   }
 }
 console.log(game());

//button logic (own func?)
 const button_rock = document.querySelector("#Rock");
 let button_scissors = document.querySelector("#Scissors");
 const button_paper = document.querySelector("Paper");
 const buttons = document.getElementsByClassName("btn");
 function changeBackground(elem){
   elem.style.backgroundColor = "white";
 }

 // button_rock.onclick = function() {
 //   button_rock.style.backgroundColor = "white";
 //   return false;
 // };
 //
 // button_scissors.addEventListener("click", () => {
 //   changeBackground(button_scissors)},
 //   false);
function playerSelect(button) {
 if (button == button_rock) {
   playerSelection = "rock";
   //changeBackground(button_scissors);
 }
 else if (button == button_scissors) {
   playerSelection = "scissors";
   //console.log("scissors");
 }
 else if (button == button_paper) {
   playerSelection = "paper";
 }
 return playerSelection;
};
