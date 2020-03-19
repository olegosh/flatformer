canvas.addEventListener('mousedown', startClicking);
canvas.addEventListener('touchstart', startTouching);
canvas.addEventListener('mouseup', endClicking);
canvas.addEventListener('touchend', endTouching);

window.addEventListener('resize', () => {
  setStage(menu);
});

window.addEventListener('keydown', (e) => {
  (function() {
    moving = true;
    keys[e.keyCode] = true;
  })(e);
});

window.addEventListener('keyup', (e) => {
  (function() {
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[e.keyCode] = false;
  })(e);
});