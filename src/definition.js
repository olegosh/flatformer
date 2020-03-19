function loadImages(callback) {
  for(let q = 0; q < sources.length; q += 1) {
    let image = document.createElement('img');
    images.push(image);
    image.addEventListener('load', () => {
      imagesCounter += 1;
      loading.textContent = `LOADING... ${imagesCounter}`;
      if(imagesCounter >= imagesQ) {
        callback();
      }
    });
    image.src = sources[q];
  }
}

function onImageOnLoad() {
  startGame(menu);
}

function loadResources() {
  loadImages(onImageOnLoad);
}

////////

loadResources();

////////

//creating background

const bgImg0 = new BackgroundObject(images[0], 0, 0, BGIW, BGIH, 0, 0, width, height, 2);
const bgImg1 = new BackgroundObject(images[1], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.8);
const bgImg2 = new BackgroundObject(images[2], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.6);
const bgImg3 = new BackgroundObject(images[3], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.4);
const bgImg4 = new BackgroundObject(images[4], 0, 0, BGIW, BGIH, 0, 0, width, height, 1.2);
const bgImg5 = new BackgroundObject(images[5], 0, 0, BGIW, BGIH, 0, 0, width, height, 1);
const bgImg6 = new BackgroundObject(images[6], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.8);
const bgImg7 = new CloudObject(images[7], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.6);
const bgImg8 = new CloudObject(images[8], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.4);
const bgImg9 = new CloudObject(images[9], 0, 0, BGIW, BGIH, 0, 0, width, height, 0.2);
const bgImg10 = new BackgroundObject(images[10], 0, 0, BGIW, BGIH, 0, 0, width, height, 0);
const bgImg11 = new BackgroundObject(images[11], 0, 0, BGIW, BGIH, 0, -height, width, height, 0);
const bgImg12 = new BackgroundObject(images[12], 0, 0, BGIW, BGIH, 0, height, width, height, 2);

//creating frames

const lm0Frames = {
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

const lm1Frames = {
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

const lm2Frames = {
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

const lm3Frames = {
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

////////

const tilesImages = {
  a: { i: images[17], t: 'wall', n: 'a' },
  b: { i: images[18], t: 'wall', n: 'b' },
  c: { i: images[33], t: 'lava', n: 'c' },
  d: { i: lm0Frames, t: 'enemy', n: 'd' },
  e: { i: lm1Frames, t: 'enemy', n: 'e' },
  f: { i: images[36], t: 'wall', n: 'f' },
  g: { i: images[37], t: 'wall', n: 'g' },
  h: { i: images[38], t: 'water', n: 'h' },
  i: { i: images[39], t: 'water', n: 'i' },
  j: { i: images[41], t: 'door', n: 'j' },
  k: { i: images[42], t: 'door', n: 'k' },
  l: { i: images[43], t: 'greenKey', n: 'l' },
  m: { i: images[44], t: 'yellowKey', n: 'm' },
  n: { i: images[45], t: 'blueKey', n: 'n' },
  o: { i: images[50], t: 'mushroom', n: 'o' },
  p: { i: images[51], t: 'mushroom', n: 'p' },
  q: { i: images[52], t: 'mushroom', n: 'q' },
  r: { i: images[53], t: 'treasurechest', n: 'r' },
  s: { i: images[54], t: 'treasurechest', n: 's' },
  t: { i: lm2Frames, t: 'enemy', n: 't' },
  u: { i: lm3Frames, t: 'enemy', n: 'u' },
  v: { i: images[83], t: 'grass', n: 'v' },
  w: { i: images[84], t: 'grass', n: 'w' },
  x: { i: images[85], t: 'grass', n: 'x' },
  y: { i: images[86], t: 'grass', n: 'y' },
  z: { i: images[87], t: 'grass', n: 'z' },
  A: { i: images[88], t: 'grass', n: 'A' },
  B: { i: images[89], t: 'flower', n: 'B' },
  C: { i: images[90], t: 'flower', n: 'C' },
  D: { i: images[91], t: 'flower', n: 'D' },
  E: { i: images[92], t: 'bush', n: 'E' },
  F: { i: images[93], t: 'bush', n: 'F' },
  G: { i: images[94], t: 'bush', n: 'G' },
  H: { i: images[95], t: 'tree', n: 'H' },
  I: { i: images[96], t: 'tree', n: 'I' },
  J: { i: images[97], t: 'stone', n: 'J' },
  K: { i: images[98], t: 'stone', n: 'K' },
  L: { i: images[99], t: 'stone', n: 'L' },
  M: { i: images[100], t: 'spike', n: 'M' }
};

//creating characters
////////
//crocodile

const crocoMascotFrames = {
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

const crocoMascot = new Mascot(
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

////////
//tiger

const tigerMascotFrames = {
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

const tigerMascot = new Mascot(
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

////////
//lives

for(let q = 0; q < health; q += 100) {
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

////////
//keys

const greenCrystalKey = new DrawableObject(
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

const yellowCrystalKey = new DrawableObject(
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

const blueCrystalKey = new DrawableObject(
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