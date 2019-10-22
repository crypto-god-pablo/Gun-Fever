class Game {
  //whether the game is still going or not
  bool active;

  //whether the game has been paused or not
  bool paused;

  //a game includes the two player objects
  Player player1;
  Player player2;

  //all the bullet objects which are currently in existence
  List<Bullet> bullets;

  //the constructor
  constructor(Player player1, Player player2) {
    this.player1 = player1;
    this.player2 = player2;
    active = true;
    paused = false;
    bullets = new List<Bullet>();
  }


  //handles things that happen in response to button presses
  void userInput() {}

  //handles things that need to happen every update
  void otherTasks() {}

  //checks if bullets collide with players or go outside the screen bounds
  void bulletCollisions() {
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
  void updateComponents() {
    player1.update();
    player2.update();
    for (Bullet b : bullets) {
      b.update();
    }
  }

  //all of the things that need to happen after a player dies and a new game is started
  void newRoundTasks() {
    player1.revive(); //brings both players back to life
    player2.revive();
  }

  //the method that gets called when the game is paused
  void pauseScreen() {
    //draw message in center of screen saying: "Would you like to continue? Press Y or N."
    if (keyPressed) {
      if (key == 'Y') { //if Y is pressed, unpause the game
        paused = false;
        if (!player1.ALVE || !player2.ALIVE) { //if one of the players is dead and the game is resumed, that means that it must be a new round
          newRoundTasks();
        }
      } else if (key == 'N') { //if N is pressed, set active to false and unpause the
        active = false;
        paused = false;
      }
    }
  }


  //checks if the game gets paused by pressing 'P' on the keyboard
  bool pauseCheck() {
    if (keyPressed()) {
      if (key == 'P') { //if P is pressed, pause the game
        paused = true;
      }
    }
  }


  //checks to see if one of the players died
  bool deathCheck() {
    if (!player1.ALIVE || !player2.ALIVE) {
      if (player1.ALIVE) {  //increases the score of the winning player
        player1.SCORE++;
      } else {
        player2.SCORE++;
      }
      paused = true;
    }
  }

  //the method which updates the game
  void update() {
    if (!paused && active) {
      userInput();
      otherTasks();
      bulletCollisions();
      updateComponents();
      pauseCheck()
      deathCheck();
    } else if (active) {
      pauseScreen();
    }
  }

  //draws all the components and maybe a background image
  void draw() {
    //maybe draws a background image first
    player1.draw();
    player2.draw();
    for (Bullet b : bullets) {
      b.draw();
    }
  }
}
