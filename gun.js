class Gun extends Component {
  int RECHARGE_TIME; //same thing as reload time, analagous to fire rate
  int BULLET_DAMAGE;
  int BULLET_SPEED;
  bool RELOADING; //whether the gun is till "reloading" or in between shots
  int LAST_TIME; //the absolute time (in milliseconds) that the gun last fired at

  constructor(int RT, int BD, int BS) {
    RECHARGE_TIME = FT;
    BULLET_DAMAGE = BD;
    BULLET_SPEED = BS;
    RELOADING = false;
  }

  void actuallyFire() {
    //ceates a new bullet object and adds it to the current game's list of bullets
    //this new bullet is created at the position of the gun, has a speed and damage determined by the gun, and is fired in the direction that the gun is pointing (angle = A)
    currentGame.bullets.add(new Bullet(this.X, this.Y, BULLET_SPEED, BULLET_DAMAGE, this.A));
  }

  void fire() { //checks if the gun is reloading or not
    if (!RELOADING) { //if the gun hasn't fired yet
      acutallyFire(); //acutally fire a bullet
      RELOADING = true; //the gun is now RELOADING
      LAST_TIME = systemTime(); //the current time
    }
  }

  void update() {
    super.update();
    if (systemTime() = LAST_TIME + RECHARGE_TIME) { //if the recharge time has passed, stop reloading
      RELOADING = false;
    }
  }



}
