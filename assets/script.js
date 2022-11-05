var pass =document.querySelector(".pass");
var fail = document.querySelector(".fail");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");


var name = "";
var score = 0;
var passCounter = 0;
var failCounter = 0;
var timer;
var timerCount;


function init() {
  getPass();
  getFails();
}

function startQuiz() {
  timerCount=60;
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

function passQuiz() {
  wordBlank.textContent = "You Passed!"
  passCounter++
  startButton.disabled =
  setPasses()
}

function failQuiz() {
  wordBlank.textContent = "You Failed!"
  failCounter++
  startButton.disabled = 
  setFails()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if(timerCount >= 0){
      if (isPass && timerCount >0) {
        clearInterval(timer);
        passQuiz()
      }
    } 
    if (timerCount === 0) {
      clearInterval(timer);
      failQuiz();
    }
  })
}

function highScores() {
  chosenScore = scores[Math.floor(Math.random() * score.length)];
  numbersInChosenScore = chosenScore.split("");
  numScores = numbersInChosenScore.length;
  highScores = []
  
  for(var i = 0; i < numScores; i++) {
    highScores.push("");
  }
  highScores.textContent = highScores.join("")
}


function setPasses() {
  pass.textContent = passCounter;
  localStorage.setItem("passCount", passCounter);
}

function setFails(){
  fail.textContent = failCounter;
  localStorage.setItem("failCount",failCounter);
}

function getPasses() {
  var storedPasses = localStorage.getItem("passCount");
  if (storedPasses === null) {
    passCounter = 0;
  }else {
    passCounter = storedPasses;
  }
  pass.textContent = passCounter;
}
function getFails() {
  var storedFails = localStorage.get("failCount");
  if (storedFails === null) {
    failCounter = 0;
  }else {
    failCounter = storedFails;
  }
  fail.textContent = failCounter;
}

function pass() {
}

function myFunction() {
  ("Have a nice day!")
}

pass("myBtn").addEventListener("click", startQuiz);

fail("myBtn").addEventListener("click",startQuiz);

startButton("myBtn").addEventListener("click", startQuiz);

timerElement("myBtn").addEventListener("click", startQuiz);

init();

var resetButton = document.querySelector(".reset-button");

function resetQuiz() {
  passCounter = 0;
  failCounter = 0;

  setPasses()
  setFails()

  resetButton.addEventListener("click",resetQuiz);
}
