function startGame(){
  document.querySelector("#instructions").style.display = "none"
  game = new Game(12);
  musicContainer.classList.remove("hide")
  audio.play()
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

function isAMatch(array){
  return array.length === 2 && array[0].getAttribute("value") === array[1].getAttribute("value")
}

document.querySelectorAll(".try-again-btn").forEach(button => {
  button.addEventListener("click", restartGame);
  button.addEventListener("click", startCountdown)
  
});

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);
startButton.addEventListener("click", startCountdown)
  