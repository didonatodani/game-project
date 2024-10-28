const gameArea = document.querySelector("#game-area")
const emojis = ["❤","❤","😂","😂","😒","😒","💕","💕","🤦‍♀️","🤦‍♀️","🙌","🙌",]
const shuff_emojis = emojis.sort(() => Math.random() - 0.5)

class Card {
    constructor(){
        this.element = document.createElement("div");
        this.element.classList.add("card");
        // this.value = value;
        gameArea.appendChild(this.element);
    }

};

