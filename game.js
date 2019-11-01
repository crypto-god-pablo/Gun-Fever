//whether the game is still going or not
  PLAYER1 = {
    hp : 100,
    score : 0,
    alive : true,
    deathCount : 0
  };
  PLAYER2 = {
    hp : 100,
    score : 0,
    alive : true,
    deathCount : 0
  };
  GAME = {
    active : false,
    paused : false,
    bullets : [],
    multiplayer : false
  };

  //handles things that happen in response to button presses
  function userInput() {}

  //handles things that need to happen every update
  function otherTasks() {}
  //checks if bullets collide with players or go outside the screen bounds
  function bulletCollisions(){
    for (Bullet b : bullets) {  //goes trough the list of bullets and checks each of them
      if (b goes out of bounds) {
        bullets.remove(b); //removes that bullet from the list; note: b could be anywhere in the list, and i don't think remove is a real function
      }
      if (b collides with player1) {
        player1.HP -= b.damage; //deals damage to player1 and removes bullet from game
        bullets.remove(b);
      }
      if (b collides with player2) {
        player2.HP -= b.damage; //deals damage to player2 and removes bullet from game
        bullets.remove(b)
      }
    }
  }

  //updates all players and bullets
  function updateComponents() {
    player1.update();
    player2.update();
    for (Bullet b : bullets) {
      b.update();
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
        PLAYER2.alive = false
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
    //maybe draws a background image first
    player1.draw();
    player2.draw();
    for (Bullet b : bullets) {
      b.draw();
    }
  }
}
