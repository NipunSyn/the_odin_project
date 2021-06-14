export function home() {
  const div = document.createElement("div");
  div.className = "box";
  let h1 = document.createElement("h1");
  h1.innerText = "The official choice of foodies everywhere.";
  div.appendChild(h1);
  return div;
}
