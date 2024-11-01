# Sugar Swoop
Game Link: https://karajelley.github.io/sugar-swoop/

## Description

Single player game. The player has the ability to move up, down, left and right. The player must dodge or shoot the enemies that are coming from the bottom of the screen. The player can also collect sweets for points and hearts (lives) to stay in the game longer. 

## Classes

### Character

This class will have the following attributes:

- x: the x-axis position of the character (horizontal axis)
- y: the y-axis  position of the character (vertical axis)
- speed: the speed of the character
- width: the width of the character
- height: the height of the character
- element: the html element

This class will have two extendend classes:

#### Player

The player has the ability to move up, down, left and right. The player will also have the ability to shoot peppermint bullets at the candy bandits to make the dissapear. 

#### Interactable 

The game will have two types of interactables enemies and power-ups. 

##### Enemy

The game will have three different types of enemies.
-Cotten Candy Clouds: Slows the player down and removes points
-Candy Lightning Bolts: Slows the player down significantly and removes points
-Candy Bandits: Cause the player to lose a life

##### PowerUps
The game will have three different types of powerups.
-Candy Coins: Gives the player 10 points
-Lollipop Tokens: Gives the player 5 points
-Candy Hearts: Gives players an extra life

### Game

The game class controls all the game logic. It will have the following attributes:

- isgameover: a boolean that will be true when the game is over
- player: the player object
- interactables: an array of interactables
- bullets: an array of bullets
- lives: the number of lives the player has
- gameArea: the html element that will contain the game

## Scoring Points

The Player can gain points by collecting candy. They can also gain lives by collecting hearts. 

## Tasks

- Create the html with the game area and the player
- Create player class and methods
- Create interactables class and methods
- Create bullet class and methods
- Create gamae logic
- Style characters, game area and gameplay.




