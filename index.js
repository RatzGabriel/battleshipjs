import { Ship } from "./src/Ships.js";
import { Player } from "./src/Player.js";
import { Gameboard } from "./src/Gameboard.js";
let player = new Player();
let gameboard = new Gameboard();
// pcplayer

function gameInit() {
  // gameboard()
  // gameloop()
  console.log(player);
  console.log(gameboard);
  gameboard.board[0][0] = ["X"];
  gameboard.board[1][1] = ["Y"];
  gameboard.createBoard();
  console.log(gameboard);
  console.log(gameboard);
}

gameInit();

// class Ship {
//   attacked = 0;
//   hit() {
//     this.attacked += 1;
//   }
// }

// const t = () => {
//   console.log(x.ships[0]);
//   x.ships[0].hit();
//   console.log(y);
// };

// class Player {
//   placedShips = 0;
//   enemyGameboard = null;
//   ships = [new Ship(1), new Ship(2), new Ship(3)];
// }

// class PCplayer extends Player {
//   hp = 5;
//   receive() {
//     this.hp -= 1;
//   }
// }

// const x = new Player();
// const y = new PCplayer();
// console.log(x);
// t();
// console.log(x);
