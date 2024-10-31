let DURATION;
let remainingTime;
let timer;

const message1 = "💥 GAME ON! 💥 ";
const message2 = "🌌 MIX, MIX, MIX! 🌌 ";
const message3 = "🙀 15 SECS! 🙀";

const toastMessage = document.querySelector("#toast-message");

function showToast(message) {
  const toastMessageElement = document.querySelector("#toast");
  toastMessageElement.classList.remove("hide-toast");
  toastMessageElement.classList.add("show");

  toastMessage.innerText = message;

  setTimeout(() => {
    toastMessageElement.classList.remove("show");
    toastMessageElement.classList.add("hide-toast");
  }, 1500);
}

function startCountdown() {

  DURATION = 64;
  remainingTime = DURATION;
  timer = null;

  timer = setInterval(() => {
    remainingTime--;
    const timerElement = document.querySelector("#time");
    timerElement.innerText = remainingTime;

    switch (remainingTime) {
      case 60:
        showToast(message1);
        game.cardSelection();
        game.cardsArray.forEach((card) => {
          card.turnOver();
        });
        break;
      case 35:
        showToast(message2);
        setTimeout(() => {
          game.shuffleCards();
        }, 500);
        break;
      case 15:
        showToast(message3);
        break;
      case 0:
        game.gameOverScreen.style.display = "block";
        clearInterval(timer);
    }
  }, 1000);
}