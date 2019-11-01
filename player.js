Class Player{

  function updatePlayer(Player player) {
    GUN.VX = this.VX; //moves gun with player
    GUN.VY = this.VY;

    if (this.hp <= 0) {  //checks if the player is alive
      this.alive = false;
    }
    super.updateGame(); //updates player position
    GUN.updateGun(); //updates gun position
  }

  function drawHealthBar() {
    //draws health bar for player
  }

  function drawScore() {
    //draws a player's score (number of kills)
  }

  function draw() {
    //draws player at location
    GUN.draw();
    drawHealthBar();
    drawScore();
  }

  //method to bring the playre back to full health, called usually when a new round beings
  function revive() {
    hp = 100;
    alive = true;
  }
}
