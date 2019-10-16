class Bullet extends Component {
  int DAMAGE;

  //the constructor takes bullet speed, damage, and the angle at which the bullet is fired as parameters
  constructor(int X, int Y, int S, int D, double A) {
    super(X, Y, bulletwidth, bulletheight, bulletcolor);
    VX = S*cosine(A);
    VY = S*sine(A);
    DAMAGE = D;
  }
}
