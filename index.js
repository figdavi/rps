let playerChoice, computerChoice;



function play(n) {
  console.clear();
  playerChoice = n;
  computerChoice = Math.floor(Math.random() * 3 + 1);

  document.getElementById("computer").innerHTML = htmlCmpChoice();

  if (computerChoice == playerChoice) {
    draw();
  } else {
    switch(playerChoice) {
      case 1:
        if(computerChoice == 3) {
          won();
        } else {
          lost();
        }
        break;
      case 2:
        if(computerChoice == 1) {
          won();
        } else {
          lost();
        }
        break;
      case 3:
        if(computerChoice == 1) {
          lost();
        } else {
          won();
        }
        break;
    }
  }
}

function won(){
  document.getElementById("result").innerHTML = "You won!";
}

function lost(){
  document.getElementById("result").innerHTML = "You lost!";
}

function draw(){
  document.getElementById("result").innerHTML = "It's a draw!";
}

function htmlCmpChoice() {
  switch(computerChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}