import { options } from './options';
// import { crocoMascotFrames } from './frames/CM_frames';
// import { tigerMascotFrames } from './frames/TM_frames';
import { setStage } from './engine';
import { BackgroundObject } from './objects/BackgroundObject';
import { CloudObject } from './objects/CloudObject';
import { DrawableObject } from './objects/DrawableObject';
import { TileObject } from './objects/TileObject';
import { Mascot } from './objects/Mascot';
import { maps } from './maps';
import { tilesImages } from './frames/tilesImages';
import { LandMonster } from './objects/LandMonster';

const images = options.images;
const BGIW = options.BGIW;
const BGIH = options.BGIH;
const width = options.width;
const height = options.height;
const TIW = options.TIW;
const TIH = options.TIH;
const crystals = options.crystals;
const crystalKeys = options.crystalKeys;
const enemies = options.enemies;
options.maps = maps;
const tiles = options.tiles;
options.tilesImages = tilesImages;
const context = options.context;
let health = options.health;
let t = options.t;
let currentLevelIndex = options.currentLevelIndex;
let score = options.score;
let info = options.info;


let bgImg0;
let bgImg1;
let bgImg2;
let bgImg3;
let bgImg4;
let bgImg5;
let bgImg6;
let bgImg7;
let bgImg8;
let bgImg9;
let bgImg10;
let bgImg11;
let bgImg12;

let crocoMascot;
let tigerMascot;

let crocoMascotFrames;
let tigerMascotFrames;

let lm0Frames;
let lm1Frames;
let lm2Frames;
let lm3Frames;

let greenCrystalKey;
let yellowCrystalKey;
let blueCrystalKey;

