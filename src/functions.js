function random(min, max) {
  return Math.random() * (1 + max - min) + min ^ 0;
}
function collider(a, b) {
  const cax = a.dx + a.dw / 2;
  const cay = a.dy + a.dh / 2;
  const cbx = b.dx + b.dw / 2;
  const cby = b.dy + b.dh / 2;
  const dx = cbx - cax;
  const dy = cby - cay;
  const d = Math.sqrt(dx * dx + dy * dy);
  if(d > a.dh * 2) return false;
  else return (a.dx + a.dw >= b.dx && a.dx <= b.dx + b.dw &&
          a.dy + a.dh >= b.dy && a.dy <= b.dy + b.dh);
}
function collision(a, b) {
  let side = '';
  const cax = a.dx + a.dw / 2;
  const cay = a.dy + a.dh / 2;
  const cbx = b.dx + b.dw / 2;
  const cby = b.dy + b.dh / 2;
  const dx = cbx - cax;
  const dy = cby - cay;
  const d = Math.sqrt(dx * dx + dy * dy);
  if(d > a.dh * 2) return side;
  else {
  let ahw = a.dw / 2;
  let ahh = a.dh / 2;
  let bhw = b.dw / 2;
  let bhh = b.dh / 2;
  let hw = ahw + bhw;
  let hh = ahh + bhh;
  let acx = a.dx + ahw;
  let acy = a.dy + ahh;
  let bcx = b.dx + bhw;
  let bcy = b.dy + bhh;
  let vx = acx - bcx;
  let vy = acy - bcy;
  //let side = '';
  let avx = Math.abs(vx);
  let avy = Math.abs(vy);
  let offX = 0;
  let offY = 0;
  if(avx < hw && avy < hh) {
    offX = hw - avx;
    offY = hh - avy;
    if(offX <= offY) {
      if(vx > 0) {
        side = 'left';
        a.dx += offX;
      } else {
        side = 'right';
        a.dx -= offX;
      }
    } else {
      if(vy > 0) {
        side = 'top';
        a.dy += offY;
      } else {
        side = 'bottom';
        a.dy -= offY;
      }
    }
  }
  return side;
  }
}
function init() {
  crocoMascot.dx = crocoMascotFrames.idleR.sw / 8 + 10;
  crocoMascot.dy = height + crocoMascotFrames.idleR.sh / 4 - 10;
  tigerMascot.dx = tigerMascotFrames.idleR.sw / 8 + 10;
  tigerMascot.dy = height - tigerMascotFrames.idleR.sh / 4 - 10;
  crystalKeys.g = crystalKeys.y = crystalKeys.b = false;
  enemies.length = 0;
  tiles.length = 0;
  for(let Q = 0; Q < maps.length; Q += 1) {
    let map = maps[Q];
    tiles[Q] = [];
    enemies[Q] = [];
    for(let qu = 0; qu < map.length; qu += 1) {
      for(let q = 0; q < map[qu].length; q += 1) {
        if(map[qu] == '' || map[qu][q] == ' ') {
          continue;
        } else {
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
        }
      }
    }
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
    if(x > this.x && x < WIW - 50 &&
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