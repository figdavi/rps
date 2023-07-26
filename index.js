let playerChoice;

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function play(number) {
  playerChoice = number;
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  displayCmpChoice(computerChoice);
  displayChoiceAnimation(number);

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

  let continueElement = document.getElementById('continue');
  continueElement.style.opacity = '1';
  continueElement.style.pointerEvents = 'all';
}

function won(){
  document.getElementById('result').innerHTML = 'You <span style = "color: green">Won!</span>';
  document.getElementById('wins').innerHTML = ++score.wins;
}

function lost(){
  document.getElementById('result').innerHTML = 'You <span style = "color: brown">lost!</span>';
  document.getElementById('losses').innerHTML = ++score.losses;
}

function tie(){
  document.getElementById('result').innerHTML = 'It\'s a <span style = "color: var(--light-gray)">tie!</span>';
  document.getElementById('ties').innerHTML = ++score.ties;
}

function convertNumberChoice(number){
  if(number === 1) {
    return 'rock';
  } else if (number === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function displayCmpChoice(number) {
  let selected = convertNumberChoice(number);

  document.getElementById('computer').innerHTML = `<img class = "img"  src = "images/${selected}.png">`

}


function displayChoiceAnimation(number){
  let selected = convertNumberChoice(number);
  let selectedElement = document.getElementById(selected);
  let nonSelected1, nonSelected2;

  if (selected === 'paper') {
    nonSelected1 = 'rock';
    nonSelected2 = 'scissors';
  } else if (selected === 'rock') {
    nonSelected1 = 'paper';
    nonSelected2 = 'scissors';
  } else {
    nonSelected1 = 'rock';
    nonSelected2 = 'paper';
  }
  
  selectedElement.className = '';
  selectedElement.style.pointerEvents = 'none';
  document.getElementById(nonSelected1).style.pointerEvents = 'none';
  document.getElementById(nonSelected2).style.pointerEvents = 'none';
  document.getElementById(nonSelected1).style.opacity = '0';
  document.getElementById(nonSelected2).style.opacity = '0';

  if(selected != 'paper') {
    let animateElement = 'animate-'
    animateElement += selected;
    selectedElement.classList.add(animateElement);
  }
  
}

function continueGame() {
  let selected = convertNumberChoice(playerChoice);
  let selectedElement = document.getElementById(selected);
  let nonSelected1, nonSelected2;


  selectedElement.className = '';
  document.getElementById('computer').innerHTML = '?';
  document.getElementById('continue').style.opacity = '0';
  document.getElementById('continue').style.pointerEvents = 'none';
  document.getElementById('result').innerHTML = '';

  if (selected === 'paper') {
    nonSelected1 = 'rock';
    nonSelected2 = 'scissors';
  } else if (selected === 'rock') {
    nonSelected1 = 'paper';
    nonSelected2 = 'scissors';
  } else {
    nonSelected1 = 'paper';
    nonSelected2 = 'rock';
  }
  
  if(selected === 'paper') {
    document.getElementById(nonSelected1).style.opacity = '1';
    document.getElementById(nonSelected2).style.opacity = '1';
    selectedElement.style.pointerEvents = 'all';
    document.getElementById(nonSelected1).style.pointerEvents = 'all';
    document.getElementById(nonSelected2).style.pointerEvents = 'all';
  } else {

    selectedElement.classList.add('animate-continue');

    setTimeout(function(){
      document.getElementById(nonSelected1).style.opacity = '1';
      document.getElementById(nonSelected2).style.opacity = '1';

      selectedElement.style.pointerEvents = 'all';
      document.getElementById(nonSelected1).style.pointerEvents = 'all';
      document.getElementById(nonSelected2).style.pointerEvents = 'all';
    }, 300);
    setTimeout(function(){
      selectedElement.className = '';
    }, 660);
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
  document.getElementById('wins').innerHTML = score.wins;
  document.getElementById('losses').innerHTML = score.losses;
  document.getElementById('ties').innerHTML = score.ties;
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

