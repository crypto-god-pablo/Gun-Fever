  //handles things that happen in response to button presses
  function userInput() {
    //controls for player1
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    var wPressed = false;
    var sPressed = false;
    var upPressed = false;
    var downPressed = false;
    var spacePressed = false;
    var shiftPressed = false;

    function keyDownHandler(event){
      if(event.keyCode == 87) {
        wPressed = true;
      }
      else if(event.keyCode == 83) {
        sPressed = true;
      }
      if(event.keyCode == 38) {
        upPressed = true;
      }
      else if(event.keyCode == 40) {
        downPressed = true;
      }
      if(event.keyCode == 32) {
        spacePressed = true;
      }
      if(event.keyCode == 16) {
        shiftPressed = true;
      }
    }

    function keyUpHandler(event){
      if(event.keyCode == 87) {
        wPressed = false;
      }
      else if(event.keyCode == 83) {
        sPressed = false;
      }
      if(event.keyCode == 32) {
        spacePressed = false;
      }
      if(event.keyCode == 38) {
        upPressed = false;
      }
      else if(event.keyCode == 40) {
        downPressed = false;
      }
      if(event.keyCode == 16) {
        shiftPressed = false;
      }
    }

    if (wPressed) {
      player1.VY += 5;
    }
    else if (sPressed) {
      player1. VY -= 5;
    }
    else {
      player1.VY = 0;
    }

    //firing player1's gun
    if (spacePressed) {
      player1.GUN.fire();
    }

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
