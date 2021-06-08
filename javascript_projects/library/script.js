//constructor for books
function bookCreator(bookName, author, isRead) {
  this.name = bookName;
  this.author = author;
  this.isRead = isRead;
}

//todo: figure out how to use local storage for this (shouldn't be difficult)

//keeping tabs of books
let listOfBooks = {};
let lastBookAdded = "";

//button to add new books
let addBookButton = document.querySelector("#addBook");
addBookButton.addEventListener("click", openForm);

//button to close the form
let close = document.querySelector(".btn.cancel");
close.addEventListener("click", closeForm);

//to decide what happens of clicking submit
let submit = document.querySelector("#submitButton");
submit.addEventListener("click", updateLibrary);

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function updateLibrary() {
  let form = document.getElementById("bookForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  let isbn = form["isbn"].value;
  let bookName = form["bookName"].value;
  let authorName = form["authorName"].value;
  let isRead = form["readStatus"].value;

  if (isbn != "" && bookName != "" && authorName != "" && isRead != "") {
    const newBook = new bookCreator(bookName, authorName, isRead);

    //todo change here
    listOfBooks[newBook.name] = newBook;
    lastBookAdded = newBook.name;

    form.reset();
    closeForm();
    changeFrontEnd(isbn, bookName, authorName, isRead);
  }
}

function changeFrontEnd(isbn, bookName, authorName, isRead) {
  document.querySelector(".display h2").textContent = "Happy Reading :)";
  if (document.querySelector(".textToRemove")) {
    document.querySelector(".textToRemove").remove();
  }
  addBook(isbn, bookName, authorName, isRead);
  // updateInfoCard(name);
}

function addBook(isbn, bookName, authorName, isRead) {
  newDiv = document.createElement("div");
  newDiv.className = "bookCard";
  // newDiv.id = bookName;

  let infoHeader = document.createElement("p");
  infoHeader.className = "infoHeader";
  infoHeader.textContent = "Book Info";

  let book = document.createElement("p");
  book.className = "bookInfo";
  book.textContent = `Name: ${bookName}`;

  let author = document.createElement("p");
  author.className = "bookInfo";
  author.textContent = `Author: ${authorName}`;

  let status = document.createElement("p");
  status.className = "bookInfo";
  if (isRead == "Yes") {
    status.textContent = "Status: Read";
  } else {
    status.textContent = "Status: Not Read";
  }

  let uid = document.createElement("p");
  uid.className = "bookInfo";
  uid.appendChild(document.createTextNode(isbn));

  let button = document.createElement("button");
  button.className = "removeBook";
  button.textContent = "x";

  newDiv.appendChild(infoHeader);
  newDiv.appendChild(book);
  newDiv.appendChild(author);
  newDiv.appendChild(status);
  newDiv.appendChild(uid);
  newDiv.appendChild(button);

  document.getElementById("books").appendChild(newDiv);
}

//Remove Item

let books = document.getElementById("books");
books.addEventListener("click", removeItem);

function removeItem(event) {
  if (event.target.classList.contains("removeBook")) {
    if (confirm("Are You Sure?")) {
      let div = event.target.parentElement;
      div.remove();
    }
  }
}
