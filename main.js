/*the game which is currently running (or was running, but is now over); this is
null at the beginning of the program*/
Game currentGame;
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
//button for singleplayer
var button1 = {
  x:250,
  y:350,
  width:200,
  height:100
};
//button for multiplayer
var button2 = {
  x:250,
  y:175,
  width:200,
  height:100
};

//draws the menu screen
void drawMenu() {
}

//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

/*Checks if user clicked singleplayer or multiplayer*/
canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (isInside(mousePos, button1)) {
        singleplayerClicked();
    }
    else{
        multiplayerClicked();
    }
}, false);

//returns true if the mouse most recently clicked the singleplayer button
bool singpleplayerClicked() {
  returns true;
}

//return true if the mouse most recently clicked the multiplayer button
bool multiplayerClicked() {
  return true;
}

//function to get mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

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
