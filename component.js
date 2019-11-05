class Component {

  int X, Y;  //a component's position (coordinate)
  double VX, VY; //a component's velocity (how x changes each update)
  int W, H; //a component's size (width and height)
  color C; //the thing's color
  double A; //angle at which the object is rotate
  //Image image; //an image that is drawn in stead of a rectnagle

  constructor(int xpos, int ypos, double angle, int width, int height, color c ) {
    X = xpos;
    Y = ypos;
    W = width;
    H = height;
    C = c;
    A = angle;
  }

  //updates a component's position
  update() {
    X += VX;
    Y += VY;
  }

  //returns whether the component has collided with another component
  collidesWith(Component other) {
    bool X_Overlap = ___;
    bool Y_Overlap = ___;
    return X_Overlap && Y_Overlap;
  }

 
}
