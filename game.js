class Game {
    constructor(numberOfCards) {
      this.isGameOver = false;
      this.gameArea = document.querySelector("#game-area");
      this.numberOfCards = numberOfCards;
      this.cardsArray = [];
      this.createCards();
    }

    createCards(){
        for (let i = 0; i < this.numberOfCards; i++){
            let card =  new Card(this.gameArea);
            card.element.innerText = shuff_emojis[i]
            card.element.setAttribute("value", shuff_emojis[i])
            this.cardsArray.push(card)
            console.log(card)
        }
    }
}

let game = new Game(12);






      //this.lives = 3;
      //this.level = 1;
    //   this.width = this.gameArea.getBoundingClientRect().width;
    //   this.height = this.gameArea.getBoundingClientRect().height;
      
    //   this.livesElement = document.querySelector("#lives");
    //   this.levelElement = document.querySelector("#level");
    //   this.gameOverScreen = document.querySelector("#game-over");
    //   this.updateLives();
    //}
  
    // updateLives() {
    //   this.livesElement.innerText = "❤️".repeat(this.lives);
    // }
    // updateLevel() {
    //   this.levelElement.innerText = this.level.toString();