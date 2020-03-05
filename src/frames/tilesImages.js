import { options } from '../options';
import { lm0Frames, lm1Frames, lm2Frames, lm3Frames } from './LM_frames';

const images = options.images;
options.lm0Frames = lm0Frames;
options.lm1Frames = lm1Frames;
options.lm2Frames = lm2Frames;
options.lm3Frames = lm3Frames;

export const tilesImages = {
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