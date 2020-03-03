import './index.css';
import sources from './sources';
import maps from './maps';
import { startGame, setStage } from './engine';
import { FrameCounter } from './fps';

const counter = new FrameCounter(performance.now());
counter.create();
counter.frameCount();

let x = 0;
const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
const context = canvas.getContext('2d');

const testLevel = () => {
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#540930';
  context.fillRect(x++, 50, 50, 50);
  x = x > 600 ? 0 : x;
};

setStage(testLevel);
startGame();

// for (let i = 0; i < sources.length; i += 1) {
//   let img = document.createElement('img');
//   img.src = sources[i];
//   img.addEventListener('load', () => {
//     document.body.appendChild(img);
//     img.classList.add('img');
//   });
// }