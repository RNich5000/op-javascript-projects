const infoText = document.getElementById("info-text");
let firstPlayer = new Player("Rob", "x");
let secondPlayer = new Player("Ella", "o");
let currentPlayer = firstPlayer;
let isGameRunning = true;

function Spot(htmlId, position) {
	this.htmlId = htmlId;
	this.position = position;
}

function Player(name, token) {
	this.name = name;
	this.token = token;
}

let board = [
	["-", "-", "-"],
	["-", "-", "-"],
	["-", "-", "-"],
];

const positions = [
	new Spot("top-left", [0, 0]),
	new Spot("top-mid", [0, 1]),
	new Spot("top-right", [0, 2]),
	new Spot("mid-left", [1, 0]),
	new Spot("mid-mid", [1, 1]),
	new Spot("mid-right", [1, 2]),
	new Spot("btm-left", [2, 0]),
	new Spot("btm-mid", [2, 1]),
	new Spot("btm-right", [2, 2]),
];

positions.forEach((pos) => {
	const ele = document.getElementById(pos.htmlId);
	ele.addEventListener("click", () => playTurn(pos));
});

function playTurn(pos) {
	if (isGameRunning && isValid(pos.position)) {
		placeToken(pos, currentPlayer.token);

		if (isWinner()) {
			isGameRunning = false;
			infoText.textContent = currentPlayer.name + " wins!";
		} else if (anySpacesLeft()) {
			switchPlayer();
		} else {
			isGameRunning = false;
			infoText.textContent = "Draw!";
		}
	}
}

function placeToken(pos, token) {
	const spot = document.getElementById(pos.htmlId);
	if (token === "x") {
		spot.classList.add("x-token");
	} else {
		spot.classList.add("o-token");
	}

	board[pos.position[0]][pos.position[1]] = token;
	const ele = document.getElementById(pos.htmlId);
}

function switchPlayer() {
	if (currentPlayer === firstPlayer) {
		currentPlayer = secondPlayer;
	} else {
		currentPlayer = firstPlayer;
	}
}

function isWinner() {
	const t = currentPlayer.token;

	if (
		(board[0][0] === t && board[0][1] === t && board[0][2] === t) || // top row
		(board[1][0] === t && board[1][1] === t && board[1][2] === t) || // middle row
		(board[2][0] === t && board[2][1] === t && board[2][2] === t) || // bottom row
		(board[0][0] === t && board[1][0] === t && board[2][0] === t) || // left column
		(board[0][1] === t && board[1][1] === t && board[2][1] === t) || // middle column
		(board[2][0] === t && board[2][1] === t && board[2][2] === t) || // right column
		(board[0][0] === t && board[1][1] === t && board[2][2] === t) || // diagonal \
		(board[2][0] === t && board[1][1] === t && board[0][2] === t) // ---diagonal /
	) {
		return true;
	} else return false;
}

function isValid([row, col]) {
	if (board[row][col] === "-") {
		infoText.textContent = "";
		return true;
	} else {
		infoText.textContent = "That spot is already taken!";
		return false;
	}
}

function anySpacesLeft() {
	if (
		board[0].some((x) => x === "-") ||
		board[1].some((x) => x === "-") ||
		board[2].some((x) => x === "-")
	) {
		return true;
	} else return false;
}
