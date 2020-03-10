import { DrawableObject } from './DrawableObject';
import { options } from '../options';
import { LandMonster } from './LandMonster';
import { random } from '../utils';
import { tilesImages } from '../frames/tilesImages';

const enemies = options.enemies;
options.tilesImages = tilesImages;
const TIW = options.TIW;
const TIH = options.TIH;
const currentLevelIndex = options.currentLevelIndex;
const crocoMascot = options.crocoMascot;
const tigerMascot = options.tigerMascot;

export class TileObject extends DrawableObject {
  constructor(type, name, index, ...args) {
    super(...args);
    this.type = type;
    this.name = name;
    this.index = index;
    if (this.type == 'enemy') {
      options.transformToEnemies.push({
        name: this.name,
        dx: this.dx,
        dy: this.dy,
        dw: TIW / 4,
        dh: TIH / 4,
        s: 0,
        state: 'idleL',
        al: random(500, 1000),
        as: random(20, 100)
      });
      // enemies[this.index].push(
      //   new LandMonster(
      //     tilesImages[this.name].i,
      //     this.dx,
      //     this.dy,
      //     TIW / 4,
      //     TIH / 4,
      //     0,
      //     'idleL',
      //     random(500, 1000),
      //     random(20, 100)
      //   )
      // );
    }
  };
  draw() {
    if (this.type !== 'enemy') {
      super.draw();
    } else {
      for (let q = 0; q < enemies[currentLevelIndex].length; q += 1) {
        enemies[currentLevelIndex][q].draw();
      }
    }
  };
  move() {
    const crocoMascot = options.crocoMascot;
    const tigerMascot = options.tigerMascot;
    if (crocoMascot.drawable()) {
      this.dx -= crocoMascot.vx;
    }
    if (tigerMascot.drawable()) {
      this.dx -= tigerMascot.vx;
    }
  };
};