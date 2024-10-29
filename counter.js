let DURATION = 125;
let remainingTime = DURATION;
let timer = null;

const message1 = "💥 GAME ON! 💥 ";
const message2 = "🌌 TIME TO SHUFFLE! 🌌 "
const message3 = "🙀 30 SECS TO FINISH! 🙀"

const toastMessage = document.querySelector("#toast-message")

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", () => {
    startCountdown();
  })
);

function startCountdown() {
    //IS THERE A WAY NOT TO REPEAT THIS???
    DURATION = 125;
    remainingTime = DURATION;
    timer = null;

  timer = setInterval(() => {
    remainingTime--;
    console.log(remainingTime);
    const timerElement = document.querySelector("#time");
    timerElement.innerText = remainingTime;
    if (remainingTime === 120) {
      game.cardsArray.forEach((card) => {
        card.turnOver();
      });
      console.log("hello");
      showToast(message1)
    } else if (remainingTime === 60) {
      showToast(message2)
    } else if (remainingTime === 30) {
        showToast(message3)
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      game.gameOverScreen.style.display = "block";
      console.log("you lose"); //MAKE IT TOASTTTTT
      remainingTime = DURATION + 1;
    }
  }, 1000);
}

function showToast(message) {

  const toastMessageElement = document.querySelector("#toast")
  toastMessageElement.classList.add("show")

  toastMessage.innerText = message

  setTimeout(()=>{
    toastMessageElement.classList.remove("show")
  }, 2000);
}
