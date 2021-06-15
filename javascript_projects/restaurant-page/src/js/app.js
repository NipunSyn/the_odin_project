import "../css/style.css";
import { header } from "./header";
import { home } from "./home";
import { mainDiv } from "./menu";
import { footer } from "./footer";
import { contact } from "./contact";

document.getElementById("content").appendChild(header());
document.getElementById("content").appendChild(home());
document.getElementById("navbar").addEventListener("click", decideInterface);

function decideInterface(e) {
  let container = document.getElementById("content");
  let children = container.children;
  console.log(children);
  if (e.target.id == "home") {
    for (let i = 0; i < children.length; i++) {
      if (
        children[i].id == "homeDiv" ||
        children[i].id == "menuDiv" ||
        children[i].id == "contactsDiv"
      ) {
        children[i].remove();
      }
    }
    container.style.height = "100vh";
    container.appendChild(home());
  } else if (e.target.id == "menu") {
    for (let i = 0; i < children.length; i++) {
      if (
        children[i].id == "homeDiv" ||
        children[i].id == "menuDiv" ||
        children[i].id == "contactsDiv"
      ) {
        children[i].remove();
      }
    }
    container.style.height = "100%";
    container.appendChild(mainDiv());
  } else if (e.target.id == "contact") {
    for (let i = 0; i < children.length; i++) {
      if (
        children[i].id == "homeDiv" ||
        children[i].id == "menuDiv" ||
        children[i].id == "contactsDiv"
      ) {
        children[i].remove();
      }
    }
    container.style.height = "100vh";
    container.appendChild(contact());
  }
}

// document.getElementById("content").appendChild(home());
// document.getElementById("content").appendChild(mainDiv());
// document.getElementById("content").appendChild(contact());

document.getElementById("content").appendChild(footer());
