

var buttons = document.querySelectorAll(".btn").length;
var counter = 0;
var player = 0;
var computer = 0;


for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", singleRound);
}

function singleRound(e) {
  console.log("event heard");
  removeElements("img");

  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  console.log(computerSelection);
  if (playerSelection === "rock" && computerSelection === "scissors") {
    document.getElementById("title").textContent = "You win!";
    showImage("sciss.svg", "sciss", "comp");
    showImage("rock.svg", "stone", "you");
    player++;
  }
  else if(playerSelection === "paper" && computerSelection === "rock") {
    document.getElementById("title").textContent = "You win!";
    showImage("rock.svg", "stone", "comp");
    showImage("paper.svg", "pape", "you");
    player++;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    document.getElementById("title").textContent = "You win!";
    showImage("paper.svg", "pape", "comp");
    showImage("sciss.svg", "sciss", "you");
    player++;
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    document.getElementById("title").textContent = "You loose!";
    showImage("rock.svg", "stone", "comp");
    showImage("sciss.svg", "sciss", "you");
    computer++;
  }
  else if(computerSelection === "paper" && playerSelection === "rock") {
    document.getElementById("title").textContent = "You loose!";
    showImage("paper.svg", "pape", "comp");
    showImage("rock.svg", "stone", "you");
    computer++;
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    document.getElementById("title").textContent = "You loose!";
    showImage("sciss.svg", "sciss", "comp");
    showImage("paper.svg", "pape", "you");
    computer++;
  }
  else if (playerSelection == computerSelection) {
    document.getElementById("title").textContent = "Tie!";
    if(playerSelection == "scissors"){
      showImage("sciss.svg", "sciss", "you");
      showImage("sciss.svg", "sciss", "comp");
    }
    if (playerSelection == "rock") {
      showImage("rock.svg", "stone", "you");
      showImage("rock.svg", "stone", "comp");
    }
    if (playerSelection == "paper"){
      showImage("paper.svg", "pape", "you");
      showImage("paper.svg", "pape", "comp");
    }
  }
  counter ++;
  countPoints(player, computer);
  finalWinner();
  console.log(counter);
  return false;
}


function countPoints(player, computer) {
  document.getElementById("title").textContent = `${player}: ${computer}`;
}


function computerPlay() {
   const arr = ["rock", "paper", "scissors"];
   return arr[Math.floor(Math.random() * arr.length)];
 }


function showImage(src, id, parentId) {
     let img = document.createElement("img");
     img.src = src;
     img.width = 100;
     img.id = id;
     img.className = "icon";
     document.getElementById(parentId).appendChild(img);
     console.log("element appended");
}

function createReset() {
  let reset = document.createElement("button");
  reset.className = "btn";
  reset.textContent = "Once more!";
  reset.id = "reset";
  let parent = document.getElementById("buttons");
  parent.style.display = "block";
  parent.style.textAlign = "center";
  document.getElementById("buttons").appendChild(reset);
  console.log("resetButton");
  reset.addEventListener("click", reloadPage, 2000);
}
function reloadPage(e) {
  target = e.target.id;
  if (target ==  "reset"){
    location.reload();
  }
}


function removeElements(tag) {
    var elements = document.getElementsByTagName(tag);
    for (let j= 0; j< Array.from(elements).length; i++){
      elements[j].parentNode.removeChild(elements[j]);
    }
}

function removeByClass(className) {
    // Removes an element from the document
    var element = document.getElementByClassName(className);
    element.parentNode.removeChild(element);
}

function finalWinner(){
  if (counter >=5) {
    for (var j = 0; j < buttons; j++) {
      document.querySelectorAll(".btn")[j].removeEventListener("click", singleRound);
      removeElements("button");
      createReset();

    }

    if (player > computer) {
      document.getElementById("title").textContent = "You're the final Winner!";
    }
    else if (player < computer) {
      document.getElementById("title").textContent = "You lost the game";
    }
    else {
      document.getElementById("title").textContent = "It's a tie";
    }
  }
}
