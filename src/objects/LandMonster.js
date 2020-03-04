

export class LandMonster extends AnimatedObject {
  move() {
    if(crocoMascot.drawable()) {
      this.dx -= crocoMascot.vx;
    }
    if(tigerMascot.drawable()) {
      this.dx -= tigerMascot.vx;
    }
  };
  drawable() {
    return this.dx > 0 && this.dx + this.dw < height;
  }
  impact() { //
    if(this.drawable()) {
      for(let q = tiles.length - 1; q >= 0; q -= 1) {
        if(tiles[currentLevelIndex][q].drawable) {
          if(collision(this, tiles[currentLevelIndex][q]) == 'left' ||
            collision(this, tiles[currentLevelIndex][q]) == 'right') {
            this.vx *= -1;
          } else {
            continue;
          }
        }
      }
    }
  };
  look() {
    if(this.drawable()) {
      if(crocoMascot.drawable()) {
        if(this.dx > crocoMascot.dx) {
          this.state = 'idleL';
        }
        if(this.dx < crocoMascot.dx) {
          this.state = 'idleR';
        }
      }
      if(tigerMascot.drawable()) {
        if(this.dx > tigerMascot.dx) {
          this.state = 'idleL';
        }
        if(this.dx < tigerMascot.dx) {
          this.state = 'idleR';
        }
      }
    }
  };
};