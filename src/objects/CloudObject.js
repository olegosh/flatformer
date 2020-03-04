import { BackgroundObject } from "./BackgroundObject";

export class CloudObject extends BackgroundObject {
  move() {
    this.dx += this.s;
    if(this.dx >= width) {
      this.dx = 0;
    }
  };
};