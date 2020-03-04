export function random(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

export function collider(a, b) {
  const cax = a.dx + a.dw / 2;
  const cay = a.dy + a.dh / 2;
  const cbx = b.dx + b.dw / 2;
  const cby = b.dy + b.dh / 2;
  const dx = cbx - cax;
  const dy = cby - cay;
  const d = Math.sqrt(dx * dx + dy * dy);

  if (d > a.dh * 2) {
    return false;
  } else {
    return (a.dx + a.dw >= b.dx && a.dx <= b.dx + b.dw &&
            a.dy + a.dh >= b.dy && a.dy <= b.dy + b.dh);
  }
}

export function collision(a, b) {
  let side = '';
  const cax = a.dx + a.dw / 2;
  const cay = a.dy + a.dh / 2;
  const cbx = b.dx + b.dw / 2;
  const cby = b.dy + b.dh / 2;
  const dx = cbx - cax;
  const dy = cby - cay;
  const d = Math.sqrt(dx * dx + dy * dy);

  if (d > a.dh * 2) {
    return side;
  } else {
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
    let avx = Math.abs(vx);
    let avy = Math.abs(vy);
    let offX = 0;
    let offY = 0;
    
    if (avx < hw && avy < hh) {
      offX = hw - avx;
      offY = hh - avy;
      if (offX <= offY) {
        if (vx > 0) {
          side = 'left';
          a.dx += offX;
        } else {
          side = 'right';
          a.dx -= offX;
        }
      } else {
        if (vy > 0) {
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