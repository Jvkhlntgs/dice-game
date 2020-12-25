// Whose turn now ?, first player is 0, second is 1
var activePlayer = 1;

// Saved score of players
var scores = [0, 0];

// Turning points
var points = 0;

// Side of dice, it will be 1-6 varieble that turns randomly
var sideNumber = Math.floor(Math.random() * 6) + 1;

// First points must be 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
// document.querySelector("#score-0").textContent = 0;
// document.querySelector("#score-1").textContent = 0;
// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;

console.log("Dice :" + sideNumber);

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

// Dice button ami oruulii
document.querySelector(".btn-roll").addEventListener("click", function () {
  var sideNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + sideNumber + ".png";
});
