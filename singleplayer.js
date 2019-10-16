class Singleplayer extends Game {
  double CPU_DIFFICULTY; //probably a number from 0 to 1 representing % acc
  GUN[] gunArray;

  constructor() {
    super();
    //....
    CPU_DIFFICULTY = ____;
    gunArray = {new Gun(...), new Gun(...), ...}; //array of all the guns
    player1 = new Player(....);
    player1.GUN = gunArray[0];
  }

  void userInput() {
    //only controls player1
  }

  void increaseComputerDifficulty() {
    //
  }

  //moves and controls the CPU player based on CPU_DIFFICULTY somehow
  void controlCPU() {
    //moves the CPU (changes player2.VY)
    //aims the CPU's gun (changes player2.GUN.A)
    //fires the CPU's gun (calls player2.GUN.fire()) every so often
  }

  void otherTasks() {
    //...
    controlCPU();
  }

  void deathCheck() {
    super.deathCheck();
    if (!paused && (!player1.ALIVE || !player2.ALIVE)) { //if the game is resumed, make both players alive again
      player1.ALIVE = true;
      player2.ALIVE = true;
      increaseComputerDifficulty();
      player1.GUN = gunArray[player1.SCORE]; //sets the player's gun to the next gun
    }
  }
}