export function define() {
  bgImg0 = new BackgroundObject(images[0], 0, 0, BGIW, BGIH, 0, 0, width, height, 2);
  bgImg1 = new BackgroundObject(images[1], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.8);
  bgImg2 = new BackgroundObject(images[2], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.6);
  bgImg3 = new BackgroundObject(images[3], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.4);
  bgImg4 = new BackgroundObject(images[4], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.2);
  bgImg5 = new BackgroundObject(images[5], 0, 0, BGIW, BGIH, 0, 0, width, height, 1);
  bgImg6 = new BackgroundObject(images[6], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.8);
  bgImg7 = new CloudObject(images[7], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.6);
  bgImg8 = new CloudObject(images[8], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.4);
  bgImg9 = new CloudObject(images[9], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.2);
  bgImg10 = new BackgroundObject(images[10], 0, 0, BGIW, BGIH, 0, 0, width, height, 0);
  bgImg11 = new BackgroundObject(images[11], 0, 0, BGIW, BGIH, 0, -height, width, height, 0);
  bgImg12 = new BackgroundObject(images[12], 0, 0, BGIW, BGIH, 0, height, width, height, 2);

  //frames
  crocoMascotFrames = {
    idleR: {
      frames: [
        images[13],
        images[13],
        images[14],
        images[14]
      ],
      sw: 304,
      sh: 410
    },
    idleL: {
      frames: [
        images[15],
        images[15],
        images[16],
        images[16]
      ],
      sw: 304,
      sh: 410
    },
    jumpFR: {
      frames: [
        images[19],
        images[19],
        images[19],
        images[19]
      ],
      sw: 304,
      sh: 447
    },
    jumpFL: {
      frames: [
        images[20],
        images[20],
        images[20],
        images[20]
      ],
      sw: 304,
      sh: 447
    },
    jumpUR: {
      frames: [
        images[21],
        images[21],
        images[21],
        images[21]
      ],
      sw: 304,
      sh: 447
    },
    jumpUL: {
      frames: [
        images[22],
        images[22],
        images[22],
        images[22]
      ],
      sw: 304,
      sh: 447
    },
    runR: {
      frames: [
        images[23],
        images[24],
        images[25],
        images[26]
      ],
      sw: 307,
      sh: 409
    },
    runL: {
      frames: [
        images[27],
        images[28],
        images[29],
        images[30]
      ],
      sw: 307,
      sh: 409
    }
  };

  tigerMascotFrames = {
    idleR: {
      frames: [
        images[55],
        images[55],
        images[56],
        images[56]
      ],
      sw: 303,
      sh: 431
    },
    idleL: {
      frames: [
        images[57],
        images[57],
        images[58],
        images[58]
      ],
      sw: 303,
      sh: 431
    },
    jumpFR: {
      frames: [
        images[59],
        images[59],
        images[59],
        images[59]
      ],
      sw: 329,
      sh: 458
    },
    jumpFL: {
      frames: [
        images[60],
        images[60],
        images[60],
        images[60]
      ],
      sw: 329,
      sh: 458
    },
    jumpUR: {
      frames: [
        images[61],
        images[61],
        images[61],
        images[61]
      ],
      sw: 329,
      sh: 458
    },
    jumpUL: {
      frames: [
        images[62],
        images[62],
        images[62],
        images[62]
      ],
      sw: 329,
      sh: 458
    },
    runR: {
      frames: [
        images[63],
        images[64],
        images[65],
        images[66]
      ],
      sw: 307,
      sh: 445
    },
    runL: {
      frames: [
        images[67],
        images[68],
        images[69],
        images[70]
      ],
      sw: 307,
      sh: 445
    }
  };

  lm0Frames = {
    idleL: {
      frames: [
        images[31],
        images[31],
        images[32],
        images[32]
      ],
      sw: 212,
      sh: 235
    },
    idleR: {
      frames: [
        images[46],
        images[46],
        images[47],
        images[47]
      ],
      sw: 212,
      sh: 235
    }
  };
  
  lm1Frames = {
    idleL: {
      frames: [
        images[34],
        images[34],
        images[35],
        images[35]
      ],
      sw: 582,
      sh: 691
    },
    idleR: {
      frames: [
        images[48],
        images[48],
        images[49],
        images[49]
      ],
      sw: 582,
      sh: 691
    }
  };
  
  lm2Frames = {
    idleL: {
      frames: [
        images[71],
        images[72],
        images[73],
        images[74]
      ],
      sw: 382,
      sh: 416
    },
    idleR: {
      frames: [
        images[75],
        images[76],
        images[77],
        images[78]
      ],
      sw: 382,
      sh: 416
    }
  };
  
  lm3Frames = {
    idleL: {
      frames: [
        images[79],
        images[79],
        images[80],
        images[80]
      ],
      sw: 535,
      sh: 587
    },
    idleR: {
      frames: [
        images[81],
        images[81],
        images[82],
        images[82]
      ],
      sw: 535,
      sh: 587
    }
  };

  crocoMascot = options.crocoMascot = new Mascot(
    'crocodile',
    crocoMascotFrames,
    crocoMascotFrames.idleR.sw / 8 + 10,
    height + crocoMascotFrames.idleR.sh / 4 - 10,
    TIW / 4 - 4,
    crocoMascotFrames.idleR.sh / 8 - 4,
    4,
    'jumpFR',
    500,
    50
  );
  
  tigerMascot = options.tigerMascot = new Mascot(
    'tiger',
    tigerMascotFrames,
    tigerMascotFrames.idleR.sw / 8 + 10,
    height - tigerMascotFrames.idleR.sh / 4 - 10,
    TIW / 4 - 4,
    crocoMascotFrames.idleR.sh / 8 - 4, //croco!
    4,
    'jumpFR',
    500,
    50
  );

  //lives
  for (let q = 0; q < health; q += 100) {
    crystals.push(
      new DrawableObject(
        images[40],
        0,
        0,
        128,
        128,
        q / 100 * TIW / 4,
        TIW / 4,
        TIW / 4,
        TIH / 4,
        0
      )
    );
  }

  //keys
  greenCrystalKey = new DrawableObject(
    images[43],
    0,
    0,
    128,
    128,
    width - TIW / 4,
    TIH / 4 + 16,
    TIW / 4,
    TIH / 4,
    0
  );

  yellowCrystalKey = new DrawableObject(
    images[44],
    0,
    0,
    128,
    128,
    width - TIW / 4,
    TIH / 4 * 2 + 16,
    TIW / 4,
    TIH / 4,
    0
  );

  blueCrystalKey = new DrawableObject(
    images[45],
    0,
    0,
    128,
    128,
    width - TIW / 4,
    TIH / 4 * 3 + 16,
    TIW / 4,
    TIH / 4,
    0
  );

  for (let i = 0; i < options.transformToEnemies.length; i += 1) {
    let en = options.transformToEnemies[i];
    options.enemies[en.name].push(
      new LandMonster(
        tilesImages[en.name].i,
        en.dx,
        en.dy,
        en.dw,
        en.dh,
        en.s,
        en.state,
        en.al,
        en.as
      )
    );
  }

  /*
  options.transformToTiles.push({
            currentIndex: Q,
            type: tilesImages[map[qu][q]].t,
            name: tilesImages[map[qu][q]].n,
            index: Q,
            args: [
              map[qu][q],
              0,
              0,
              TIW,
              TIH,
              q * TIW / 4,
              qu * TIH / 4,
              TIW / 4,
              TIH / 4,
              3
            ]
          });

          tiles[Q].push(
            new TileObject(
              tilesImages[map[qu][q]].t,
              tilesImages[map[qu][q]].n,
              Q,
              tilesImages[map[qu][q]].i,
              0,
              0,
              TIW,
              TIH,
              q * TIW / 4,
              qu * TIH / 4,
              TIW / 4,
              TIH / 4,
              3
            )
          );
  */

  for(let i = 0; i < options.transformToTiles.length; i += 1) {
    let ti = options.transformToTiles[i];
    tiles[ti.currentIndex].push(
      new TileObject(
        ti.type,
        ti.name,
        ti.index,
        ...ti.args
      )
    );
  }

  init();
}

