function Player(name, token) {
	this.name = name;
	this.token = token;
}

function createGame(player1, player2) {
	let firstPlayer = new Player(player1, "X");
	let secondPlayer = new Player(player2, "O");
	let currentPlayer = firstPlayer;
	let isGameRunning = true;

	let board = [
		["-", "-", "-"],
		["-", "-", "-"],
		["-", "-", "-"],
	];

	function switchPlayer() {
		if (currentPlayer === firstPlayer) {
			return secondPlayer;
		} else {
			return firstPlayer;
		}
	}

	function isWinner() {
		const t = currentPlayer.token;

		if (
			(board[0][0] === t && board[0][1] === t && board[0][2] === t) ||
			(board[1][0] === t && board[1][1] === t && board[1][2] === t) ||
			(board[2][0] === t && board[2][1] === t && board[2][2] === t) ||
			(board[0][0] === t && board[1][0] === t && board[2][0] === t) ||
			(board[1][0] === t && board[1][1] === t && board[2][1] === t) ||
			(board[2][0] === t && board[1][2] === t && board[2][2] === t) ||
			(board[0][0] === t && board[1][1] === t && board[2][2] === t) ||
			(board[2][0] === t && board[1][1] === t && board[0][2] === t)
		) {
			return true;
		} else return false;
	}

	function displayBoard() {
		board.forEach((row) => console.log(row));
		console.log("-----------");
	}

	function startGame() {
		while (isGameRunning) {
			const row = prompt(currentPlayer.name + " row: ");
			const col = prompt(currentPlayer.name + " column: ");
			board[row][col] = currentPlayer.token;
			displayBoard();

			if (isWinner()) {
				console.log(currentPlayer.name + " wins!");
				isGameRunning = false;
			} else {
				currentPlayer = switchPlayer();
			}
		}
	}

	return {
		currentPlayer,
		isGameRunning,
		displayBoard,
		startGame,
	};
}

const game = createGame("Rob", "Ella");
game.startGame();
