let myLibrary = [];
let newId = 0;

function Book(id, title, author, isRead) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.isRead = isRead;
}

const btnList = document.getElementById("btn-display-book-list");
const btnAdd = document.getElementById("btn-add");
const bookList = document.getElementById("book-list");
btnList.addEventListener("click", showBookList);

btnAdd.addEventListener("click", (event) => {
	// logic to add new book to list
	event.preventDefault();
	let form = document.querySelector("#new-book-form");
	let title = form.newTitle.value;
	let author = form.newAuthor.value;
	let isRead = form.newIsRead.value ? true : false;
	createBook(title, author, isRead);
});

function createBook(title, author, isRead) {
	newId++;
	const book = new Book(newId, title, author, isRead);
	myLibrary.push(book);
	displayNewBook(book);
}

function showBookList() {
	while (bookList.firstChild) {
		bookList.removeChild(bookList.lastChild);
	}
	myLibrary.forEach((book) => {
		let listItem = document.createElement("li");
		listItem.textContent = book.title;
		bookList.appendChild(listItem);
	});
}

function displayNewBook(book) {
	let div = document.createElement("div");
	div.classList.add("book");
	div.id = `book-${book.id}`;

	let pTitle = document.createElement("p");
	pTitle.classList.add("title");
	pTitle.textContent = book.title;

	let pAuthor = document.createElement("p");
	pAuthor.classList.add("author");
	pAuthor.textContent = book.author;

	let bDelete = document.createElement("button");
	bDelete.classList.add("btn-delete");
	bDelete.textContent = "Delete";
	bDelete.addEventListener("click", () => deleteBook(book.id));

	div.appendChild(pTitle);
	div.appendChild(pAuthor);
	div.appendChild(bDelete);

	let lib = document.getElementById("library");
	lib.appendChild(div);
}

function deleteBook(id) {
	myLibrary = myLibrary.filter((book) => {
		return book.id !== id;
	});

	const divToDelete = document.getElementById(`book-${id}`);
	divToDelete.remove();
}

createBook("test title", "test author", true);
