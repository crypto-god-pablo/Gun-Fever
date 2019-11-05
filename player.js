
  function updatePlayer() {
    GUN.VX = this.VX; //moves gun with player
    GUN.VY = this.VY;

    if (this.hp <= 0) {  //checks if the player is alive
      this.alive = false;
    }
    GAME.updateGame(); //updates player position
    GUN.updateGun(); //updates gun position
  }

  function drawHealthBar() {
    //draws health bar for player
  }

  function drawScore() {
    //draws a player's score (number of kills)
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText("Player 1 Score: " + PLAYER2.deathCount, canvas.getBoundingClientRect().right - 75, canvas.getBoundingClientRect().top - 75);
    ctx.fillText("Player 2 Score: " + PLAYER1.deathCount, canvas.getBoundingClientRect().right - 75, canvas.getBoundingClientRect().top - 110);
    ctx.restore();
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
