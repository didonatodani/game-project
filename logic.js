game.cardsArray.forEach(card =>{
    card.element.addEventListener("click", (e)=>{
        card.turnOver()
    })
})


function restartGame() {
    game.gameOverScreen.style.display = "none";
    game = new Game(12);
  }

  const restartButtonElement = document.querySelector("#try-again-btn");
  
  restartButtonElement.addEventListener("click", () => {
    restartGame();
  });
  