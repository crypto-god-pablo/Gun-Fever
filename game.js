  const MOVEMENT_SPEED = 3;
  var player1Image = new Image();
  var player2Image = new Image();

  //handles things that happen in response to button presses
  function userInput() {}

  //handles things that need to happen every update
  function otherTasks() {}
  //checks if bullets collide with players or go outside the screen bounds
  function bulletCollisions(){
  }

  //updates all players and bullets
  function updateComponents() {
    player1.update();
    player2.update();
  }

  //all of the things that need to happen after a player dies and a new game is started
  function newRoundTasks() {
    PLAYER1.revive(); //brings both players back to life
    PLAYER2.revive();
  }

  //the method that gets called when the game is paused
  function pauseScreen() {
    //draw message in center of screen saying: "Would you like to continue? Press Y or N."
    if (keyPressed) {
      if (key == 'Y') { //if Y is pressed, unpause the game
        GAME.paused = false;
        if (!player1.ALVE || !player2.ALIVE) { //if one of the players is dead and the game is resumed, that means that it must be a new round
          newRoundTasks();
        }
      } else if (key == 'N') { //if N is pressed, set active to false and unpause the
        GAME.active = false;
        GAME.paused = false;
      }
    }
  }


  //checks if the game gets paused by pressing 'P' on the keyboard
  function pauseCheck() {
    if (keyPressed()) {
      if (key == 'P') { //if P is pressed, pause the game
        GAME.paused = true;
      }
    }
  }


  //checks to see if one of the players died
  function deathCheck() {
    if (!PLAYER1.alive || !PLAYER2.alive) {
      if (PLAYER1.alive) {  //increases the score of the winning player
        PLAYER1.alive = false;
        PLAYER1.deathCount++;
      } else {
        PLAYER2.alive = false;
        PLAYER2.deathCount++;
      }
      GAME.paused = true;
    }
  }

  //the method which updates the game
  function updateGame() {
    if (!this.paused && this.active) {
      this.userInput();
      this.otherTasks();
      this.bulletCollisions();
      this.updateComponents();
      this.pauseCheck()
      this.deathCheck();
    } else if (this.active) {
      this.pauseScreen();
    }
  }

  //draws all the components and maybe a background image
  function drawGame() {
    ctx.clearRect(0, 0, width, height);
    player1Image.src = "sprites/player1.png";
    player2Image.src = "sprites/player2.png";
    player1Image.onload = function(){
      ctx.drawImage(player1Image, PLAYER1.x, PLAYER1.y);
    }
    player2Image.onload = function(){
      ctx.drawImage(player2Image, PLAYER2.x, PLAYER2.y);
    }
    //maybe draws a background image first
    gameLoop();
  }

  function gameLoop() {
    if(!GAME.paused && GAME.active){
      if(CONTROLS.firstPlayer.up && PLAYER1.y > 0) {
        PLAYER1.y -= MOVEMENT_SPEED;
      }
      else if(CONTROLS.firstPlayer.down && PLAYER1.y < height) {
        PLAYER1.y += MOVEMENT_SPEED;
      }
      if(GAME.multiplayer)
      {
        if(CONTROLS.secondPlayer.up && PLAYER2.y > 0) {
          PLAYER2.y -= MOVEMENT_SPEED;
        }
        else if(CONTROLS.secondPlayer.down && PLAYER2.y < height) {
          PLAYER2.y += MOVEMENT_SPEED;
        }
      }
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(player1Image, PLAYER1.x, PLAYER1.y);
      ctx.drawImage(player2Image, PLAYER2.x, PLAYER2.y);
    }
    else{
      ctx.font = "30px Arial";
      ctx.fillText("Game Over      Level " + GAME.level, 135, 200);
    }

    window.requestAnimationFrame(gameLoop);
  }
