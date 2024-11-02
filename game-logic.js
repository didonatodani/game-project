// this file is in charge of all the game logic, event listeners, etc


window.onload = function() {
    document.getElementById('game-start').style.display = 'flex'; 
};


//allowing the player to move with arrow keys
document.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch (e.key) {
      case "a":
      case "ArrowLeft":
        player.direction = "left";
        break;
      case "d":
      case "ArrowRight":
        player.direction = "right";
        break;
      case "s":
      case "ArrowDown":
        player.direction = "down";
        break;
      case "w":
      case "ArrowUp":
        player.direction = "up";
        break;
    }
  });

  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "a":
      case "ArrowLeft":
      case "d":
      case "ArrowRight":
      case "s":
      case "ArrowDown":
      case "w":
      case "ArrowUp":
        player.direction = null;
        break;
    }
  });

/* Shooting Functionality */
  let isShooting = false; // To track if the space bar is pressed

    // Keydown event for shooting
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            isShooting = true; 
            createBullet();
        }
    });

    // Keyup event to stop shooting
    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            isShooting = false; 
        }
    });

/* Game Loop */
  let frames = 0;

  function gameLoop() {
    if (!game.isGameOver) {
      frames++;
      player.move();

      game.interactableArray.forEach((interactable) => {
        interactable.move();
        crashTest(interactable);
      });

      game.bulletArray.forEach((bullet) => {
        playShootSound()
        bullet.move();
        game.interactableArray.forEach((interactable) => {
            if (crashBullet(bullet, interactable)) { 
                interactable.handleBullet(bullet); 
                interactable.destroy(); 
                bullet.destroy(); 
            }
        });
      })
      /* Level Change */
      if (frames % 2000 === 0) {
        game.level++;
        game.updateLevel();
        // careful when creating intervals inside loops, they will be created multiple times
        setInterval(createCandyLighteningBolt, 20000)
        setInterval(createCandyBandit, 10000);
        setInterval(createCottonCandyCloud, 30000);
      } 

      
      requestAnimationFrame(gameLoop);
    }
  }

  /* Player vs Interactable Crash */

  function crashTest(interactable) {
    const playerLeftEdge = player.left;
    const playerRightEdge = player.left + player.width;
    const playerTopEdge = player.top;
    const playerBottomEdge = player.top + player.height;

    const interactableLeftEdge = interactable.left;
    const interactableRightEdge = interactable.left + interactable.width;
    const interactableTopEdge = interactable.top; 
    const interactableBottomEdge = interactable.top + interactable.height;

    if (
        playerLeftEdge < interactableRightEdge &&
        playerRightEdge > interactableLeftEdge &&
        playerTopEdge < interactableBottomEdge &&
        playerBottomEdge > interactableTopEdge
    ) {
        interactable.handleCrash(); 
        interactable.destroy();

        if (game.lives <= 0) {
            game.isGameOver = true;
            pauseBgSound();
            game.gameOverScreen.style.display = "flex";
          }

    }
}



/* Bullet vs Interactable Crash */
function crashBullet(bullet, interactable) {
    const bulletLeftEdge = bullet.left;
    const bulletRightEdge = bullet.left + bullet.width;
    const bulletTopEdge = bullet.top;
    const bulletBottomEdge = bullet.top + bullet.height;
    
    const interactableLeftEdge = interactable.left;
    const interactableRightEdge = interactable.left + interactable.width;
    const interactableTopEdge = interactable.top; 
    const interactableBottomEdge = interactable.top + interactable.height;
    
    if (
        bulletLeftEdge < interactableRightEdge &&
        bulletRightEdge > interactableLeftEdge &&
        bulletTopEdge < interactableBottomEdge &&
        bulletBottomEdge > interactableTopEdge
    ) {
        bullet.destroy();
        interactable.destroy();
        interactable.handleBullet();
    }
}

// Crashtest and crashbullet functions are similar, you could refactor them into one function that takes an additional argument to determine if it's a bullet or player crash

/* Audio Functions  */

const bgSound = document.getElementById('bg-sound');

function playBgSound() {
    bgSound.currentTime = 0; 
    bgSound.play();
}

function pauseBgSound() {
    bgSound.currentTime = 0; 
    bgSound.pause();
}

const shootSound = document.getElementById('shoot-sound');

function playShootSound() {
    shootSound.currentTime = 0; 
    shootSound.play();
}

const crashSound = document.getElementById('crash-sound');

function playCrashSound() {
    crashSound.currentTime = 0; 
    crashSound.play();
}

const chingSound = document.getElementById('ching-sound');

function playChingSound() {
    chingSound.currentTime = 0; 
    chingSound.play();
}

const loseSound = document.getElementById('lose-sound');

function playLoseSound() {
    loseSound.currentTime = 0; 
    loseSound.play();
}


/* GAME OVER RESTART GAME */
function restartGame() {
    game.gameOverScreen.style.display = "none";
    game = new Game();
    player = new Player('#player', 5);
    requestAnimationFrame(gameLoop);
}
  
const restartButtonElement = document.querySelector("#restart-game");
  
restartButtonElement.addEventListener("click", () => {
window.location.reload()
restartGame();
});
 

/* START GAME */
function startGame() {
document.getElementById('game-start').style.display = 'none'; // Hide the start screen
document.getElementById('how-screen').style.display = 'none'
bgSound.play();
game = new Game(); // Initialize the game
player = new Player('#player', 5); // Initialize the player
requestAnimationFrame(gameLoop); // Start the game loop
}

const startButtonElement = document.getElementById('start-game');
startButtonElement.addEventListener('click', startGame);

const start2ButtonElement = document.getElementById('start-game2');
start2ButtonElement.addEventListener('click', startGame);

function displayHowToPlay() {
    document.getElementById('how-screen').style.display = 'flex';
    document.getElementById('game-start').style.display = 'none';
};

const howButtonElement = document.getElementById('how-to-play');
howButtonElement.addEventListener('click', displayHowToPlay);

function closeHowToPlay() {
    document.getElementById('how-screen').style.display = 'none';
    document.getElementById('game-start').style.display = 'flex';
};

const closeButtonElement = document.getElementById('close-button');
closeButtonElement.addEventListener('click', closeHowToPlay);

function applyShake() {
    console.log("Apply Shake");
    game.gameArea.classList.add("shake");

    setTimeout(() => {
        game.gameArea.classList.remove("shake");
    }, 300);
}



