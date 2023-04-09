// Define global variables

let currentScore = 0; // player's current score
let highScore = 0; // highest score achieved
let roundsPlayed = 0; // number of rounds played
let roundsAllowed = 3; /// number of rounds allowed per game

//display saved in local storage highscore value -------------------------------------
let displayHighscore = localStorage.getItem("highscoreDice") || 0;
document.querySelector("#game-highscore").textContent = displayHighscore;

// Start button click event listener
if (roundsPlayed < roundsAllowed) {
  document.querySelector(".start").addEventListener("click", function () {
    // Update dice images with random numbers
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].src = `images/dice${playerNumber}.png`;
    let computerNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll(
      "img"
    )[1].src = `images/dice${computerNumber}.png`;

    // Determine winner and update game
    if (playerNumber === computerNumber) {
      document.querySelector("h3").textContent = "Come on!";
      document.querySelector("#game").style.backgroundColor = "blue";
    } else if (playerNumber > computerNumber) {
      document.querySelector("h3").textContent = "Come on!";
      document.querySelector("#game").style.backgroundColor = "green";

      //update current score and high score
      currentScore++;
      document.querySelector("#game-current-score").textContent = currentScore;
      if (currentScore > highScore) {
        highScore = currentScore;
        document.querySelector("#game-highscore").textContent = highScore;

        //save highscore in local storage------------------------------------------
      localStorage.setItem("highscoreDice", highScore);
      }
    } else {
      document.querySelector("h3").textContent = "Come on!";
      document.querySelector("#game").style.backgroundColor = "grey";

      //update current score
      currentScore--;
      document.querySelector("#game-current-score").textContent = currentScore;
    }

    // Update roundsPlayed counter
    roundsPlayed++;

    // Check if max rounds have been played
    if (roundsPlayed === roundsAllowed) {
      if (currentScore === 0) {
        document.querySelector("h3").textContent = "😂Draw!";
        document.querySelector("h3").style.fontSize = "80px";
      } else if (currentScore > 0) {
        document.querySelector("h3").textContent = "😊You win!";
        document.querySelector("h3").style.fontSize = "80px";
      } else {
        document.querySelector("h3").textContent = "☹️You lost";
        document.querySelector("h3").style.fontSize = "80px";
      }

      document.querySelector(".again").addEventListener("click", function () {
        currentScore = 0;
        highScore = 0;
        roundsPlayed = 0;
        document.querySelector("#game-current-score").textContent =
          currentScore;
        document.querySelector("#game-highscore").textContent = highScore;
        gameContainer.style.backgroundColor = "white";
      });
    }
  });
}

// Again button click event listener
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("#game").style.backgroundColor = "white";
  document.querySelectorAll("img")[0].src = `images/dice${0}.jpg`;
  document.querySelectorAll("img")[1].src = `images/dice${0}.jpg`;
  document.querySelector("#game-current-score").textContent = currentScore;
  document.querySelector("#game-highscore").textContent = highScore;

  document.querySelector("h3").textContent = "Start";
});

// Reset button click event listener
document.querySelector("#reset").addEventListener("click", function () {
  location.reload();
});
