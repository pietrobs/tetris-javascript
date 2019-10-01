class Tetris {

  static generate() {
    const { CELL_SIZE } = Consts;
    const types = ["I", "J", "O"];
    const type = types[Math.floor(Math.random() * types.length)];
    switch (type) {
      case "I":
        return [
          { x: CELL_SIZE * 4, y: 0, color: "yellow" },
          { x: CELL_SIZE * 5, y: 0, color: "red" },
          { x: CELL_SIZE * 6, y: 0, color: "green" },
          { x: CELL_SIZE * 7, y: 0, color: "blue" }
        ];
      case "J":
        return [
          { x: CELL_SIZE * 4, y: 0, color: "yellow" },
          { x: CELL_SIZE * 4, y: CELL_SIZE * 1, color: "red" },
          { x: CELL_SIZE * 5, y: CELL_SIZE * 1, color: "green" },
          { x: CELL_SIZE * 6, y: CELL_SIZE * 1, color: "blue" }
        ];
      case "O":
        return [
          { x: CELL_SIZE * 5, y: 0, color: "yellow" },
          { x: CELL_SIZE * 6, y: 0, color: "yellow" },
          { x: CELL_SIZE * 5, y: CELL_SIZE * 1, color: "yellow" },
          { x: CELL_SIZE * 6, y: CELL_SIZE * 1, color: "yellow" }
        ];
    }
  }
}
