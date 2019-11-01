  double CPU_DIFFICULTY = 0.5; //probably a number from 0 to 1 representing % acc

  function userInput() {
    //only controls player1
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    var wPressed = false;
    var sPressed = false;
    var spacePressed = false;
    function keyDownHandler(event){
      if(event.keyCode == 87) {
        wPressed = true;
      }
      else if(event.keyCode == 83) {
        sPressed = true;
      }
      if(event.keyCode == 32) {
        spacePressed = true;
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
    }
  }

  //moves and controls the CPU player based on CPU_DIFFICULTY somehow
  function controlCPU() {
    //moves the CPU (changes player2.VY)
    //aims the CPU's gun (changes player2.GUN.A)
    //fires the CPU's gun (calls player2.GUN.fire()) every so often
  }

  function otherTasks() {
    //...
    controlCPU();
    //...
  }
  function winScreen(game) {
    //displays a win message for a few seconds, then ends the game
    game.active = false;
  }

  //waht happens after a new round begins
  function newRoundTasks() {
    super.newRoundTasks(); //revives both players
    if (PLAYER2.deathCount > 6) { //if the player has killed the CPU with all the guns
      winScreen(); //go to the win screen
    }
    GUN1._________; //gives player 1 the gun corresponding to his score
    CPU_DIFFICULTY = _____; //incrases the CPU's CPU_DIFFICULTY
    player2.HP = _____; //adjust the CPU's health based on difficulty
    player2.GUN = ______; //adjusts the CPU's gun'based on difficulty
  }
}
