let playerChoice, computerChoice;

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();


console.log(score)

function play(n) {
  playerChoice = n;
  computerChoice = Math.floor(Math.random() * 3 + 1);

  document.querySelector("#computer").innerHTML = htmlCmpChoice();

  if (computerChoice == playerChoice) {
    tie();
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
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
}

function won(){
  document.querySelector("#result").innerHTML = "You won!";
  document.querySelector('#wins').innerHTML = ++score.wins;
}

function lost(){
  document.querySelector("#result").innerHTML = "You lost!";
  document.querySelector('#losses').innerHTML = ++score.losses;
}

function tie(){
  document.querySelector("#result").innerHTML = "It's a tie!";
  document.querySelector('#ties').innerHTML = ++score.ties;
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

function clearResult() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  updateScoreElement();
  localStorage.removeItem('score');
}

function updateScoreElement() {
  document.querySelector('#wins').innerHTML = score.wins;
  document.querySelector('#losses').innerHTML = score.losses;
  document.querySelector('#ties').innerHTML = score.ties;
}


