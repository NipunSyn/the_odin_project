function bookCreator(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

let listOfBooks = [];

let addBookButton = document.querySelector("#addBook");
addBookButton.addEventListener("click", openForm);

let close = document.querySelector(".btn.cancel");
close.addEventListener("click", closeForm);

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
