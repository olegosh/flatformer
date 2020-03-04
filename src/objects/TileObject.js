import { DrawableObject } from "./DrawableObject";

export class TileObject extends DrawableObject {
  constructor(type, name, index, ...args) {
    super(...args);
    this.type = type;
    this.name = name;
    this.index = index;
    if(this.type == 'enemy') {
      enemies[this.index].push(
        new LandMonster(
          tilesImages[this.name].i,
          this.dx,
          this.dy,
          TIW / 4,
          TIH / 4,
          0,
          'idleL',
          random(500, 1000),
          random(20, 100)
        )
      );
    }
  };
  draw() {
    if(this.type !== 'enemy') {
      super.draw();
    } else {
      for(let q = 0; q < enemies[currentLevelIndex].length; q += 1) {
        enemies[currentLevelIndex][q].draw();
      }
    }
  };
  move() {
    if(crocoMascot.drawable()) {
      this.dx -= crocoMascot.vx;
    }
    if(tigerMascot.drawable()) {
      this.dx -= tigerMascot.vx;
    }
  };
};