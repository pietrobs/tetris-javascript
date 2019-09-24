class Barrier extends Element {
  constructor(x, y) {
    super(x, y, false);
    this.color = "gray";
  }

  autoDraw = ctx => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowColor = "black";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.rect(this.pos.getX(), this.pos.getY(), 50, 50);
    ctx.fill();
    ctx.closePath();
  };
}
