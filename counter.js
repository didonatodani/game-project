let DURATION = 64;
let remainingTime = DURATION;
let timer = null;

const message1 = "💥 GAME ON! 💥 ";
const message2 = "🌌 SHUFFLE TIME! 🌌 "
const message3 = "🙀 15 SECS! 🙀"

const toastMessage = document.querySelector("#toast-message")

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", () => {
    startCountdown();
  })
);

function startCountdown() {
    //IS THERE A WAY NOT TO REPEAT THIS???
    DURATION = 64;
    remainingTime = DURATION;
    timer = null;

  timer = setInterval(() => {
    remainingTime--;
    console.log(remainingTime);
    const timerElement = document.querySelector("#time");
    timerElement.innerText = remainingTime;

    switch (remainingTime){
        case 60:
            showToast(message1)
            game.cardsArray.forEach((card) => {
            card.turnOver();
            });
        break;
        case 40:
            showToast(message2)
            game.shuffleCards()
            break;
        case 15:
            showToast(message3)
            break;
        case 0:
            clearInterval(timer);
            game.gameOverScreen.style.display = "block";
    }
  }, 1000);
}

function showToast(message) {

  const toastMessageElement = document.querySelector("#toast")
  toastMessageElement.classList.remove("hide");
  toastMessageElement.classList.add("show")

  toastMessage.innerText = message

  setTimeout(()=>{
    toastMessageElement.classList.remove("show");
    toastMessageElement.classList.add("hide");
  }, 1500);
}
