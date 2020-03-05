export class AnimatedObject {
  constructor(frames, dx, dy, dw, dh, s, state, al, as) {
    this.frames = frames;
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.s = s;
    this.state = state;
    this.elapsed = 0;
    this.al = al;
    this.as = as;
    this.framesQuantity = this.frames[this.state].frames.length;
    this.frame = 0;
  };
  draw() {
    context.drawImage(
      this.frames[this.state].frames[this.frame],
      0,
      0,
      this.frames[this.state].sw,
      this.frames[this.state].sh,
      this.dx,
      this.dy,
      this.dw,
      this.dh
    );
    if (this.elapsed >= this.al) {
      this.frame += 1;
      this.frame = this.frame >= this.framesQuantity ? 0 : this.frame;
      this.elapsed = 0;
    }
    this.elapsed += this.as;
  };
  //move() {};
};