var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.reset();
    }
    TicTacToe.prototype.isValidMove = function (row, column) {
        console.log(this.board);
        return this.board[row][column] == 0;
    };
    TicTacToe.prototype.makeMove = function (row, column) {
        if (!this.isInProgress) {
            return "Ended";
        }
        if (this.isValidMove(row, column)) {
            this.movesCount++;
            this.board[row][column] = this.currentPlayer;
            var status_1 = this.checkStatus();
            this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
            return status_1;
        }
        else {
            throw "Invalid";
        }
    };
    TicTacToe.prototype.checkStatus = function () {
        var leftMoves = this.size * this.size - this.movesCount;
        if (leftMoves == 0) {
            return "Draw";
        }
        var winningConditions = [
            [
                [0, 0],
                [0, 1],
                [0, 2],
            ],
            [
                [1, 0],
                [1, 1],
                [1, 2],
            ],
            [
                [2, 0],
                [2, 1],
                [2, 2],
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
            ],
            [
                [0, 1],
                [1, 1],
                [2, 1],
            ],
            [
                [0, 2],
                [1, 2],
                [2, 2],
            ],
            [
                [0, 0],
                [1, 1],
                [2, 2],
            ],
            [
                [0, 2],
                [1, 1],
                [2, 0],
            ], // Diagonals
        ];
        for (var _i = 0, winningConditions_1 = winningConditions; _i < winningConditions_1.length; _i++) {
            var condition = winningConditions_1[_i];
            var _a = condition[0], r1 = _a[0], c1 = _a[1], _b = condition[1], r2 = _b[0], c2 = _b[1], _c = condition[2], r3 = _c[0], c3 = _c[1];
            if (this.board[r1][c1] == this.currentPlayer &&
                this.board[r2][c2] == this.currentPlayer &&
                this.board[r3][c3] == this.currentPlayer) {
                this.isInProgress = false;
                return "Winner";
            }
        }
        return "Successful";
    };
    TicTacToe.prototype.reset = function () {
        var _this = this;
        this.movesCount = 0;
        this.size = 3;
        this.currentPlayer = 1;
        this.isInProgress = true;
        this.board = _.fill(Array(this.size), []);
        this.board = _.mapValues(this.board, function () { return _.fill(Array(_this.size), 0); });
    };
    return TicTacToe;
}());
