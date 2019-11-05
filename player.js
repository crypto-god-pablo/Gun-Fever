
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
    ctx.fillStyle = "#FF0000";
    ctx.rect(10,10,140,25);
    ctx.rect(width - 150,10,140,25);
    ctx.stroke();
    ctx.fillRect(10,10,(PLAYER1.hp/100)*140, 25);
    ctx.fillRect(width - 150,10,(PLAYER1.hp/100)*140, 25);
  }

  function drawScore() {
    //draws a player's score (number of kills)
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Player 1 Score: " + PLAYER2.deathCount, width/2 - 65, 50);
    ctx.fillText("Player 2 Score: " + PLAYER1.deathCount, width/2 - 65, 75);
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
