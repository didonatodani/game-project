const gameArea = document.querySelector("#game-area");

class Card {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("card");
    this.element.classList.add("hover-effect");
    gameArea.appendChild(this.element);
  }

  turnOver() {
    this.element.classList.toggle("not-turned-over");
  }
}
