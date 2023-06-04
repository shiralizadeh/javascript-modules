const tictactoe = new TicTacToe();
const container = document.querySelector(".tic-tac-toe");

container.addEventListener("click", (e) => {
  const target = e.target;

  const row = target.dataset.row;
  const column = target.dataset.column;

  const status = tictactoe.makeMove(row, column);

  if (status == "Ended") {
    return;
  }

  target.classList.add(`player-${tictactoe.currentPlayer}`);

  if (status == "Winner") {
    alert(`player-${tictactoe.currentPlayer == 1 ? 2 : 1} is the winner!`);
  }

  else if (status == "Draw") {
    alert(`Draw!`);
  }
});
