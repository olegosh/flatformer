import { options } from '../options';
import { setStage } from '../engine';
import { collider, collision } from '../utils';
import { AnimatedObject } from './AnimatedObject';

const keys = options.keys;
const height = options.height;
// const tiles = options.tiles;
let currentLevelIndex = options.currentLevelIndex;
const enemies = options.enemies;
const crystalKeys = options.crystalKeys;
const crocoMascot = options.crocoMascot;
const tigerMascot = options.tigerMascot;
const friction = options.friction;
const gravity = options.gravity;

export class Mascot extends AnimatedObject {
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
    const tiles = options.tiles;
    //collision detection
    for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
      let tile = tiles[currentLevelIndex][q];
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
    for (let q = enemies[currentLevelIndex].length - 1; q >= 0; q -= 1) {
      if (collider(this, enemies[currentLevelIndex][q])) {
        options.health -= 10;
      }
    }
    //crysal keys
    const tiles = options.tiles;
    for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
      let tile = tiles[currentLevelIndex][q];
      if (!tile.drawable && tile.type !== 'greenKey' && tile.type !== 'yellowKey' && tile.type !== 'blueKey') {
        continue;
      } else if (tile.drawable && tile.type == 'greenKey' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(q, 1);
        crystalKeys.g = true;
      } else if (tile.drawable && tile.type == 'yellowKey' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(q, 1);
        crystalKeys.y = true;
      } else if (tile.drawable && tile.type == 'blueKey' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(q, 1);
        crystalKeys.b = true;
      }
    }
    //door
    for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
      let tile = tiles[currentLevelIndex][q];
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
          options.info = true;
        }
      }
    }
    //mushrooms
    for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
      let tile = tiles[currentLevelIndex][q];
      if (!tile.drawable) continue;
      if (tile.drawable && tile.type !== 'mushroom') continue;
      if (tile.drawable && tile.type == 'mushroom' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(q, 1);
        //change characters
        [crocoMascot.dx, tigerMascot.dx] = [tigerMascot.dx, crocoMascot.dx];
        [crocoMascot.dy, tigerMascot.dy] = [tigerMascot.dy, crocoMascot.dy];
      }
    }
    //treasurechests
    for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
      let tile = tiles[currentLevelIndex][q];
      if (!tile.drawable) continue;
      if (tile.drawable && tile.type !== 'treasurechest') continue;
      if (tile.drawable && tile.type == 'treasurechest' && collider(this, tile)) {
        tiles[currentLevelIndex].splice(q, 1);
        //score++
        score += random(1E3, 1E4);
      }
    }
    //lava
    if (this.type == 'crocodile') {
      for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
        let tile = tiles[currentLevelIndex][q];
        if (!tile.drawable) continue;
        if (tile.drawable && tile.type !== 'lava') continue;
        if (tile.drawable && tile.type == 'lava' && collider(this, tile)) {
          options.health -= 10;
        }
      }
    }
    //water
    if (this.type == 'tiger') {
      for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
        let tile = tiles[currentLevelIndex][q];
        if (!tile.drawable) continue;
        if (tile.drawable && tile.type !== 'water') continue;
        if (tile.drawable && tile.type == 'water' && collider(this, tile)) {
          options.health -= 10;
        }
      }
    }
    //spikes
    for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
      let tile = tiles[currentLevelIndex][q];
      if (!tile.drawable) continue;
      if (tile.drawable && tile.type !== 'spike') continue;
      if (tile.drawable && tile.type == 'spike' && collider(this, tile)) {
        options.health -= 10;
      }
    }
  };
};