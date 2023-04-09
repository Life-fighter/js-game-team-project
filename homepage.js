// this script will take care of retrieving highscores

let simonScore = localStorage.getItem("highscoreSimon") || 0;
let diceScore = localStorage.getItem("highscoreDice") || 0;
let xcountScore = localStorage.getItem("highscoreXCount") || 0;

let totalScore = parseInt(simonScore) + parseInt(diceScore) + parseInt(xcountScore);

document.getElementById("simon-highscore").textContent = simonScore;
document.getElementById("dice-highscore").textContent = diceScore;
document.getElementById("xcount-highscore").textContent = xcountScore;
document.getElementById("total-highscore").textContent = totalScore;
