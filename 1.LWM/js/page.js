const container = document.querySelector(".tic-tac-toe");

container.addEventListener("click", (e) => {
  const target = e.target;

  const row = target.dataset.row;
  const column = target.dataset.column;

  console.log({
    row,
    column,
  });
});
