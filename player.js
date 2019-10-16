class Player extends Component {
  Gun GUN;
  int HP;
  int SCORE;
  bool ALIVE;

  constructor(____) {
    ____
  }

  void update() {
    GUN.VX = this.VX; //moves gun with player
    GUN.VY = this.VY;

    if (HP <= 0) {  //checks if the player is alive
      ALIVE = false;
    }
    super.update(); //updates player position
    GUN.update(); //updates gun position
  }

  void drawHealthBar() {
    //draws health bar for player
  }

  void drawScore() {
    //draws a player's score (number of kills)
  }

  void draw() {
    super.draw();
    GUN.draw();
    drawHealthBar();
    drawScore();
  }

  //method to bring the playre back to full health, called usually when a new round beings
  void revive() {
    HP = ____;
    ALIVE = true;
  }
}
