import { BackgroundObject } from './BackgroundObject';
import { options } from '../options';

const width = options.width;

export class CloudObject extends BackgroundObject {
  move() {
    this.dx += this.s;
    if (this.dx >= width) {
      this.dx = 0;
    }
  };
};