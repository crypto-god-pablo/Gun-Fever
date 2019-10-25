/*the game which is currently running (or was running, but is now over); this is
null at the beginning of the program*/
Game currentGame;
//Canvas and basic variables of canvas
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var width = cvs.getAttribute('width');
var height = cvs.getAttribute('height');

//button variables (0: singleplayer button    1: multiplayer button)
var buttonX = [250, 250];
var buttonY = [350, 175];
var buttonWidth = [200, 200];
var buttonHeight = [100, 100];

var mouseX; //mouse X position
var mouseY; //mouse Y position
var time = 0.0; //time variable
var fadeId = 0; //initialize fadeId

//draws the menu screen
void drawMenu() {
  var bgImage = new Image(); //background
  var titleImage = new Image(); //title
  var singleplayerImage = new Image(); //singleplayer
  var multiplayerImage = new Image(); //multiplayer

  bgImage.src = "Images/Background.png"; //image for background
  titleImage.src = "Images/Title.png"; //image for title
  singleplayerImage.src = "Images/singleplayerButton.png"; //image for singleplayer button
  multiplayerImage.src = "Images/MultiplayerButton.png"; //image for multiplayer button

  context.drawImage(bgImage, 0, 0); //draws background
  context.drawImage(titleImage, 50, -10); //draws title
  context.drawImage(singleplayerImage, buttonX[0], buttonY[0]); //draws singleplayer button
  context.drawImage(multiplayerImage, buttonX[1] buttonY[1]); //draws multiplayer button

  //Fades screen
  fadeId = setInterval("fadeOut()", 1000/frames);
  clearInterval(timerId);
  canvas.removeEventListener("mousemove", checkPos);
  canvas.removeEventListener("mouseup", checkClick);

}

//Function to check click
function checkClick(mouseEvent){
    for(i = 0; i < buttonX.length; i++){
        if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
            if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){

            }
        }
    }
}

//Function that fades screen
function fadeOut(){
    context.fillStyle = "rgba(0,0,0, 0.2)";
    context.fillRect (0, 0, width, height);
    time += 0.1;
    if(time >= 2){
        clearInterval(fadeId);
        time = 0;
        timerId = setInterval("update()", 1000/frames);
        canvas.addEventListener("mousemove", checkPos);
        canvas.addEventListener("mouseup", checkClick);
    }
}

/*Checks if user clicked singleplayer or multiplayer*/
canvas.addEventListener('click', function(evt) {
    var mousePos = checkPos(evt);
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
canvas.addEventListener("mousemove", checkPos);
function checkPos(mouseEvent){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop;
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
