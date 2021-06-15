export function contact() {
  const div = document.createElement("div");
  div.className = "box";
  div.id = "contactsDiv"
  let h2 = document.createElement("h2");
  h2.innerText = "Address";
  let p = document.createElement("p");
  p.innerText = "Capon Lined, 221B Baker Street, Autobot City, Nowhere Land"
  div.appendChild(h2);
  div.appendChild(p);

  return div;
}
