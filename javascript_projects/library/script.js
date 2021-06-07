//constructor for books
function bookCreator(bookName, author, isRead) {
  this.name = bookName;
  this.author = author;
  this.isRead = isRead;
}

//keeping tabs of books
let listOfBooks = [];
let finished = 0;

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

  let name = form["name"].value;
  let bookName = form["bookName"].value;
  let authorName = form["authorName"].value;
  let isRead = form["readStatus"].value;

  if (name != "" && bookName != "" && authorName != "" && isRead != "") {
    const newBook = new bookCreator(bookName, authorName, isRead);

    listOfBooks.push(newBook);

    form.reset();
    closeForm();
    changeFrontEnd(name, bookName, authorName, isRead);
  }
}

function changeFrontEnd(name, bookName, authorName, isRead) {
  document.querySelector(".display h2").textContent = "Happy Reading :)";
  if (document.querySelector(".textToRemove")) {
    document.querySelector(".textToRemove").remove();
  }
  addBook(bookName, authorName, isRead);
  updateInfoCard(name);
}

function addBook(bookName, authorName, isRead) {
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
    finished += 1;
    status.textContent = "Status: Read";
  } else {
    status.textContent = "Status: Not Read";
  }

  let button = document.createElement("button");
  button.className = "removeBook";
  button.textContent = "x";

  newDiv.appendChild(infoHeader);
  newDiv.appendChild(book);
  newDiv.appendChild(author);
  newDiv.appendChild(status);
  newDiv.appendChild(button);

  document.getElementById("books").appendChild(newDiv);
}

function updateInfoCard(name) {
  let nameOfPerson = document.getElementById("userName");
  nameOfPerson.textContent = name;

  let numBooks = document.getElementById("booksAdded");
  numBooks.textContent = listOfBooks.length;

  let finishedBooks = document.getElementById("booksFinished");
  finishedBooks.textContent = finished;

  let lastBook = document.getElementById("lastBookAdded");
  lastBook.textContent = listOfBooks[listOfBooks.length - 1].name;
}

let books = document.getElementById("books");

books.addEventListener("click", removeItem);

//Remove Item

function removeItem(event) {
  if (event.target.classList.contains("removeBook")) {
    if (confirm("Are You Sure?")) {
      let div = event.target.parentElement;
      books.removeChild(div);
      let name = event.target.parentElement.id;
      index = listOfBooks.indexOf(listOfBooks[name]);
      listOfBooks.splice(index, 1);
    }
  }
}
