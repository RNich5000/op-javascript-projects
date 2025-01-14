const infoText = document.getElementById("info-text");
let firstPlayer = new Player("Rob", "x");
let secondPlayer = new Player("Ella", "o");
let currentPlayer = firstPlayer;

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
	if (isValid(pos.position)) {
		placeToken(pos.htmlId, currentPlayer.token);

		if (isWinner()) {
			console.log("winner!");
			disableEventListeners();
			infoText.textContent = currentPlayer.name + " wins!";
		} else if (anySpacesLeft()) {
			switchPlayer();
		} else {
			disableEventListeners();
			infoText.textContent = "Draw!";
		}
	}
}

function disableEventListeners() {
	positions.forEach((pos) => {
		const ele = document.getElementById(pos.htmlId);
		ele.removeEventListener("click", playTurn);
	});
}

function placeToken(id, token) {
	const spot = document.getElementById(id);
	if (token === "x") {
		spot.classList.add("x-token");
	} else {
		spot.classList.add("o-token");
	}

	const ele = document.getElementById(id);
	ele.removeEventListener("click", playTurn);
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
		(board[0][0] === t && board[0][1] === t && board[0][2] === t) ||
		(board[1][0] === t && board[1][1] === t && board[1][2] === t) ||
		(board[2][0] === t && board[2][1] === t && board[2][2] === t) ||
		(board[0][0] === t && board[1][0] === t && board[2][0] === t) ||
		(board[1][0] === t && board[1][1] === t && board[2][1] === t) ||
		(board[2][0] === t && board[2][1] === t && board[2][2] === t) ||
		(board[0][0] === t && board[1][1] === t && board[2][2] === t) ||
		(board[2][0] === t && board[1][1] === t && board[0][2] === t)
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
