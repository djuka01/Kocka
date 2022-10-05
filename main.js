var pocBtn = document.querySelector('#pocBtn');
var mainView = document.querySelector('#mainView');
var mainBody = document.querySelector('#mainBody');
var imeP1 = document.querySelector('#imeP1');
var imeP2 = document.querySelector('#imeP2');
var p1Btn = document.querySelector('#p1Btn');
var p2Btn = document.querySelector('#p2Btn');
var k1 = document.querySelector('#k1');
var k2 = document.querySelector('#k2');
var namRound = document.querySelector('#namRound');
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
var player1Score = document.querySelector('#player1Score');
var player2Score = document.querySelector('#player2Score');
var startAgain = document.querySelector('#startAgain');
var rez = document.querySelector('#rez');

var round =0;

var player1TotalScore = 0;
var player2TotalScore = 0;

pocBtn.addEventListener('click',newPlayer);
p1Btn.addEventListener('click',bacanjeP1);
p2Btn.addEventListener('click',bacanjeP2);
startAgain.addEventListener('click',newGame);

function newPlayer() {
   play1 = prompt('Unesi ime prvog igraca');
   play2 = prompt('Unesi ime drugog igraca');
   mainView.style.display = 'none';
   mainBody.style.display = 'block';
   imeP1.innerHTML = play1;
   imeP2.innerHTML = play2;
}

function bacanjeP1() {
   var rand = Math.ceil(Math.random()*6);
   k1.innerHTML = rand;
   player1TotalScore += rand;
   player1Score.innerHTML = player1TotalScore;
   this.setAttribute('disabled','btn-warning');
   p2Btn.removeAttribute ("disabled");

}
function bacanjeP2() {
   round++;
   var rand = Math.ceil(Math.random()*6);
   k2.innerHTML = rand;
   player2TotalScore += rand;
   player2Score.innerHTML = player2TotalScore;
   this.setAttribute('disabled','disabled');
   p1Btn.removeAttribute ("disabled");
   if(round < 11){
    namRound.innerHTML = round;
   }else{
    winner()
    }
}

function winner() {
   p1Btn.setAttribute('disabled','disabled');
   p2Btn.setAttribute('disabled','disabled');
   startAgain.style.display = 'block';
  if(player1TotalScore > player2TotalScore){
   player1.style.background = "#5cb85c";
  }else if (player1TotalScore < player2TotalScore){
   player2.style.background = "#5cb85c";
  }else{
   player1.style.background = " #f0ad4e";
   player2.style.background = " #f0ad4e";
   rez.innerHTML = 'Rezultat je neresen' + player1TotalScore+ ' : ' +player2TotalScore;
  }
}

function newGame(){
  round = 1;
  k1.innerHTML = "0";
  k2.innerHTML = "0";
  player1Score.innerHTML = "0";
  player2Score.innerHTML = "0";
  p1Btn.removeAttribute('disabled');
  p2Btn.removeAttribute('disabled');
  mainBody.style.background = "none";
  startAgain.style.display = 'none';
  player2TotalScore = 0;
  player1TotalScore = 0;
  namRound.innerHTML = "1";
  player1.style.background = "transparent";
  player2.style.background = "transparent";
  winer();
}
