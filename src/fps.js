export class FrameCounter {
  constructor(timeStart) {
    this.timeStart = timeStart;
    this.counter = 0;
    this.fps = 0;
    this.$fps = null;
  }

  create() {
    this.$fps = document.createElement('div');
    this.$fps.style.position = 'fixed';
    this.$fps.style.right = '5px';
    this.$fps.style.bottom = '5px';
    this.$fps.style.color = '#49C431';
    this.$fps.style.background = 'transparent';
    this.$fps.style.font = '1.5em monospace';
    this.$fps.style.zIndex = 1000;
    document.getElementsByTagName('body')[0].appendChild(this.$fps);
  }

  frameCount() {
    const now = performance.now();
    const duration = now - this.timeStart;
    if (duration < 1000) {
      this.counter++;
    } else {
      this.fps = this.counter;
      this.counter = 0;
      this.timeStart = now;
      this.$fps.textContent = `${this.fps} FPS`;
    }
    requestAnimationFrame(() => this.frameCount(this.timeStart));
  }
}