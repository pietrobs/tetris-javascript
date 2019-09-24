class GameScreen {
  constructor({ canvasId }) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.background = new Image(Consts.CELL_SIZE, Consts.CELL_SIZE);
    this.background.src = `${Consts.IMG_PATH}/bricks.png`;

    this.gameController = new GameController();
    this.elements = [];
    this.lolo = new Lolo(0, 0);

    Drawing.setGameScreen(this);

    this.go();
  }

  addElement(element) {
    this.elements.push(element);
  }

  removeElement(element) {
    this.elements = this.elements.filter(elem => element !== elem);
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getCtx() {
    return this.canvas.getContext("2d");
  }

  paint() {
    Drawing.clear();
    for (let x = 0; x < Consts.NUM_CELLS; x++) {
      for (let y = 0; y < Consts.NUM_CELLS; y++) {
        Drawing.draw(
          x * Consts.CELL_SIZE,
          y * Consts.CELL_SIZE,
          this.background
        );
      }
    }
    this.gameController.processAllElements(this.elements);
    this.gameController.drawAllElement(this.elements);
  }

  loop = () => {
    this.paint();
    document.title = this.lolo.getStringPosition();
  };

  go() {
    this.keyPressed();

    this.addElement(this.lolo);
    this.addElement(new Skull(0, 250));

    setInterval(this.loop, Consts.DELAY_SCREEN_UPDATE);
  }

  keyPressed() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          this.lolo.moveLeft();
          break;
        case 38:
          this.lolo.moveUp();
          break;
        case 39:
          this.lolo.moveRight();
          break;
        case 40:
          this.lolo.moveDown();
          break;
        default:
          null;
      }
    };
  }

  keyTyped() {
    document.onkeypress = e => {
      // ...
    };
  }

  keyUp() {
    document.onkeyup = e => {
      // ...
    };
  }
}
