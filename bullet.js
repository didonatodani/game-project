 class Bullet extends Character {
    constructor(player) {
        const element = document.createElement('div');
        element.className = 'bullet'; 
        super(element, 10); 
        
        // Position bullet at the bottom of the player
        this.left = player.left + (player.width / 2) - (this.element.offsetWidth / 2);
        this.top = player.top + player.height;
        
        // Add the bullet to the game area
        game.gameArea.appendChild(this.element);
        game.bulletArray.push(this);
        
        this.width = this.element.offsetWidth;  
        this.height = this.element.offsetHeight; 
    }

    move() {
      console.log("Bullet moving!")
        this.top += this.speed; 
        this.updatePosition(); 

        // Destroy if it goes off-screen
        if (this.top >= game.height) {
            this.destroy();
        }
    }

    destroy() {
      console.log("deleting bullet");
    
        this.element.remove();

      
        const index = game.bulletArray.indexOf(this);
        if (index > -1) {
            game.bulletArray.splice(index, 1);
        }
    }
}


function createBullet() { // this can also be implemented in the player class
  if (isShooting) {
      new Bullet(player);
  }
}
