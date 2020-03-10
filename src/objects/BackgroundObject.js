import { DrawableObject } from './DrawableObject';
import { options } from '../options';

export class BackgroundObject extends DrawableObject {
  draw() {
    super.draw();
    options.context.drawImage(
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
    options.context.drawImage(
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
    const crocoMascot = options.crocoMascot;
    const tigerMascot = options.tigerMascot;
    const width = options.width;
    if (crocoMascot.drawable()) {
      this.dx += this.s * -crocoMascot.vx / 2;
    }
    if (tigerMascot.drawable()) {
      this.dx += this.s * -tigerMascot.vx / 2;
    }
    if (this.dx + this.dw <= 0 || this.dx >= width) {
      this.dx = 0;
    }
  };
};