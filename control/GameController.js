class GameController {
  drawAllElement(ctx, elements) {
    elements.forEach(element => {
      element.autoDraw(ctx);
    });
  }

  processAllElements(elements) {
    if (elements.length === 0) return;

    elements.forEach((element, index) => {
      if (!this.isValidPosition(elements, element, index)) {
        element.backToLastPosition();
      }
    });
  }

  isValidPosition(elements, tempElem, ignoreIndex) {
    let isValid = true;
    elements.forEach((element, index) => {
      if (ignoreIndex !== index && tempElem.overlap(element) && !element.isTransposable) {
        isValid = false;
        return;
      }
    });
    return isValid;
  }
}
