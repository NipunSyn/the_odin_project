function footerText() {
  const div = document.createElement("div");
  div.className = "footerText";
  let h1 = document.createElement("h1");
  h1.textContent = "Capon Lined";
  let p = document.createElement("p");
  p.textContent = "Copyright &copy; 2021";
  div.appendChild(h1);
  div.appendChild(p);

  return div;
}

// function footerSocial() {
//   const div = document.createElement("div");
//   div.className = "social";
//   div.innerHTML = `<a href="#"><i class="fab fa-github fa-2x"></i></a>
//           <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
//           <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
//           <a href="#"><i class="fab fa-twitter fa-2x"></i></a>`;

//   return div;
// }

export function footer() {
  const footer = document.createElement("footer");
  footer.appendChild(footerText());
//   footer.appendChild(footerSocial());

  return footer
}
