class GameScreen {
  constructor({ canvasId }) {
    this.gameController = new GameController();
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.square = new Square(0, 0, "blue");
    this.elements = [];

    this.start();
  }

  setScenario(scenarioName){
      this.canvas.style.backgroundImage = `url(assets/${scenarioName}.jpg)`;
  }

  keyPressed(){
    document.onkeydown = e => {
      if (e.keyCode === 37) {
        this.square.moveLeft();
      }

      if (e.keyCode === 39) {
        this.square.moveRight();
      }
    };
  };

  addElement(element){
    this.elements.push(element);
  };

  removeElement(){
    //   to do
  };

  draw(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.gameController.processAllElements(this.elements);
    this.gameController.drawAllElement(this.ctx, this.elements);
  };

  loop = () => {
    this.draw();
    document.title = this.square.getStringPosition();
  };

  start() {
    this.keyPressed();
    this.addElement(this.square);
    this.addElement(new Barrier(0, 250));
    this.addElement(new Barrier(50, 250));

    setInterval(this.loop, Consts.DELAY_SCREEN_UPDATE);
  }
}
