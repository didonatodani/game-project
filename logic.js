function restartGame() {
    game.gameOverScreen.style.display = "none";
    game = new Game(12);
  }

  const restartButtonElement = document.querySelector("#try-again-btn");
  
  restartButtonElement.addEventListener("click", () => {
    restartGame();
  });
  