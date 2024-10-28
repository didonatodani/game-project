
class Game {
    constructor(numberOfCards) {
      this.isGameOver = false;
      this.gameArea = document.querySelector("#game-area");
      this.lives = 5;
      this.livesElement =  document.querySelector("#lives")
      this.numberOfCards = numberOfCards;
      this.cardsArray = [];
      this.createCards();
      this.cardSelection();
      this.updateLives()
      this.gameOverScreen = document.querySelector(".game-over-div");
    }

    createCards(){
        this.gameArea.innerHTML = "";
        
        //ACTIVATE ALL THE ELEMENTS!!!!
        const catsArray = ["304","304","400","400","401","401"/*,"404","404","414","414","599","599"*/]
        const shuff_cats = catsArray.sort(() => Math.random() - 0.5)
        for (let i = 0; i < this.numberOfCards; i++){
            let card =  new Card(this.gameArea);
            card.element.innerHTML = `<img src="./assets/${shuff_cats[i]}.jpg">`;
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
                            console.log("they match!")
                            selectedCards.forEach((card)=>{
                                card.classList.add("is-a-match")
                            })
                            selectedCards = []
                        } else {
                            console.log("they dont match")
                            loseLives()
                            selectedCards.forEach((card)=>{
                                card.classList.remove("turnedOver")
                            })
                            selectedCards = [];
                        }
                    }

                    if (document.querySelectorAll(".is-a-match").length == this.cardsArray.length){
                        document.querySelector(".win-div").style.display = "block"
                        console.log("you won")
                    }
                }, 1000 );
            });
            
        });
    }

    updateLives() {
        this.livesElement.innerText = "❤️".repeat(this.lives);
    }

}

//CHANGE THIS NUMBER TO 12!!!!!
let game = new Game(6);


      //this.level = 1;

    //   this.levelElement = document.querySelector("#level");

    // updateLevel() {
    //   this.levelElement.innerText = this.level.toString();