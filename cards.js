const gameArea = document.querySelector("#game-area")

class Card {
    constructor(){
        this.element = document.createElement("div");
        this.element.classList.add("card");
        gameArea.appendChild(this.element);
        this.index =  this.element.getBoundingClientRect().index
    }

}


