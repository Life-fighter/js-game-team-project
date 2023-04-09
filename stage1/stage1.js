let buttons = document.querySelectorAll(".btn");
let colors = ["red", "blue", "green", "yellow"];
let pattern = [];
let userPattern = [];
let score = 0;
let highscore = 0;

//display saved in local storage highscore value
let displayHighscore = localStorage.getItem("highscoreSimon") || 0;
document.getElementById("highscoreSimon").textContent = displayHighscore;

//giving "start" button functionality
document.getElementById("start").addEventListener("click", function () {
  document.getElementById("scoreSimon").textContent = `${score}`;
  if (score === 0) {
    document.getElementById("gameOver").style.display = "none";
    gameColorPattern();

    //make buttons available for click
    enableButtons();
  }
});

//the main function for emplementing games scenario
function gameColorPattern() {
  userPattern = [];
  score++;
  let randomColor = Math.floor(Math.random() * 4);

  pattern.push(colors[randomColor]);

  //repeat excisting game pattern for player
  pattern.forEach((color, index) => {
    setTimeout(() => {
      pressed(color);
    }, (index + 1) * 400);
  });
}

//adding event listener to all elements with ".btn" class. Adding user clicked buttons to the userPattern array
for (let button of buttons) {
  button.addEventListener("click", function () {
    let userChosenColor = this.id;
    pressed(userChosenColor);
    userPattern.push(userChosenColor);
    checkAnswer(userPattern.length - 1);
  });
}

//function for user clicked pattern check
function checkAnswer(level) {
  //check if color(button clicked) under index of level are the same
  if (userPattern[level] === pattern[level]) {
    //check if arrays are the same length
    if (userPattern.length === pattern.length) {
      //start next round in a 5 sec
      setTimeout(() => {
        gameColorPattern();
      }, 500);
      document.getElementById("scoreSimon").textContent = `${score}`;
    }
  } else {
    //visual and audio of the loss
    let lost = new Audio("sounds/wrong.mp3");
    lost.play();
    document.getElementsByTagName("body")[0].classList.add("game-over");

    //set and save the highscore
    if (score > highscore) {
      highscore = score - 1;
      document.getElementById("highscoreSimon").textContent = highscore;
    }

    //save highscore in local storage
    localStorage.setItem("highscoreSimon", highscore);

    //set back the visual
    setTimeout(() => {
      document.getElementsByTagName("body")[0].classList.remove("game-over");
    }, 100);

    //display the game over heading
    document.getElementById("gameOver").style.display = "inline-block";
    goAgain();

    //disable buttons while game is not restarted
    disableButtons();
  }
}

//clear data for new game
function goAgain() {
  pattern = [];
  userPattern = [];
  score = 0;
}

//enable buttons
function enableButtons() {
  for (let i = 0; i < colors.length; i++) {
    document.getElementById(colors[i]).disabled = false;
  }
}

//disable buttons
function disableButtons() {
  for (let i = 0; i < colors.length; i++) {
    document.getElementById(colors[i]).disabled = true;
  }
}

//create function for changing pressed button color and making sound
function pressed(chosenColor) {
  //change color
  document.getElementById(chosenColor).classList.add("pressed");

  //get back default color
  setTimeout(() => {
    document.getElementById(chosenColor).classList.remove("pressed");
  }, 300);

  //make sound
  let audio = new Audio("sounds/" + chosenColor + ".mp3");
  audio.play();
}
