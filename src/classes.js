class DrawableObject {
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
};

////////

class BackgroundObject extends DrawableObject {
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

class CloudObject extends BackgroundObject {
  move() {
    this.dx += this.s;
    if (this.dx >= width) {
      this.dx = 0;
    }
  };
};

////////

class TileObject extends DrawableObject {
  constructor(type, name, index, ...args) {
    super(...args);
    this.type = type;
    this.name = name;
    this.index = index;
    if (this.type == 'enemy') {
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
    if (this.type !== 'enemy') {
      super.draw();
    } else {
      for (let i = 0; i < enemies[currentLevelIndex].length; i += 1) {
        enemies[currentLevelIndex][i].draw();
      }
    }
  };

  move() {
    if (crocoMascot.drawable()) {
      this.dx -= crocoMascot.vx;
    }
    if (tigerMascot.drawable()) {
      this.dx -= tigerMascot.vx;
    }
  };
};

////////

class AnimatedObject {
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
    this.framesQ = this.frames[this.state].frames.length;
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
      this.frame = this.frame >= this.framesQ ? 0 : this.frame;
      this.elapsed = 0;
    }
    this.elapsed += this.as;
  };
};

////////

class Mascot extends AnimatedObject {
  constructor(type, ...args) {
    super(...args);
    this.type = type;
    this.vx = 0;
    this.vy = 0;
    this.jumping = false;
    this.canJump = false;
    this.dirR = true;
    this.dirL = false;
  };

  drawable() {
    return (this.dy > 0 && this.dy + this.dh < height + 16);
  };

  move() {
    if (this.drawable()) {
      if (keys[32]) { //space key
        if (!this.jumping && this.canJump) {
          this.jumping = true;
          this.canJump = false;
          this.vy = -this.s * 2;
          if (this.dirR) {
            this.state = 'jumpUR';
          } else if (this.dirL) {
            this.state = 'jumpUL';
          }
        }
      }
      if (keys[37]) { //left arrow key
        if (this.vx > -this.s) {
          this.vx -= 1;
          this.dirL = true;
          this.dirR = false;
          if (this.jumping) {
            if (this.dirR) {
              this.state = 'jumpUR';
            } else if (this.dirL) {
              this.state = 'jumpUL';
            }
          }
        }
      }
      if (keys[39]) { //right arrow key
        if (this.vx < this.s) {
          this.vx += 1;
          this.dirR = true;
          this.dirL = false;
          if (this.jumping) {
            if (this.dirR) {
              this.state = 'jumpUR';
            } else if (this.dirL) {
              this.state = 'jumpUL';
            }
          }
        }
      }
      if (!this.canJump && !this.jumping && this.vy > 0) {
        if (this.dirR) {
          this.state = 'jumpFR';
        } else if (this.dirL) {
          this.state = 'jumpFL';
        }
      }
      if (this.canJump && !this.jumping && moving && Math.abs(this.vx) > 0) {
        if (this.dirR) {
          this.state = 'runR';
        } else if (this.dirL) {
          this.state = 'runL';
        }
      }
      this.vx *= friction;
      this.vy += gravity;
      if (this.canJump) {
        this.vy = 0;
      }
      this.dy += this.vy;
    }
  };

