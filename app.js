// Whose turn now ?, first player is 0, second is 1
var activePlayer = 1;

// Saved score of players
var scores = [0, 0];

// Turning points
var points = 0;

// Side of dice, it will be 1-6 varieble that turns randomly
var side = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
// disappear dice
document.querySelector(".dice").style.display = "none";
// First points must be 0
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

//Current must be 0 too
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

console.log("Dice :" + side);
