
function createUL() {
  const ul = document.createElement("ul");

  let li1 = document.createElement("li");
  li1.className = "listItems";
  li1.innerHTML = "<a href='#'>Home</a> ";
  let li2 = document.createElement("li");
  li2.className = "listItems";
  li2.innerHTML = "<a href='#'>Menu</a> ";
  let li3 = document.createElement("li");
  li3.className = "listItems";
  li3.innerHTML = "<a href='#'>Contact</a> ";
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  return ul;
}

const ul = createUL();

export function header() {
  const nav = document.createElement("nav");
  const h1 = document.createElement("h1");
  const div = document.createElement("div");

  h1.innerText = "Capon Lined";
  div.appendChild(h1);
  div.appendChild(ul);
  nav.appendChild(div);

  return nav;
}
