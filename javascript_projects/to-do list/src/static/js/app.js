// import component from "./component";
import "../css/style.css";
import { header, aside, footer } from "./components";


let container = document.getElementById("content");
container.appendChild(header());

const mainDiv = document.createElement("div");
mainDiv.className = "flex box";
mainDiv.appendChild(aside());

const viewBox = document.createElement("div");
viewBox.className = "flex view";
viewBox.id = "viewBox";
mainDiv.appendChild(viewBox);

container.appendChild(mainDiv);
container.appendChild(footer());

// document.body.appendChild(component());
