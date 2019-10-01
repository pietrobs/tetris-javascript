class Piece {
  constructor() {
    this.blocks = Tetris.generate().map(
      block => new Block(block.x, block.y, block.color)
    );
    this.isMoving = true;
  }

  getBlocks() {
    return this.blocks;
  }

  moveRight() {
    this.blocks.forEach(block => {
      if (!block.moveRight()) {
        this.backToLastPosition();
        return;
      }
    });
  }

  moveLeft() {
    this.blocks.forEach(block => {
      if (!block.moveLeft()) {
        this.backToLastPosition();
        // return;
      }
    });
  }

  moveDown() {
    if (!this.isMoving) return false;
    let moved = true;
    
    new Sound().createPlayer("assets/squeeze.mp3").play();

    this.blocks.forEach(block => {
      if (!block.moveDown()) {
        moved = false;
        // this.backToLastPosition();
        this.isMoving = false;
      }
    });
    return moved;
  }

  backToLastPosition() {
    this.blocks.forEach(block => {
      block.pos.comeBack();
      console.log("Voltando bloco para a ultima posição", block);
    });
  }
}
