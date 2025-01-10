function Player(name, token) {
	this.name = name;
	this.token = token;
}

function createGame(player1, player2) {
	const firstPlayer = new Player(player1, "X");
	const secondPlayer = new Player(player2, "O");
	let currentPlayer = firstPlayer;

	let board = [
		["-", "-", "-"],
		["-", "-", "-"],
		["-", "-", "-"],
	];

	const switchPlayer = () => {
		if (currentPlayer === firstPlayer) {
			currentPlayer = secondPlayer;
		} else {
			currentPlayer = firstPlayer;
		}
	};

	const displayBoard = () => {
		board.forEach((row) => console.log(row));
		console.log("-----------");
	};

	function updateBoard(row, col) {
		board[row][col] = currentPlayer.token;

		displayBoard();
		switchPlayer();
	}

	return {
		displayBoard,
		updateBoard,
	};
}

const game = createGame("Rob", "Ella");
game.displayBoard();
game.updateBoard(0, 1);
game.updateBoard(0, 2);
