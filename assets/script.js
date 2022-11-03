var scoreObjectString = localStorage.getItem("scoreObject");
 
var score = 0;
var initials = "";
try {
scoreObject=JSON.parse(scoreObjectString);
var scoreObjectScore = scoreObject.score;
var scoreObjectName=scoreObject.scoreObjectName;
var scoreObjectScoreString = scoreObjectScore.toString();
var scoreObjectInitialsString = scoreObjectsInitals.toString();
var scoreObjectScoreStringSpace = scoreObjectScoreString + "";
var scoreObjectNameStringSpace = scoreObjectNameSting + "";
} catch(error) {
  var scoreObjectScoreStringSpace = "";
  var scoreObjectNameStringSpace = "";
}
 
 
var div_0 = document.createElement("div");
div_0.id = "div_0";
document.body.appendChild(div_0);
 
div_0.style.display = "flex";
div_0.style.justifyContent = "space-between";
 
var button_0 = document.createElement("button");
button_0.id ="button_0";
button_0.textContent = "High Scores";
div_0.appendChild(button_0);
button_0.setAttribute(
  "style",
  "display:flex;align-items:center; justify-content:center;border: 1px solid white; background-color: white; color:black;"
);
var backbtn = document.createElement("button");
backbtn.id = "backbtn";
backbtn.textContent = "Back";
div_0.appendChild(backbtn);

