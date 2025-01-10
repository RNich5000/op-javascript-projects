function createGame(player1, player2) {
	const firstPlayer = player1;
	const secondPlayer = player2;

	let board = [
		["-", "-", "-"],
		["-", "-", "-"],
		["-", "-", "-"],
	];

	const displayBoard = () => {
		board.forEach((row) => console.log(row));
		console.log("-----------");
	};

	function updateBoard(row, col, token) {
		this.board[row][col] = token;

		displayBoard();
	}

	return { firstPlayer, secondPlayer, board, displayBoard, updateBoard };
}

const game = createGame("Rob", "Ella");
game.displayBoard();
game.updateBoard(0, 1, "X");
