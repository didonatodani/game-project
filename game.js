class Game {
  constructor(numberOfCards) {
    this.gameArea = document.querySelector("#game-area");
    this.lives = 5;
    this.livesElement = document.querySelector("#lives");
    this.numberOfCards = numberOfCards;
    this.cardsArray = [];
    this.createCards();
    //   this.cardSelection();
    this.updateLives();
    this.shuffleCards();
    this.gameOverScreen = document.querySelector(".game-over-div");
    this.winScreen = document.querySelector(".win-div");
  }

  createCards() {
    this.gameArea.innerHTML = "";
    this.gameArea.style.display = "grid";

    const catsArray = [
      "blue",
      "blue",
      "yellow",
      "yellow",
      "mix",
      "mix",
      "purple",
      "purple",
      "pink",
      "pink",
      "green",
      "green",
    ];
    const shuffledCats = catsArray
      .sort(() => Math.random() - 0.5)
      .slice(0, this.numberOfCards);

    this.cardsArray = shuffledCats.map((cat) => {
      let card = new Card(this.gameArea);
      card.element.innerHTML = `<img src="./assets/${cat}.png" class="card-img">`;
      card.element.setAttribute("value", cat);
      return card;
    });
  }

  shuffleCards() {
    for (let i = this.cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cardsArray[i], this.cardsArray[j]] = [
        this.cardsArray[j],
        this.cardsArray[i],
      ];
    }

    this.gameArea.innerHTML = "";

    this.cardsArray.forEach((card) => {
      this.gameArea.appendChild(card.element);
    });

    this.cardsArray.forEach((card) => {
      if (card.element.classList.contains("not-turned-over")) {
        card.element.classList.add("not-turned-over");
      }
    });
  }

  cardSelection() {
    let selectedCards = [];

    this.cardsArray.forEach((card) => {
      card.element.addEventListener("click", () => {
        if (selectedCards.includes(card.element)) {
          return;
        }
        card.turnOver();
        selectedCards.push(card.element);
        setTimeout(() => {
          if (
            selectedCards.length === 2 &&
            selectedCards[0].getAttribute("value") ===
              selectedCards[1].getAttribute("value")
          ) {
            selectedCards.forEach((card) => {
              card.classList.add("is-a-match");
              card.classList.remove("hover-effect");
            });
            selectedCards = [];
          } else if (selectedCards.length === 2) {
            loseLives();
            selectedCards.forEach((card) => {
              setTimeout(() => {
                card.classList.toggle("not-turned-over");
              }, 500);
            });
            selectedCards = [];
          }

          if (
            document.querySelectorAll(".is-a-match").length ==
            this.cardsArray.length
          ) {
            this.winScreen.style.display = "block";
            clearInterval(timer);
          } else if (this.lives <= 0) {
            this.gameOverScreen.style.display = "block";
            clearInterval(timer);
          }
        }, 500);
      });
    });
  }

  updateLives() {
    this.livesElement.innerText = "💙".repeat(this.lives);
  }
}

let game;
