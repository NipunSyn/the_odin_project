export default () => {
  const div = document.createElement("div");
  div.classList.add("header");
  const h1 = document.createElement("h1");
  h1.classList.add("flex");
  h1.classList.add("header-text");
  h1.innerHTML = "procrastin<span class= 'highlight'>ain't</span>.";
  div.appendChild(h1);

  return div;
};
