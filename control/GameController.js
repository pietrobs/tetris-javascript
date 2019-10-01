class GameController {
  drawAllElements(elements) {
    elements.forEach(element => {
      element.autoDraw();
    });
  }

  processAllElements(elements, activePiece) {
    if (elements.length === 0) return;

    const blocks = activePiece.getBlocks();

    if (
      !this.isValidPosition(elements, blocks[0]) ||
      !this.isValidPosition(elements, blocks[1]) ||
      !this.isValidPosition(elements, blocks[2]) ||
      !this.isValidPosition(elements, blocks[3])
    ) {
      activePiece.backToLastPosition();
      Drawing.getGameScreen().generatePiece();
      return;
    }

  }

  isValidPosition(elements, tempElem) {
    for (let i = 4; i < elements.length; i++) {
      const elemAux = elements[i];

      if (!elemAux.isTransposable) {
        if (elemAux.overlap(tempElem)) {
          return false;
        }
      }
    }
    return true;
  }

  verifyFilledLine(elements) {
    const { NUM_CELLS, CELL_SIZE } = Consts;
    for (let i = 0; i < NUM_CELLS; i++) {
      let lineResult = true;
      for (let j = 0; j < NUM_CELLS; j++) {
        if (
          !this.hasElementAtPosition(i * CELL_SIZE, j * CELL_SIZE, elements)
        ) {
          lineResult = false;
          break;
        }
      }
      if (lineResult) {
        console.log("A linha está preenchida", i * CELL_SIZE);
      }
    }
  }

  hasElementAtPosition(x, y, elements) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].pos.getX() === x && elements[i].pos.getY() === y) {
        return true;
      }
    }
    return false;
  }
}
