function loseLives(){
    game.lives --
    game.updateLives();

    if (game.lives <= 0 ){
      game.isGameOver = true
      game.gameOverScreen.style.display = "block";
    }
}
//FIX TRY AGAIN BUTTONS!!! (RESTART GAME AND RESTART LIVES) + remove hurray if you want to keep on playing
function restartGame() {
    game.gameOverScreen.style.display = "none";
    game.lives = 5
    game = new Game(6);
  }

  const restartButtonElement = document.querySelector(".try-again-btn");
  restartButtonElement.addEventListener("click", () => {
    restartGame();
  });
  