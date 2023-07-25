let playerChoice, computerChoice;

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();



function play(number) {
  playerChoice = number;
  computerChoice = Math.floor(Math.random() * 3 + 1);
  displayChoiceAnimation(number);
  displayCmpChoice(computerChoice);

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

function displayCmpChoice(number) {
  switch(number) {
    case 1:
      document.querySelector('.computer').innerHTML = '<img class = "img"  src = "images/rock.png">'
      break;
    case 2:
      document.querySelector('.computer').innerHTML = '<img class = "img"  src = "images/paper.png">'
      break;
    case 3:
      document.querySelector('.computer').innerHTML = '<img class = "img" src = "images/scissors.png">'
      break;
  }
}

/*
function displayPlayerChoice(number) {
  let selected, nonSelected1, nonSelected2;
  switch(number) {
    case 1:
      selected = 'rock';
      nonSelected1 = 'paper';
      nonSelected2 = 'scissors'
      break;
    case 2:
      selected = 'paper';
      nonSelected1 = 'rock';
      nonSelected2 = 'scissors'
      break;
    case 3:
      selected = 'scissors';
      nonSelected1 = 'rock';
      nonSelected2 = 'paper'
      break;
  }
  document.getElementById(selected).style.pointerEvents = 'none';
  document.getElementById(nonSelected1).innerHTML = '';
  document.getElementById(nonSelected2).innerHTML = '';

  document.querySelector('.buttons').style.gap = '0';
}
*/

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

/* Animation Test */

function displayChoiceAnimation(number){
  let selected, nonSelected1, nonSelected2;
  if(number === 1) {
    selected = 'rock';
  } else if (number === 2) {
    selected = 'paper';
  } else {
    selected = 'scissors';
  }

  switch(selected) {
    case 'rock':
      nonSelected1 = 'paper';
      nonSelected2 = 'scissors';
      document.getElementById(selected).style.pointerEvents = 'none';
      document.getElementById(nonSelected1).style.opacity = '0';
      document.getElementById(nonSelected2).style.opacity = '0';
      document.getElementById(selected).classList.toggle('animate-rock');

      setTimeout(function(){
        document.getElementById(nonSelected1).innerHTML = '';
        document.getElementById(nonSelected2).innerHTML = '';
        document.querySelector('.buttons').style.gap = '0';
      }, 1000);
      break;

    case 'paper':
      nonSelected1 = 'rock';
      nonSelected2 = 'scissors';
      document.getElementById(selected).style.pointerEvents = 'none';
      document.getElementById(nonSelected1).innerHTML = '';
      document.getElementById(nonSelected2).innerHTML = '';
      document.querySelector('.buttons').style.gap = '0';
      break;
    
    case 'scissors':
      nonSelected1 = 'rock';
      nonSelected2 = 'paper';
      document.getElementById(selected).style.pointerEvents = 'none';
      document.getElementById(nonSelected1).style.opacity = '0';
      document.getElementById(nonSelected2).style.opacity = '0';
      document.getElementById(selected).classList.toggle('animate-scissors');

      setTimeout(function(){
        document.querySelector('.buttons').style.gap = '0';
        document.getElementById(nonSelected1).innerHTML = '';
        document.getElementById(nonSelected2).innerHTML = '';
      }, 1000);
      break;
  }
}

