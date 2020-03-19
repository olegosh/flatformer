const RAF = (function() {
  return requestAnimationFrame ||
    webkitRequestAmimationFrame ||
    mozRequestAmimationFrame ||
    oRequestAmimationFrame ||
    msRequestAmimationFrame ||
    function(callback) {
      setTimeout(callback, 1E3 / 60);
    };
  }
)();

function startGame(callback) {
  game = callback;
  loop();
}

function loop() {
  game();
  RAF(loop);
}

function setStage(callback) {
  game = callback;
  for(let q = buttons.length - 1; q >= 0; q -= 1) {
    buttons[q].o = false;
  }
  init();
}

function startClicking(e) {
  e.preventDefault();
  e.stopPropagation();
  if(game.name == 'menu') {
    setStage(next0);
  } else if(game.name == 'next0') {
   setStage(controls);
  } else if(game.name == 'controls') {
    setStage(next1);
  } else if(game.name == 'next1') {
   setStage(about);
  } else if(game.name == 'about') {
    setStage(next2);
  } else if(game.name == 'next2') {
   setStage(story);
  } else if(game.name == 'story') {
    setStage(next3);
  } else if(game.name == 'next3') {
   setStage(levels);
  } else if(game.name == 'gameOver') {
    setStage(next4);
  } else if(game.name == 'next4') {
   setStage(menu);
  }

  const WIW = window.innerWidth;
  if(e.pageX > 0 && e.pageX < WIW / 3) {
    //left
    moving = true;
    keys[37] = true;
  } else if(e.pageX > WIW / 3 && e.pageX < WIW - WIW / 3) {
    //jump
    moving = true;
    keys[32] = true;
  } else {
    //right
    moving = true;
    keys[39] = true;
  }
}

function startTouching(e) {
  e.preventDefault();
  e.stopPropagation();
  if(game.name == 'menu') {
    setStage(next0);
  } else if(game.name == 'next0') {
   setStage(controls);
  } else if(game.name == 'controls') {
    setStage(next1);
  } else if(game.name == 'next1') {
   setStage(about);
  } else if(game.name == 'about') {
    setStage(next2);
  } else if(game.name == 'next2') {
   setStage(story);
  } else if(game.name == 'story') {
    setStage(next3);
  } else if(game.name == 'next3') {
   setStage(levels);
  } else if(game.name == 'gameOver') {
    setStage(next4);
  } else if(game.name == 'next4') {
   setStage(menu);
  }
  const WIW = window.innerWidth;
  if(e.changedTouches[0].pageX > 0 && e.changedTouches[0].pageX < WIW / 3) {
    //left
    moving = true;
    keys[37] = true;
  } else if(e.changedTouches[0].pageX > WIW / 3 && e.changedTouches[0].pageX < WIW - WIW / 3) {
    //jump
    moving = true;
    keys[32] = true;
  } else {
    //right
    moving = true;
    keys[39] = true;
  }
}

function endClicking(e) {
  e.preventDefault();
  const WIW = window.innerWidth;
  if(e.pageX > 0 && e.pageX < WIW / 3) {
    //left
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[37] = false;
  } else if(e.pageX > WIW / 3 && e.pageX < WIW - WIW / 3) {
    //jump
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[32] = false;
  } else {
    //right
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[39] = false;
  }
}

function endTouching(e) {
  e.preventDefault();
  const WIW = window.innerWidth;
  if(e.changedTouches[0].pageX > 0 && e.changedTouches[0].pageX < WIW / 3) {
    //left
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[37] = false;
  } else if(e.changedTouches[0].pageX > WIW / 3 && e.changedTouches[0].pageX < WIW - WIW / 3) {
    //jump
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[32] = false;
  } else {
    //right
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[39] = false;
  }
}