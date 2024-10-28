class Game {
    constructor(numberOfCards) {
      this.isGameOver = false;
      this.gameArea = document.querySelector("#game-area");
      this.numberOfCards = numberOfCards;
      this.cardsArray = [];
      this.createCards();
    
    }
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
    createCards(){
        for (let i = 0; i < this.numberOfCards; i++){
            let card =  new Card(this.gameArea);
            this.cardsArray.push(card)
        }
    }
}

let game = new Game(12);

