import './index.css';
import sources from './sources';
import maps from './maps';
import { startGame, setStage } from './engine';
import { FrameCounter } from './fps';
import { loadImages } from './loaders';
import { options } from './options';

const $loading = options.$loading;

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

loadImages(onImagesLoad);

function onImagesLoad() {
  setStage(testLevel);
  $loading.style.display = 'none';
  startGame();
}