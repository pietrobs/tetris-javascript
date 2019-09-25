class Drawing {
  constructor() {
    this.gameScreen = null;
  }

  static getGameScreen() {
    return this.gameScreen;
  }

  static setGameScreen(gameScreen) {
    this.gameScreen = gameScreen;
  }

  static draw(x, y, img) {
    const { ctx } = this.gameScreen;
    ctx.drawImage(img, x, y, img.width, img.height);
  }

  static drawRect(x, y, color) {
    const { ctx } = this.gameScreen;
    ctx.beginPath();
    ctx.rect(x, y, Consts.CELL_SIZE, Consts.CELL_SIZE);
    ctx.fillStyle = color;
    ctx.shadowColor = "black";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fill();
    ctx.closePath();
  }

  static clear() {
    const { width, height } = this.gameScreen;
    this.gameScreen.ctx.clearRect(0, 0, width, height);
  }
}
