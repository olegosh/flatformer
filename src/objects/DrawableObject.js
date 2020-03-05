export class DrawableObject {
  constructor(src, sx, sy, sw, sh, dx, dy, dw, dh, s) {
    this.src = src;
    this.sx = sx;
    this.sy = sy;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.s = s;
    this.drawable = true;
  };
  draw() {
    if (this.drawable) {
      context.drawImage(
        this.src,
        this.sx,
        this.sy,
        this.sw,
        this.sh,
        this.dx,
        this.dy,
        this.dw,
        this.dh
      );
    }
  };
  move() {
    //
  };
};