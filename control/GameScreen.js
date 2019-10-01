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

    Drawing.setGameScreen(this);

    this.go();
  }

  addElement(elements) {
    this.elements = [...elements, ...this.elements];
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
    this.gameController.processAllElements(this.elements, this.piece);
    this.gameController.drawAllElements(this.elements);
    this.gameController.verifyFilledLine(this.elements);
  }

  generatePiece() {
    this.piece = new Piece();
    this.addElement(this.piece.getBlocks());
  }

  loop = () => {
    this.paint();
    this.count++;

    if (this.count === 10) {
      if (!this.piece.moveDown()) {
        this.generatePiece();
      }
      this.count = 0;
    }
  };

  go() {
    this.keyPressed();

    this.count = 0;
    this.generatePiece();

    setInterval(this.loop, Consts.DELAY_SCREEN_UPDATE);
  }

  keyPressed() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          this.piece.moveLeft();
          break;
        case 38:
          this.piece.moveUp();
          break;
        case 39:
          this.piece.moveRight();
          break;
        case 40:
          this.piece.moveDown();
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
