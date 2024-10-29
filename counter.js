const DURATION = 125; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const message1 = " GAME ON! "
// const message2 = "Start the engines! 💥"
// const message3 = "Lift off! 🚀"
// const toastMessage = document.querySelector("#toast-message")

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  
  timer = setInterval(() => {
    // startButton.disabled = true;
    remainingTime--;
    console.log(remainingTime);
    const timerElement = document.querySelector('#time')
    timerElement.innerText = remainingTime;
    if (remainingTime === 120){
        game.cardsArray.forEach(card =>{
            card.turnOver()
        })
        console.log("hello")
    //   showToast(message1)
    // } else if (remainingTime === 5){
    //   showToast(message2)
    } else if (remainingTime <= 0) {
      clearInterval(timer);
    //   showToast(message3)
    //   remainingTime = DURATION+1;
    //   startButton.disabled = false;
    }
  }, 1000);

}

// ITERATION 3: Show Toast
// function showToast(message) {

//   const toastMessageElement = document.querySelector("#toast")
//   toastMessageElement.classList.add("show")
//   const closeButton = document.querySelector('#close-toast')
//   closeButton.addEventListener('click', () => {
//     toastMessageElement.classList.remove("show")
//   })

//   toastMessage.innerText = message
//   // BONUS: ITERATION 4: TOAST CLOSE BUTTON

//   // Your code goes here ...
//   setTimeout(()=>{
//     toastMessageElement.classList.remove("show")
//   }, 3000);
// }