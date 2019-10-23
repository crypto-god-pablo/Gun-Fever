/*the game which is currently running (or was running, but is now over); this is
null at the beginning of the program*/
Game currentGame;

//draws the menu screen
void drawMenu() {}

/*returns true when the mouse is clicked; NOTE: I believe there is a better to
way to code this, using an Event*/
bool mouseClick() {}

//returns true if the mouse most recently clicked the singleplayer button
bool singpleplayerClicked() {}

//return true if the mouse most recently clicked the multiplayer button
bool multiplayerClicked() {}

//the main method which will loop continuously
void main() {
  while (true) {
    if (currentGame != null && currentGame.active) { //if a game is running
      currentGame.update(); //updates the game
      currentGame.draw(); //renders the game
    } else { //if no game is running
      drawMenu(); //renders the menu screen
      if (mouseClick()) { //if a menu button is pressed corresponding to a game, start a new game
        if (singleplayerClicked()) {
          currentGame = new Singleplayer();
        } else if (multiplayerClicked()) {
          currentGame = new Multiplayer();
        }
      }
    }
  }

}
