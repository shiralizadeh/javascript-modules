System.register(["TicTacToe"], function () {
  let ticTacToe: any;

  return {
    setters: [
      function (ticTacToeDep) {
        ticTacToe = ticTacToeDep;
      },
    ],
    execute: () => {
      const { TicTacToe } = ticTacToe;

      console.log(TicTacToe);
    },
  };
});