// init();

export function init() {
  crocoMascot.dx = crocoMascotFrames.idleR.sw / 8 + 10;
  crocoMascot.dy = height + crocoMascotFrames.idleR.sh / 4 - 10;
  tigerMascot.dx = tigerMascotFrames.idleR.sw / 8 + 10;
  tigerMascot.dy = height - tigerMascotFrames.idleR.sh / 4 - 10;
  crystalKeys.g = crystalKeys.y = crystalKeys.b = false;
  enemies.length = 0;
  tiles.length = 0;
  for (let Q = 0; Q < maps.length; Q += 1) {
    let map = maps[Q];
    tiles[Q] = [];
    enemies[Q] = [];
    for (let qu = 0; qu < map.length; qu += 1) {
      for (let q = 0; q < map[qu].length; q += 1) {
        if (map[qu] == '' || map[qu][q] == ' ') {
          continue;
        } else {
          options.transformToTiles.push({
            currentIndex: Q,
            type: tilesImages[map[qu][q]].t,
            name: tilesImages[map[qu][q]].n,
            index: Q,
            args: [
              map[qu][q],
              0,
              0,
              TIW,
              TIH,
              q * TIW / 4,
              qu * TIH / 4,
              TIW / 4,
              TIH / 4,
              3
            ]
          });

          // tiles[Q].push(
          //   new TileObject(
          //     tilesImages[map[qu][q]].t,
          //     tilesImages[map[qu][q]].n,
          //     Q,
          //     tilesImages[map[qu][q]].i,
          //     0,
          //     0,
          //     TIW,
          //     TIH,
          //     q * TIW / 4,
          //     qu * TIH / 4,
          //     TIW / 4,
          //     TIH / 4,
          //     3
          //   )
          // );
        }
      }
    }
    //
    /*
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
    */
    
    // for (let i = 0; i < options.trasformToEnemies.length; i += 1) {
    //   let en = options.trasformToEnemies[i];
    //   options.enemies[en.name].push(
    //     new LandMonster(
    //       tilesImages[en.name].i,
    //       en.dx,
    //       en.dy,
    //       en.dw,
    //       en.dh,
    //       en.s,
    //       en.state,
    //       en.al,
    //       en.as
    //     )
    //   );
    // }

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
}

function clear() {
  context.clearRect(0, 0, width, height);
}

class Button {
  constructor(x, y, t, f, b) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.f = f;
    this.b = b;
    this.o = false;
  };
  draw() {
    context.strokeStyle = '#450856';
    context.fillStyle = 'rgba(255, 255, 255, 0.3)';
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(width - 50, this.y);
    context.lineTo(width - 50, this.y + 50);
    context.lineTo(this.x, this.y + 50);
    context.closePath();
    context.fill();
    context.stroke();
    context.fillStyle = '#ED0D0D';
    context.font = '12px monospace';
    context.fillText(this.t, width / 2, this.y + 25);
  };
  handle(x, y) {
    let WIW = window.innerWidth;
    if (x > this.x && x < WIW - 50 &&
      y > this.y && y < this.y + 50) {
      this.f();
    }
  };
};

