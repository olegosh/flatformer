import { DrawableObject } from "./DrawableObject";

export class BackgroundObject extends DrawableObject {
  draw() {
    super.draw();
    context.drawImage(
      this.src,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.dx + this.dw,
      this.dy,
      this.dw,
      this.dh
    );
    context.drawImage(
      this.src,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.dx - this.dw,
      this.dy,
      this.dw,
      this.dh
    );
  };
  move() {
    if(crocoMascot.drawable()) {
      this.dx += this.s * -crocoMascot.vx / 2;
    }
    if(tigerMascot.drawable()) {
      this.dx += this.s * -tigerMascot.vx / 2;
    }
    if(this.dx + this.dw <= 0 || this.dx >= width) {
      this.dx = 0;
    }
  };
};