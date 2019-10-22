class Multiplayer extends Game {


  constructor() {
    super(new Player(___), new Player(___));

  }

  //handles things that happen in response to button presses
  void userInput() {
    //controls for player1
    if (key pressed = W) {
      player1.VY = __
    } else if (key pressed = S) {
      player1. VY = -___
    } else {
      player1.VY = 0;
    }

    //controlling the angle of player1's gun
    if (mouse is moved somehow) {
      player1.GUN.A = ___
    }

    //firing player1's gun
    if (key press ___) {
      player1.GUN.fire();
    }

    //controls for player2
    //player2's velocity should be faster than player1's
    if (key pressed == up arrow) {
      player2.VY = ___
    } else if (key pressed == down arrow) {
      player2.VY = -____;
    } else {
      player2.VY = 0;
    }

    //firing player2's Gun
    if (key press ___) {
      player2.GUN.fire();
    }
  }

  //handles things that need to happen every update
  void otherTasks() {}

}
