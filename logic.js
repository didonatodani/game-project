function cardSelection (){

    let selectedCards = [];

    game.cardsArray.forEach((card) =>{

        card.element.addEventListener("click", ()=>{
            card.turnOver()
            selectedCards.push(card.element)
            setTimeout(()=>{
                if (selectedCards.length === 2){
                    if (selectedCards[0].getAttribute("value") == selectedCards[1].getAttribute("value")){
                        console.log("they match!")
                        selectedCards = []
                    } else {
                        console.log("they dont match")
                        selectedCards.forEach((card)=>{
                            card.classList.remove("turnedOver")
                        })
                        selectedCards = [];
                    }
                }
                return 
                }, 1000 );
        });
        
    });
}

cardSelection()

function restartGame() {
    game.gameOverScreen.style.display = "none";
    game = new Game(12);
  }

  const restartButtonElement = document.querySelector("#try-again-btn");
  restartButtonElement.addEventListener("click", () => {
    restartGame();
  });
  