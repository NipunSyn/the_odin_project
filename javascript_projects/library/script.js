function bookCreator(name, author, isRead) {
  this.name = name;
  this.author = author;
  this.isRead = isRead;
}

let listOfBooks = [];

let addBookButton = document.querySelector("#addBook");
addBookButton.addEventListener("click", openForm);

let close = document.querySelector(".btn.cancel");
close.addEventListener("click", closeForm);

let submit = document.querySelector("#submitButton");
submit.addEventListener("click", updateLibrary);

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function updateLibrary() {
  document.getElementById("popupForm").style.display = "none";
  //   let userName = document.querySelector("#name").value;
  let bookName = document.querySelector("#bookName").value;
  let authorName = document.querySelector("#authorName").value;
  let isRead = document.querySelector("#Yes").value;

  const newBook = new bookCreator(bookName, authorName, isRead);

  listOfBooks.push(newBook);
  console.log[listOfBooks[0]];
}
