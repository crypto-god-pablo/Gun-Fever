  //player 1 gun
  GUN1 = {
    rechargeTime : ______, //same thing as reload time, analagous to fire rate
    bulletDamage : ______,
    bulletSpeed : ______,
    reloading : false, //whether the gun is still "reloading" or in between shots
    lastTime : ______ //the absolute time (in milliseconds) that the gun last fired at
  };
  //player 2 gun
  GUN2 = {
    rechargeTime : ______, //same thing as reload time, analagous to fire rate
    bulletDamage : ______,
    bulletSpeed : ______,
    reloading : false, //whether the gun is still "reloading" or in between shots
    lastTime : ______ //the absolute time (in milliseconds) that the gun last fired at
  };

  function actuallyFire() {
    //ceates a new bullet object and adds it to the current game's list of bullets
    //this new bullet is created at the position of the gun, has a speed and damage determined by the gun, and is fired in the direction that the gun is pointing (angle = A)
    const newBull = new Bullet(this.X, this.Y, BULLET_SPEED, BULLET_DAMAGE, this.A)
    GAME.bullets.add(newBull);
  }


  //NOTE: systemTime() should return the literal time (since program start) in milliseconds or seconds if possible. This will allow us to make a sort-of reload timer

  function fire() { //checks if the gun is reloading or not
    if (!this.reloading) { //if the gun hasn't fired yet
      actuallyFire(); //acutally fire a bullet
      this.reloading = true; //the gun is now RELOADING
      this.lastTime = systemTime(); //the current time
    }
  }

  function updateGun() {
    GAME.updateGame();
    if (systemTime() = this.lastTime + this.rechargeTime) { //if the recharge time has passed, stop reloading
      this.reloading = false;
    }
  }



}
