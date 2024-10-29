class Game {
    constructor(numberOfCards) {
      this.gameArea = document.querySelector("#game-area");
      this.lives = 5;
      this.livesElement =  document.querySelector("#lives")
      this.numberOfCards = numberOfCards;
      this.cardsArray = [];
      this.createCards();
      this.cardSelection();
      this.updateLives()
      this.gameOverScreen = document.querySelector(".game-over-div");
      this.winScreen = document.querySelector(".win-div")
    }

    createCards(){
        this.gameArea.innerHTML = "";
        this.gameArea.style.display = "grid";
  
        const catsArray = ["blue","blue","yellow","yellow","mix","mix","purple","purple","pink","pink","green","green"]
        const shuff_cats = catsArray.sort(() => Math.random() - 0.5)

        for (let i = 0; i < this.numberOfCards; i++){
            let card =  new Card(this.gameArea);
            card.element.innerHTML = `<img src="./assets/${shuff_cats[i]}.png" class="card-img">`;
            card.element.setAttribute("value", shuff_cats[i]);
            this.cardsArray.push(card)
        }
    }

    cardSelection(){
        let selectedCards = [];

        this.cardsArray.forEach((card) =>{

            card.element.addEventListener("click", ()=>{
                card.turnOver()
                selectedCards.push(card.element)
                setTimeout(()=>{
                    if (selectedCards.length === 2){
                        if (selectedCards[0].getAttribute("value") == selectedCards[1].getAttribute("value")){
                            selectedCards.forEach((card)=>{
                                card.classList.add("is-a-match")
                            })
                            selectedCards = []
                        } else {
                            loseLives()
                            selectedCards.forEach((card)=>{
                                setTimeout(()=>{card.classList.toggle("turned-over")}, 500)
                            })
                            selectedCards = [];
                        }
                    }

                    if (document.querySelectorAll(".is-a-match").length == this.cardsArray.length){
                        this.winScreen.style.display = "block"
                        clearInterval(timer);
                    } else if (this.lives <= 0){
                        this.gameOverScreen.style.display = "block";
                        clearInterval(timer);
                    }
                }, 500 );
            });
            
        });
    }

    updateLives() {
        this.livesElement.innerText = "💜".repeat(this.lives);
    }

}

let game;