function gold() {
  context.fillStyle = '#D4AF37';
  context.font = '15px monospace';
  context.fillText(`Gold: ${score}`, width / 2, 16);
}

function drawBackground() {
  bgImg12.move();
  bgImg0.move();
  bgImg1.move();
  bgImg2.move();
  bgImg3.move();
  bgImg4.move();
  bgImg5.move();
  bgImg6.move();
  bgImg7.move();
  bgImg8.move();
  bgImg9.move();
  bgImg11.draw(); //static sky
  bgImg10.draw(); //static
  bgImg9.draw(); //small clouds
  bgImg8.draw(); //medium clouds
  bgImg7.draw(); //large clouds
  bgImg6.draw(); //large distant hills
  bgImg5.draw(); //medium distant hills
  bgImg4.draw(); //small distant hills
  bgImg3.draw(); //large distant trees
  bgImg2.draw(); //medium distant trees
  bgImg1.draw(); //small distant trees
  bgImg0.draw(); //ground
  bgImg12.draw(); //rground
}

function drawSky() {
  bgImg9.move();
  bgImg8.move();
  bgImg7.move();
  bgImg11.draw();
  bgImg10.draw();
  bgImg9.draw();
  bgImg8.draw();
  bgImg7.draw();
}

function drawMap(index) {
  for (let q = tiles[index].length - 1; q >= 0; q -= 1) {
    if (tiles[index][q].dx < -tiles[index][q].dw ||
      tiles[index][q].dx > width + tiles[index][q].dw ||
      tiles[index][q].dy < -tiles[index][q].dh ||
      tiles[index][q].dy > height + tiles[index][q].dh) {
      tiles[index][q].drawable = false;
    } else {
      tiles[index][q].drawable = true;
    }
    tiles[index][q].move();
    tiles[index][q].draw();
  }
}

function checkLives() {
  switch (health) {
    case 900: crystals.splice(9, 1); break;
    case 800: crystals.splice(8, 1); break;
    case 700: crystals.splice(7, 1); break;
    case 600: crystals.splice(6, 1); break;
    case 500: crystals.splice(5, 1); break;
    case 400: crystals.splice(4, 1); break;
    case 300: crystals.splice(3, 1); break;
    case 200: crystals.splice(2, 1); break;
    case 100: crystals.splice(1, 1); break;
    case 0: crystals.splice(0, 1); break;
  }
  if (health <= 0) {
    setStage(gameOver);
    // init();
    health = 1E3;
    for (let q = 0; q < health; q += 100) {
      crystals.push(
        new DrawableObject(
          images[40],
          0,
          0,
          128,
          128,
          q / 100 * TIW / 4,
          TIW / 4,
          TIW / 4,
          TIH / 4,
          0
        )
      );
    }
  }
  context.font = '12px monospace';
  context.fillStyle = '#FF5959';
  context.fillText(`Lives: ${health}`, width / 2, TIH / 2 + 16);
}

