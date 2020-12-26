// Togloomiin toloviin huvisag duussan, pauselasan esehiig shalgah
var isNewGame;
// Togloomiin buh gazar ashiglah global huvisagchid
var activePlayer;
var roundScore;
var scores;

// Shoonii zurgiig uzuuleh elementiig dom-oos haij oloh.
var diceDom = document.querySelector(".dice");

// Togloomig ehliiley
initGame();

// Togloom ehluuleh function
function initGame() {
  //Togloom ehlelee gedeg tolov
  isNewGame = true;
  // Whose turn now ?, first player is 0, second is 1
  activePlayer = 0;

  // Saved score of players
  scores = [0, 0];

  // Turning points
  roundScore = 0;

  // First points must be 0
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //Toglogchid ner butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  //active gargalt
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  //display ehlehed hooson baih shoogui bh.
  diceDom.style.display = "none";
}

// Dice button ami oruulii
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // 1-6 hurtel sanamsargui toog avah
    var sideNumber = Math.floor(Math.random() * 6) + 1;
    // toog zuragtai ni holboh
    diceDom.style.display = "block";

    // web butsaan gargalt
    diceDom.src = "dice-" + sideNumber + ".png";

    // Toglogchiin eeljiin onoog oorchlolt gehdee 1 ees busad too.
    if (sideNumber !== 1) {
      // 1ees ylgaatai baih uyd
      roundScore = roundScore + sideNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 baih uyd eelj soligdoh buyu activePlayer = 0 baival 1 bolgono harin 1 baival 0 bolgono.
      switchToNextPlayer();
    }
  } else {
    alert("Togloom duussan bna");
  }
});

// Hold event listener

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //Ug toglogchiin tsugluulsan eeljiin onoog hold hesegruu oruulah
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer hadgalsan onoog oorchloh
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Toglogchiin hojson eseh shalgah onoo 100>=
    if (scores[activePlayer] >= 10) {
      // Togloomiin duussan tolov
      isNewGame = false;

      document.getElementById("name-" + activePlayer).textContent =
        "Bi hojloo gg haha bootsoogoo avii";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Hen negeon hojigdoj bootsoogo aldsan baina 'new game' tovch darnuu");
  }
});

// toglogch shiljuuldeg function
function switchToNextPlayer() {
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

// Shineeer togloomig ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
