export default () => {
  const div = document.createElement("div");
  div.classList.add("flex");
  div.classList.add("footer");
  const h2 = document.createElement("h2");
  h2.innerHTML = "procrastin<span class='highlight'>ain't</span>.";
  h2.classList.add("footer-text-one");
  const p = document.createElement("p");
  p.innerHTML = "Copyright <span class='highlight'>&copy;</span> 2021";
  p.classList.add("footer-text-two");
  div.appendChild(h2);
  div.appendChild(p);

  return div;
};
