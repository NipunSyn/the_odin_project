import { header, aside, footer } from "./components";

export default () => {
    let container = document.getElementById("content");
    container.appendChild(header());
    container.appendChild(aside());
    container.appendChild(footer());

    return container
}