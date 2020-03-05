import { options } from './options';
import { startClicking, startTouching, endClicking, endTouching } from './handlers';

const $canvas = options.$canvas;
let moving = options.moving;
const keys = options.keys;
const crocoMascot = options.crocoMascot;
const tigerMascot = options.tigerMascot;

$canvas.addEventListener('mousedown', startClicking);
$canvas.addEventListener('touchstart', startTouching);
$canvas.addEventListener('mouseup', endClicking);
$canvas.addEventListener('touchend', endTouching);

window.addEventListener('keydown', (e) => {
  (function() {
    moving = true;
    keys[e.keyCode] = true;
  })(e, moving);
});

window.addEventListener('keyup', (e) => {
  (function() {
    moving = false;
    crocoMascot.vx = 0;
    tigerMascot.vx = 0;
    keys[e.keyCode] = false;
  })(e, moving);
});