  impact() {
    if (!this.drawable()) return;
    this.canJump = false;
    //collision detection
    for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
      let tile = tiles[currentLevelIndex][i];
      if (tile.drawable && tile.type == 'lava' ||
        tile.drawable && tile.type == 'water' ||
        tile.drawable && tile.type == 'enemy' ||
        tile.drawable && tile.type == 'door' ||
        tile.drawable && tile.type == 'greenKey' ||
        tile.drawable && tile.type == 'yellowKey' ||
        tile.drawable && tile.type == 'blueKey' ||
        tile.drawable && tile.type == 'mushroom' ||
        tile.drawable && tile.type == 'treasurechest' ||
        tile.drawable && tile.type == 'grass' ||
        tile.drawable && tile.type == 'flower' ||
        tile.drawable && tile.type == 'bush' ||
        tile.drawable && tile.type == 'tree' ||
        tile.drawable && tile.type == 'stone' ||
        tile.drawable && tile.type == 'spike') {
        continue;
      }
      if (tile.drawable) {
        let side = collision(this, tile);
        if (side == 'left' || side == 'right') {
          this.vx = -this.vx;
          this.jumping = false;
        } else if (side == 'bottom') {
          this.canJump = true;
          this.jumping = false;
          if (this.dirR && this.vx == 0) {
            this.state = 'idleR';
          } else if (this.dirL && this.vx == 0) {
            this.state = 'idleL';
          }
        } else if (side == 'top') {
          this.vy /= -2;
          if (this.dirR) {
            this.state = 'jumpFR';
          } else if (this.dirL) {
            this.state = 'jumpFL';
          }
        }
      }
    }
  };

  collide() {
    if (!this.drawable()) return;
    //enemies
    for (let i = enemies[currentLevelIndex].length - 1; i >= 0; i -= 1) {
      if (collider(this, enemies[currentLevelIndex][i])) {
        health -= 10;
      }
    }
    //crysal keys
    for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
      let tile = tiles[currentLevelIndex][i];
      if (!tile.drawable && tile.type !== 'greenKey' && tile.type !== 'yellowKey' && tile.type !== 'blueKey') {
        continue;
      } else if (tile.drawable && tile.type == 'greenKey' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(i, 1);
        crystalKeys.g = true;
      } else if (tile.drawable && tile.type == 'yellowKey' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(i, 1);
        crystalKeys.y = true;
      } else if (tile.drawable && tile.type == 'blueKey' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(i, 1);
        crystalKeys.b = true;
      }
    }
    //door
    for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
      let tile = tiles[currentLevelIndex][i];
      if (!tile.drawable) continue;
      if (tile.drawable && tile.type !== 'door') continue;
      if (tile.drawable && tile.type == 'door' && collider(this, tile)) {
        if (crystalKeys.g && crystalKeys.y && crystalKeys.b) {
          currentLevelIndex += 1;
          if (currentLevelIndex == maps.length) {
            currentLevelIndex = 0;
          }
          setStage(levels);
        } else {
          info = true;
        }
      }
    }
    //mushrooms
    for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
      let tile = tiles[currentLevelIndex][i];
      if (!tile.drawable) continue;
      if (tile.drawable && tile.type !== 'mushroom') continue;
      if (tile.drawable && tile.type == 'mushroom' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(i, 1);
        //change characters
        [crocoMascot.dx, tigerMascot.dx] = [tigerMascot.dx, crocoMascot.dx];
        [crocoMascot.dy, tigerMascot.dy] = [tigerMascot.dy, crocoMascot.dy];
      }
    }
    //treasurechests
    for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
      let tile = tiles[currentLevelIndex][i];
      if (!tile.drawable) continue;
      if (tile.drawable && tile.type !== 'treasurechest') continue;
      if (tile.drawable && tile.type == 'treasurechest' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(i, 1);
        //score++
        score += random(1E3, 1E4);
      }
    }
    //lava
    if (this.type == 'crocodile') {
      for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
        let tile = tiles[currentLevelIndex][i];
        if (!tile.drawable) continue;
        if (tile.drawable && tile.type !== 'lava') continue;
        if (tile.drawable && tile.type == 'lava' && collider(this, tile)) {
          health -= 10;
        }
      }
    }
    //water
    if (this.type == 'tiger') {
      for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
        let tile = tiles[currentLevelIndex][i];
        if (!tile.drawable) continue;
        if (tile.drawable && tile.type !== 'water') continue;
        if (tile.drawable && tile.type == 'water' && collider(this, tile)) {
          health -= 10;
        }
      }
    }
    //spikes
    for (let i = tiles[currentLevelIndex].length - 1; i >= 0; i -= 1) {
      let tile = tiles[currentLevelIndex][i];
      if (!tile.drawable) continue;
      if (tile.drawable && tile.type !== 'spike') continue;
      if (tile.drawable && tile.type == 'spike' && collider(this, tile)) {
        health -= 10;
      }
    }
  };
};

////////

class LandMonster extends AnimatedObject {
  move() {
    if (crocoMascot.drawable()) {
      this.dx -= crocoMascot.vx;
    }
    if (tigerMascot.drawable()) {
      this.dx -= tigerMascot.vx;
    }
  };

  drawable() {
    return this.dx > 0 && this.dx + this.dw < height;
  }

  impact() {
    if (this.drawable()) {
      for (let i = tiles.length - 1; i >= 0; i -= 1) {
        if (tiles[currentLevelIndex][i].drawable) {
          if (collision(this, tiles[currentLevelIndex][i]) == 'left' ||
            collision(this, tiles[currentLevelIndex][i]) == 'right') {
            this.vx *= -1;
          } else {
            continue;
          }
        }
      }
    }
  };

  look() {
    if (this.drawable()) {
      if (crocoMascot.drawable()) {
        if (this.dx > crocoMascot.dx) {
          this.state = 'idleL';
        }
        if (this.dx < crocoMascot.dx) {
          this.state = 'idleR';
        }
      }
      if (tigerMascot.drawable()) {
        if (this.dx > tigerMascot.dx) {
          this.state = 'idleL';
        }
        if (this.dx < tigerMascot.dx) {
          this.state = 'idleR';
        }
      }
    }
  };
};