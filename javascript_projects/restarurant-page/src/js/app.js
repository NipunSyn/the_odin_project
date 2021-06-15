import "../css/style.css";
import { header } from "./header";
import { home } from "./home";
import { mainDiv } from "./menu";
import { footer } from "./footer";

document.getElementById("content").appendChild(header());

// document.getElementById("content").appendChild(home());
document.getElementById("content").appendChild(mainDiv());

document.getElementById("content").appendChild(footer());

