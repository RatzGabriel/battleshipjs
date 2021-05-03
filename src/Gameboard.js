class Gameboard {
  board = [
    [[""], [""], [""]],
    [[""], [""], [""]],
    [[""], [""], [""]],
  ];
  createBoard() {
    const div = document.getElementById("board");
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        const divInner = document.createElement("div");
        divInner.innerText = this.board[i];
        console.log(divInner);
        div.appendChild(divInner);
      }
    }
  }
}

export { Gameboard };