function checkKeys() {
  if (crystalKeys.g) {
    greenCrystalKey.draw();
  }
  if (crystalKeys.y) {
    yellowCrystalKey.draw();
  }
  if (crystalKeys.b) {
    blueCrystalKey.draw();
  }
}

// const WIH = window.innerHeight;
const buttons = [];
buttons.push(
  new Button(
    50,
    20,//WIH / 2 + 20,
    'Start journey',
    function() {
      setStage(story);
    },
    'menu'
  )
);

buttons.push(
  new Button(
    50,
    200,//WIH / 2 + 200,
    'Next',
    function() {
      setStage(menu);
    },
    'controls'
  )
);

buttons.push(
  new Button(
    50,
    200,//WIH / 2 + 200,
    'Next',
    function() {
      setStage(menu);
    },
    'about'
  )
);

buttons.push(
  new Button(
    50,
    200,//WIH / 2 + 200,
    'Got it',
    function() {
      setStage(levels);
    },
    'story'
  )
);

buttons.push(
  new Button(
    50,
    200,//WIH / 2 + 200,
    'Menu',
    function() {
      setStage(menu);
    },
    'gameOver'
  )
);

function story() {
  clear();
  drawSky();
  context.fillStyle = '#C62562';
  context.font = '10px monospace';
  context.fillText('This game is a simple platformer.', width / 2, 270);
  context.fillText('Your goal is to find three crystals', width / 2, 270 + 25);
  context.fillText('and go to the next level. Collect gold,', width / 2, 270 + 50);
  context.fillText('beware of enemies and spikes, they cause', width / 2, 270 + 75);
  context.fillText('damage. To change the character, find red', width / 2, 270 + 100);
  context.fillText('mushroom. Water and lava cause damage too.', width / 2, 270 + 125);
  context.fillText('The crocodile is invulnerable to water.', width / 2, 270 + 150);
  context.fillText('The tiger is invulnerable to lava. Enjoy.', width / 2, 270 + 175);
  for (let q = buttons.length - 1; q >= 0; q -= 1) {
    if (buttons[q].b == 'story') {
      buttons[q].o = true;
      buttons[q].draw();
    }
  }
  score = 0;
  currentLevelIndex = 0;
}

function controls() {
  clear();
  drawSky();
  context.fillStyle = '#154B16';
  context.font = '10px monospace';
  context.fillText('Hello and welcome to the game', width / 2, 270);
  context.fillText('\'Mascot Flatformer The game\'', width / 2, 270 + 25);
  context.fillText('To move a character left or right,', width / 2, 270 + 50);
  context.fillText('click or touch the corresponding', width / 2, 270 + 75);
  context.fillText('sides of the screen. To jump use', width / 2, 270 + 100);
  context.fillText('clicking or touching the center', width / 2, 270 + 125);
  context.fillText('of the screen. If you use a keyboard,', width / 2, 270 + 150);
  context.fillText('press the arrow keys to move the', width / 2, 270 + 175);
  context.fillText('character, and the spacebar to jump.', width / 2, 270 + 200);
  for (let q = buttons.length - 1; q >= 0; q -= 1) {
    if (buttons[q].b == 'controls') {
      buttons[q].o = true;
      buttons[q].draw();
    }
  }
}

function about() {
  clear();
  drawSky();
  context.fillStyle = '#9C9E15';
  context.font = '10px monospace';
  context.fillText('This game was created by K137 in 2018.', width / 2, 270);
  context.fillText('Amazing game assets was taken from here:', width / 2, 270 + 25);
  context.fillText('https://opengameart.org/users/bevouliincom', width / 2, 270 + 50);
  context.fillText('Many thanks to SoloLearn community.', width / 2, 270 + 75);
  context.fillText('They are awesome and helpful.', width / 2, 270 + 100);
  context.fillText('Thank you for playing my game.', width / 2, 270 + 125);
  context.fillText('If you have any questions, feel free to ask', width / 2, 270 + 150);
  context.fillText('them in the comments section. Good luck.', width / 2, 270 + 175);
  for (let q = buttons.length - 1; q >= 0; q -= 1) {
    if (buttons[q].b == 'about') {
      buttons[q].o = true;
      buttons[q].draw();
    }
  }
}

