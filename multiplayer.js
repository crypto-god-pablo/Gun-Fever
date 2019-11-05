  function userInput2() {
    //controls for player2
    //player2's velocity should be faster than player1's
    if (upPressed) {
      player2.VY += 5
    } else if (downPressed) {
      player2.VY -= 5;
    } else {
      player2.VY = 0;
    }

    //firing player2's Gun
    if (shiftPressed) {
      player2.GUN.fire();
    }
  }

  //controlling the angle of player1's gun
  if (mouse is moved somehow) {
    player1.GUN.A = ___

  //handles things that need to happen every update
  function otherTasks() {}

}
