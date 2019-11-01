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

  //method to draw component
  draw() {
      ctx.save();
      ctx.beginPath();
      ctx.translate(x + w/2, y + h/2);
      ctx.rotate(A*math.PI / 180);
      ctx.rect(-w/2, -h/2, w, h);
      ctx.fillStyle = C;
      ctx.fill();
      ctx.restore();
    }
    ctx.rotate(x + w/2, y + h/2);

    //draws rectangle (or an image, if you decide to add pictures) at coords x,y; rotated A; with height H and width W; and with color C
  }
}