function menu() {
  clear();
  drawBackground();
  context.font = '15px monospace';
  context.fillStyle = '#9113C5';
  context.fillText('Mascot Flatformer', width / 2, 270);
  context.fillStyle = '#8D4587'
  context.font = '10px monospace';
  context.fillText('The game', width / 2, 270 + 30);
  context.fillStyle = '#345C31';
  context.fillText('Menu', width / 2, 10);
  for (let q = buttons.length - 1; q >= 0; q -= 1) {
    if (buttons[q].b == 'menu') {
      buttons[q].o = true;
      buttons[q].draw();
    }
  }
}

function next0() {
  clear();
  drawSky();
  context.fillText('Next', width / 2, 270);
}

function next1() {
  clear();
  drawSky();
  context.fillText('Next', width / 2, 270);
}

function next2() {
  clear();
  drawSky();
  context.fillText('Next', width / 2, 270);
}

function next3() {
  clear();
  drawSky();
  context.fillText('Next', width / 2, 270);
}

function next4() {
  clear();
  drawSky();
  context.fillText('Next', width / 2, 270);
}

export function levels() {
  if (crocoMascot.drawable()) {
    if (crocoMascot.dx + crocoMascot.dw <= 0 || crocoMascot.dx >= width) {
      setStage(gameOver);
    }
  }
  if (tigerMascot.drawable()) {
    if (tigerMascot.dx + tigerMascot.dw <= 0 || tigerMascot.dx >= width) {
      setStage(gameOver);
    }
  }
  if (currentLevelIndex == maps.length) {
    currentLevelIndex = 0;
  }
  clear();
  drawBackground();
  if (t > 50) {
    crocoMascot.collide();
    tigerMascot.collide();
    t = 0;
  }
  t += 1;
  crocoMascot.move();
  crocoMascot.impact();
  crocoMascot.draw();
  tigerMascot.move();
  tigerMascot.impact();
  tigerMascot.draw();
  drawMap(currentLevelIndex);
  for (let q = enemies[currentLevelIndex].length - 1; q >= 0; q -= 1) {
    enemies[currentLevelIndex][q].move();
    enemies[currentLevelIndex][q].look();
  }
  checkLives();
  checkKeys();
  for (let q = crystals.length - 1; q >= 0; q -= 1) {
    crystals[q].draw();
  }
  gold();
  if (info) {
    context.fillStyle = '#A71313';
    context.font = '12px monospace';
    context.fillText('To escape, you need to find three', width / 2, height / 2);
    context.fillText('crystals, green, yellow and blue.', width / 2, height / 2 + 25);
  }
  for (let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
    let tile = tiles[currentLevelIndex][q];
    if (tile.type !== 'door') continue;
    if (tile.type == 'door' && !tile.drawable) {
      info = false;
    }
  }
}

function gameOver() {
  clear();
  drawSky();
  context.fillStyle = '#2B9616';
  context.font = '10px monospace';
  context.fillText('Game over.', width / 2, 270);
  context.fillText(`Gold collected: ${score}.`, width / 2, 270 + 25);
  context.fillText(`Levels completed: ${currentLevelIndex}.`, width / 2, 270 + 50);
  context.fillText('Thank you for playing my game.', width / 2, 270 + 75);
  context.fillText(':)', width / 2, 270 + 100);
  for (let q = buttons.length - 1; q >= 0; q -= 1) {
    if (buttons[q].b == 'gameOver') {
      buttons[q].o = true;
      buttons[q].draw();
    }
  }
}

// init();
