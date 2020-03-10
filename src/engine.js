import { init } from './levels';
import { options } from './options';

let game = options.game;

export function startGame(callback) {
  if (callback) {
    game = callback;
  }
  loop();
}
function loop() {
  try {
    if (typeof game === 'function') {
      game();
    } else {
      throw new TypeError('game variable must be a function');
    }
    requestAnimationFrame(loop);
  } catch(error) {
    throw error;
  }
}
export function setStage(callback) {
  game = callback;
  
  // init();
}