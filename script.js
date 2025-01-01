const btnList = document.getElementById("btn-display-book-list");
const btnAdd = document.getElementById("btn-add");
const btnDelete = document.getElementById("btn-delete");
const bookList = document.getElementById("book-list");
btnList.addEventListener("click", showBookList);

btnAdd.addEventListener("click", (event) => {
	// logic to add new book to list
	event.preventDefault();
	let form = document.querySelector("#new-book-form");
	let title = form.newTitle.value;
	let author = form.newAuthor.value;
	let isRead = form.newIsRead.value ? true : false;
	addBookToLibrary(title, author, isRead);
	console.log("btnAdd click");
});

btnDelete.addEventListener("click", (id) => {
	// logic to delete book from list
	console.log("btnDelete click");
});

const myLibrary = [];
let newId = 0;

function Book(id, title, author, isRead) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.isRead = isRead;
}

function addBook(form) {}

function addBookToLibrary(title, author, isRead) {
	newId++;
	myLibrary.push(new Book(newId, title, author, isRead));
}

function showBookList() {
	// show list of current books to prove that an item has been added/removed from the array
	while (bookList.firstChild) {
		bookList.removeChild(bookList.lastChild);
	}
	myLibrary.forEach((book) => {
		let listItem = document.createElement("li");
		listItem.textContent = book.title;
		bookList.appendChild(listItem);
	});
}

function displayNewBook() {
	// logic to show new book on UI
}

addBookToLibrary("test title", "test author", true);
