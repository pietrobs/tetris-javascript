class Block extends Element {
    constructor(x, y, color) {
      super({ x, y, isTransposable: false, isMortal: false });
      this.color = color;
    }
    
    setColor(color){
      this.color = color;
    }
  
    autoDraw() {
      Drawing.drawRect(this.pos.getX(), this.pos.getY(), this.color);
    }
  
    backToLastPosition() {
      this.pos.comeBack();
    }
  }
  