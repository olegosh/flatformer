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
  for(let q = tiles[index].length - 1; q >= 0; q -= 1) {
    if(tiles[index][q].dx < -tiles[index][q].dw ||
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
  switch(health) {
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
  if(health <= 0) {
    setStage(gameOver);
    init();
    health = 1E3;
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
  }
  context.font = '12px monospace';
  context.fillStyle = '#FF5959';
  context.fillText(`Lives: ${health}`, width / 2, TIH / 2 + 16);
}

function checkKeys() {
  if(crystalKeys.g) {
    greenCrystalKey.draw();
  }
  if(crystalKeys.y) {
    yellowCrystalKey.draw();
  }
  if(crystalKeys.b) {
    blueCrystalKey.draw();
  }
}

const WIH = window.innerHeight;
buttons.push(
  new Button(
    50,
    20,
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
    200,
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
    200,
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
    200,
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
    200,
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
  for(let q = buttons.length - 1; q >= 0; q -= 1) {
    if(buttons[q].b == 'story') {
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
  for(let q = buttons.length - 1; q >= 0; q -= 1) {
    if(buttons[q].b == 'controls') {
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
  for(let q = buttons.length - 1; q >= 0; q -= 1) {
    if(buttons[q].b == 'about') {
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
  for(let q = buttons.length - 1; q >= 0; q -= 1) {
    if(buttons[q].b == 'menu') {
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

////////
////////

function levels() {
  if(crocoMascot.drawable()) {
    if(crocoMascot.dx + crocoMascot.dw <= 0 || crocoMascot.dx >= width) {
      setStage(gameOver);
    }
  }

  if(tigerMascot.drawable()) {
    if(tigerMascot.dx + tigerMascot.dw <= 0 || tigerMascot.dx >= width) {
      setStage(gameOver);
    }
  }

  if(currentLevelIndex == maps.length) {
    currentLevelIndex = 0;
  }

  clear();

  drawBackground();

  if(t > 50) {
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

  for(let q = enemies[currentLevelIndex].length - 1; q >= 0; q -= 1) {
    enemies[currentLevelIndex][q].move();
    enemies[currentLevelIndex][q].look();
  }

  checkLives();
  checkKeys();

  for(let q = crystals.length - 1; q >= 0; q -= 1) {
    crystals[q].draw();
  }

  gold();

  if(info) {
    context.fillStyle = '#A71313';
    context.font = '12px monospace';
    context.fillText('To escape, you need to find three', width / 2, height / 2);
    context.fillText('crystals, green, yellow and blue.', width / 2, height / 2 + 25);
  }
  
  for(let q = tiles[currentLevelIndex].length - 1; q >= 0; q -= 1) {
    let tile = tiles[currentLevelIndex][q];
    if(tile.type !== 'door') continue;
    if(tile.type == 'door' && !tile.drawable) {
      info = false;
    }
  }
}

////////
////////

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
  for(let q = buttons.length - 1; q >= 0; q -= 1) {
    if(buttons[q].b == 'gameOver') {
      buttons[q].o = true;
      buttons[q].draw();
    }
  }
}