class Game {
    constructor(numberOfCards) {
      this.isGameOver = false;
      this.gameArea = document.querySelector("#game-area");
      this.numberOfCards = numberOfCards;
      this.cardsArray = [];
      this.createCards();
      this.gameOverScreen = document.querySelector(".game-over-div");
    }

    createCards(){
        this.gameArea.innerHTML = "";

        const catsArray = ["304","304","400","400","401","401","404","404","414","414","599","599",]
        const shuff_cats = catsArray.sort(() => Math.random() - 0.5)
        for (let i = 0; i < this.numberOfCards; i++){
            let card =  new Card(this.gameArea);
            card.element.innerHTML = `<img src="./assets/${shuff_cats[i]}.jpg">`;
            card.element.setAttribute("value", shuff_cats[i]);
            this.cardsArray.push(card)
        }
    }
}

let game = new Game(12);

      //this.lives = 3;
      //this.level = 1;
   
    //   this.livesElement = document.querySelector("#lives");
    //   this.levelElement = document.querySelector("#level");
    //   this.updateLives();
    //}
  
    // updateLives() {
    //   this.livesElement.innerText = "❤️".repeat(this.lives);
    // }
    // updateLevel() {
    //   this.levelElement.innerText = this.level.toString();