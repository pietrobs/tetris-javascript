class Element {
  constructor(x, y, isTransposable) {
    this.pos = new Position(x, y);
    this.isTransposable = isTransposable;
  }

  overlap(element) {
    const xDist = Math.abs(element.pos.getX() - this.pos.getX());
    const yDist = Math.abs(element.pos.getY() - this.pos.getY());

    return xDist < 1.0 && yDist < 1.0;
  }

  getStringPosition() {
    return `(${this.pos.getX()/Consts.CELL_SIZE}, ${this.pos.getY()/Consts.CELL_SIZE})`;
  }

  backToLastPosition() {
    this.pos.comeBack();
  }

  setPosition(x, y) {
    return this.pos.setPosition(x, y);
  }

  isTransposable() {
    return this.isTransposable;
  }

  setTransposable(isTransposable) {
    this.isTransposable = isTransposable;
  }

  moveDown() {
    return this.pos.moveDown();
  }

  moveRight() {
    return this.pos.moveRight();
  }

  moveLeft() {
    return this.pos.moveLeft();
  }
}
