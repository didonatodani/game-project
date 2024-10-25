# MY GAME - MEMORY

## Description:

Classic memory game where the player must find the matching pairs by clicking on the cards displayed on the board. At the start of the game, the cards will be briefly revealed for 30 seconds. The objective of the game is to find all pairs before the timer runs out at 3 minutes. The player starts with 4 lives.

During gameplay, after the 1-minute and 2-minute marks, any unmatched cards will be randomly swapped without being shown to the player.

If the player selects a mismatched pair, they will lose one life.

The game ends when the player matches all pairs, loses all lives by choosing incorrect pairs, or when the time runs out.

## Classes:

A class will be created for the playing cards, containing the following attributes:

- id: unique identifier for each card
- img: the image displayed on the card (each image will appear on two cards)
- width: width of the image
- height: height of the image

### POSSIBLE: The playing cards may be stored in an array of objects.

## Key Elements On Screen:

- Game board
- Array of card objects
- Timer display
- Lives counter
- "Game Over" sign
- "Swapping" sign
- Animated cursor

## Game Class (responsible for game logic):

### Attributes and methods:
- isGameOver: boolean to indicate if the game has ended
- cards: array of card objects
- turnCardOver: method to flip cards
- lives: integer representing the player’s remaining lives
- timer: countdown timer
- gameArea: the playable area on screen
- cursor (optional)
- shuffleCards: method to shuffle cards at game start and at the 1-minute and 2-minute marks

### Backlog Features:

- Swapping animation for card shuffling
- "Shake" animation for incorrect matches
- Countdown timer turning red when close to a card swap or game end
- Heart animations when losing a life
- Display of matched pairs on the side of the board

-----------------------------------------------

## Game Logic:

1) Display a "Start" button above the game board, with lives set to 4 and the timer at 3:00, along with brief instructions.
2) Cards are shuffled and shown in their positions for 30 seconds.
3) After 30 seconds, cards are flipped over, and the timer starts counting down.
4) The player selects two cards: a. If the pair is incorrect: a "Wrong" message appears, one life is removed, and the cards are flipped back over. b. If the pair is correct: a "Yay!" message appears, and the cards remain face-up.
5) At the 1-minute and 2-minute marks, unmatched cards are reshuffled randomly without revealing them to the player.
6) If the player runs out of lives, they lose the game.
7) If the player matches all pairs, a "You did it!" message appears.
8) If time runs out, a "Game Over" message appears, along with a "Try Again" button on the board.