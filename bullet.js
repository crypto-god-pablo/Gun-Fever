class Bullet extends Component {
  DAMAGE;

  //the constructor takes bullet speed, damage, and the angle at which the bullet is fired as parameters
  constructor(X, Y, S, D, A) {
    super(X, Y, bulletwidth, bulletheight, bulletcolor);
    VX = S*cosine(A);
    VY = S*sine(A);
    DAMAGE = D;
  }
}
