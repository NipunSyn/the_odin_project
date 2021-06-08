//constructor for books
function bookCreator(bookName, author, isRead, isbn) {
  this.name = bookName;
  this.author = author;
  this.isRead = isRead;
  this.isbn = isbn;
}

//todo: how to use toggle switch
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }

  static switchStatus(target) {
    isbn = target.previousElementSibling.textContent;
    let parentDiv = target.parentElement;
    let sibling = target.previousElementSibling.previousElementSibling;
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        if (books[index].isRead === "Yes") {
          books[index].isRead = "No";
          sibling.textContent = "Status: Not Read";
          parentDiv.style.backgroundImage =
            "linear-gradient(var(--headone), var(--headtwo))";
        } else {
          books[index].isRead = "Yes";
          sibling.textContent = "Status: Read";
          parentDiv.style.backgroundImage =
            "linear-gradient(var(--headtwo), var(--headone))";
        }
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    if (books.length > 0) {
      document.querySelector(".display h2").textContent = "Happy Reading :)";
      if (document.querySelector(".textToRemove")) {
        document.querySelector(".textToRemove").remove();
      }
    }
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    let newDiv = document.createElement("div");
    newDiv.className = "bookCard";
    // newDiv.id = bookName;

    let infoHeader = document.createElement("p");
    infoHeader.className = "infoHeader";
    infoHeader.textContent = "Book Info";

    let bookVar = document.createElement("p");
    bookVar.className = "bookInfo";
    bookVar.textContent = `Name: ${book.name}`;

    let author = document.createElement("p");
    author.className = "bookInfo";
    author.textContent = `Author: ${book.author}`;

    let status = document.createElement("p");
    status.className = "bookInfo";
    if (book.isRead == "Yes") {
      status.textContent = "Status: Read";
      newDiv.style.backgroundImage =
        "linear-gradient(var(--headtwo), var(--headone))";
    } else {
      status.textContent = "Status: Not Read";
    }

    let uid = document.createElement("p");
    uid.className = "bookInfo";
    uid.appendChild(document.createTextNode(book.isbn));

    let button = document.createElement("button");
    button.className = "removeBook";
    button.textContent = "x";

    let toggle = document.createElement("button");
    toggle.className = "changeStatus";
    toggle.textContent = "Toggle";

    newDiv.appendChild(infoHeader);
    newDiv.appendChild(bookVar);
    newDiv.appendChild(author);
    newDiv.appendChild(status);
    newDiv.appendChild(uid);
    newDiv.appendChild(toggle);
    newDiv.appendChild(button);

    document.getElementById("books").appendChild(newDiv);
  }

  static deleteBook(target) {
    let div = target.parentElement;
    div.remove();
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);

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
    const newBook = new bookCreator(bookName, authorName, isRead, isbn);

    document.querySelector(".display h2").textContent = "Happy Reading :)";
    if (document.querySelector(".textToRemove")) {
      document.querySelector(".textToRemove").remove();
    }

    UI.addBookToList(newBook);
    Store.addBook(newBook);

    form.reset();
    closeForm();
  }
}

//Remove Item

let books = document.getElementById("books");
books.addEventListener("click", removeItem);
books.addEventListener("click", switchStatus);

function removeItem(event) {
  if (event.target.classList.contains("removeBook")) {
    if (confirm("Are You Sure?")) {
      UI.deleteBook(event.target);
      Store.removeBook(
        event.target.previousElementSibling.previousElementSibling.textContent
      );
    }
  }
}

function switchStatus(event) {
  if (event.target.classList.contains("changeStatus")) {
    // UI.changeStatus(event.target);
    Store.switchStatus(event.target);
  }
}
