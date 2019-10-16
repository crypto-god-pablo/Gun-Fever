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

  //moves and controls the CPU player based on CPU_DIFFICULTY somehow
  void controlCPU() {
    //moves the CPU (changes player2.VY)
    //aims the CPU's gun (changes player2.GUN.A)
    //fires the CPU's gun (calls player2.GUN.fire()) every so often
  }

  void otherTasks() {
    //...
    controlCPU();
    //...
  }

  void winScreen() {
    //displays a win message for a few seconds, then ends the game
    this.active = false;
  }

  //waht happens after a new round begins
  void newRoundTasks() {
    super.newRoundTasks(); //revives both players
    if (player1.SCORE > gunArray.length) { //if the player has killed the CPU with all the guns
      winScreen(); //go to the win screen
    }
    player1.GUN = gunArray[SCORE]; //gives player 1 the gun corresponding to his score
    CPU_DIFFICULTY = _____; //incrases the CPU's CPU_DIFFICULTY
    player2.HP = _____; //adjust the CPU's health based on difficulty
    player2.GUN = ______; //adjusts the CPU's gun'based on difficulty
  }
}
