

var buttons = document.querySelectorAll(".btn").length;
var counter = 0;
var player = 0;
var computer = 0;
for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", singleRound);
    }

  // for (var j = 0; j < buttons; j++) {
  //   document.querySelectorAll(".btn")[j].removeEventListener("click", singleRound);
  // }


function singleRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    document.getElementById("title").textContent = "Tie!";
    if(playerSelection == "scissors"){
      showImage("sciss.svg", "scissors", "comp")
      showImage("sciss.svg", "scissors", "you")
    }
    else if (playerSelection == "rock") {
      showImage("rock.svg", "rock", "you")
      showImage("rock.svg", "rock", "comp")
    }
    else if (playerSelection == "paper"){
      showImage("paper.svg", "paper", "you")
      showImage("paper.svg", "paper", "comp")
    }
  }

  else if (playerSelection === "rock" && computerSelection === "scissors") {
    document.getElementById("title").textContent = "You win!";
    showImage("sciss.svg", "scissors", "comp");
    showImage("rock.svg", "rock", "you");
    player++;
  }
  else if(playerSelection === "paper" && computerSelection === "rock") {
    document.getElementById("title").textContent = "You win!";
    showImage("rock.svg", "rock", "comp");
    showImage("paper.svg", "paper", "you");
    player++;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    document.getElementById("title").textContent = "You win!";
    showImage("paper.svg", "paper", "comp");
    showImage("sciss.svg", "scissors", "you");
    player++;
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    document.getElementById("title").textContent = "You loose!";
    showImage("rock.svg", "rock", "comp");
    showImage("sciss.svg", "scissors", "you");
    computer++;
  }
  else if(computerSelection === "paper" && playerSelection === "rock") {
    document.getElementById("title").textContent = "You loose!";
    showImage("paper.svg", "paper", "comp");
    showImage("rock.svg", "rock", "you");
    computer++;
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    document.getElementById("title").textContent = "You loose!";
    showImage("sciss.svg", "scissors", "comp");
    showImage("paper.svg", "paper", "you");
    computer++;
  }
console.log(player);
return false;
}

// function countPoints(player, computer) {
//   document.getElementById("title").textContent = `${player}: ${computer}`;
// }

function computerPlay() {
   const arr = ["rock", "paper", "scissors"];
   return arr[Math.floor(Math.random() * arr.length)];
 }


function showImage(src, name, id) {
     let img = document.createElement("img");
     let parent = document.getElementById(id);
     img.src = src;
     img.width = 100;
     img.id = name;
     document.getElementById(id).appendChild(img);
}

// const reset = document.querySelector(".reset-btn");
// function resetRound(){
//   location.reload()
// }
// //   reset.addEventListener('click', resetRound);
//
//   // if (result > 0) {
//   //   document.getElementById("title").textContent = "You're the final Winner!";
//   // }
//   // else if (result == 0) {
//   //   document.getElementById("title").textContent = "It's a tie";
//   // }
//   // else {
//   //   document.getElementById("title").textContent = "You lost the game";
//   // }
// }
