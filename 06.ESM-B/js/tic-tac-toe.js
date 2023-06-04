export class TicTacToe {
    constructor() {
        this.board = [];
        this.size = 3;
        this.movesCount = 0;
        this.isInProgress = true;
        this.currentPlayer = 1;
        // this.reset();
    }
    isValidMove(row, column) {
        return this.board[row][column] == 0;
    }
    makeMove(row, column) {
        if (!this.isInProgress) {
            return "Ended";
        }
        if (this.isValidMove(row, column)) {
            this.movesCount++;
            this.board[row][column] = this.currentPlayer;
            const status = this.checkStatus();
            this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
            return status;
        }
        else {
            throw "Invalid";
        }
    }
    checkStatus() {
        const leftMoves = this.size * this.size - this.movesCount;
        if (leftMoves == 0) {
            return "Draw";
        }
        const winningConditions = [
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
        for (const condition of winningConditions) {
            const [[r1, c1], [r2, c2], [r3, c3]] = condition;
            if (this.board[r1][c1] == this.currentPlayer &&
                this.board[r2][c2] == this.currentPlayer &&
                this.board[r3][c3] == this.currentPlayer) {
                this.isInProgress = false;
                return "Winner";
            }
        }
        return "Successful";
    }
    reset() {
        import('lodash').then((_) => {
            this.board = _.fill(Array(this.size), []);
            _.mapValues(this.board, () => _.fill(Array(this.size), 0));
        });
    }
}
