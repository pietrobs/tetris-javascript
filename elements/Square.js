class Square extends Element {
  constructor(x, y, color) {
    super(x, y, false);
    this.color = color;
    this.count = 0;
  }

  autoDraw(ctx){
    ctx.beginPath();
    ctx.rect(this.pos.getX(), this.pos.getY(), 50, 50);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    this.count++;

    if (this.count % 100 === 0) {
      this.moveDown();
      this.count = 0;
    }
  };
}
