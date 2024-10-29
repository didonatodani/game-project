function startGame(){
  document.querySelector("#instructions").style.display = "none"
  //CHANGE THIS NUMBER TO 12!!!!!
  game = new Game(12);
}

function loseLives(){
    game.lives --
    game.updateLives();
}

function restartGame() {
  game.gameOverScreen.style.display = "none";
  game.winScreen.style.display = "none";

  game = new Game(12);
  game.updateLives();
}

document.querySelectorAll(".try-again-btn").forEach(button => {
  button.addEventListener("click", restartGame);
  
});

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);
  