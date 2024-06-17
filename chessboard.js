const black = "#";
const white = " ";
let board = "";
const size = 8;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += white;
    } else {
      board += black;
    }
  }
  board += "\n";
}

console.log(board);
