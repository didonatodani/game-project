class Player extends Character {
  constructor(element, speed) {
    super(element, speed);
    this.top = (game.height / 2) - (this.element.offsetHeight / 2); 
    this.left = (game.width / 2) - (this.element.offsetWidth / 2); 

    this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
    this.height = this.element.offsetHeight; // Use offsetHeight to get the height

    this.updatePosition(); // Set initial position
    }

    move() {
        switch (this.direction) {
            case "up":
              if (this.top <= 0) {
                this.top = 0; // we make sure the player stays at position top 0 and not at -10...
              } else {
                this.top -= this.speed;
              }
              break;
            case "down":
              if (this.top >= game.height - this.height) {
                this.top = game.height - this.height;
              } else {
                this.top += this.speed;
              }
              break;
            case "left":
              if (this.left <= 0) {
                this.left = 0;
              } else {
                this.left -= this.speed;
              }
              break;
            case "right":
              if (this.left >= game.width - this.width) {
                this.left = game.width - this.width;
              } else {
                this.left += this.speed;
              }
              break;
          }

          this.updatePosition(this.element); // Update the player's position on the screen
    }
}

// we create the new player to keep track of all the properties
let player = new Player('#player', 5);