// Whose turn now ?, first player is 0, second is 1
var activePlayer = 0;

// Saved score of players
var scores = [0, 0];

// Turning points
var roundScore = 0;

// Side of dice, it will be 1-6 varieble that turns randomly
var sideNumber = Math.floor(Math.random() * 6) + 1;

// First points must be 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// console.log("Dice :" + sideNumber);

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Dice button ami oruulii
document.querySelector(".btn-roll").addEventListener("click", function () {
  // toog zuragtai ni holboh
  var sideNumber = Math.floor(Math.random() * 6) + 1;
  // web butsaan gargalt
  diceDom.style.display = "block";
  diceDom.src = "dice-" + sideNumber + ".png";

  // Toglogchiin eeljiin onoog oorchlolt gehdee 1 ees busad too.
  if (sideNumber !== 1) {
    // 1ees ylgaatai baih uyd
    roundScore = roundScore + sideNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 baih uyd eelj soligdoh buyu activePlayer = 0 baival 1 bolgono harin 1 baival 0 bolgono.

    //ene toglogchiin dice 1 buusan tul onoo 0 boln
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //Toglogchiin eelj shiljuuleh
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Ulaan tseg shiljuuleh.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // Shoo tur alga bolgoh
    diceDom.style.display = "none";
  }
});
