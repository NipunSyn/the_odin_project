// header

export function header() {
  const div = document.createElement("div");
  div.classList.add("header");
  const h1 = document.createElement("h1");
  h1.classList.add("flex");
  h1.classList.add("header-text");
  h1.innerHTML = "procrastin<span class= 'highlight'>ain't</span>.";
  div.appendChild(h1);

  return div;
}

//aside
function project() {
  const ul = document.createElement("ul");
  ul.id = "projectList";
  ul.classList.add("project-list");
  const li = document.createElement("li");
  li.classList.add("project");
  const minidiv = document.createElement("div");
  minidiv.classList.add("project-div");
  const p = document.createElement("p");
  p.classList.add("project-name");
  p.innerText = "Today";
  minidiv.id = "Today";
  minidiv.appendChild(p);
  li.appendChild(minidiv);
  ul.appendChild(li);

  return ul;
}

export function aside() {
  const aside = document.createElement("aside");
  aside.classList.add("flex");
  aside.classList.add("side-panel");
  aside.id = "aside";

  const div = document.createElement("div");
  div.className = "project-div";
  div.id = "addProject";
  div.innerHTML = "+";
  aside.appendChild(div);

  aside.appendChild(project());

  const mainDiv = document.createElement("div");
  mainDiv.className = "flex box";
  mainDiv.appendChild(aside);

  const viewBox = document.createElement("div");
  viewBox.className = "flex view";
  viewBox.id = "viewBox";

   const h1 = document.createElement("h1");
   h1.id = "projectTitle";
   h1.className = "project-title";
   h1.innerText = "Today";

   viewBox.appendChild(h1)

  const ul = document.createElement("ul");
  ul.id = "toDoList";
  ul.classList.add("to-do-list");

  const toDoDiv = document.createElement("div");
  toDoDiv.className = "to-do-div";
  toDoDiv.id = "addToDo";
  toDoDiv.innerHTML = "Add something";

  viewBox.appendChild(toDoDiv);
  viewBox.appendChild(ul);

  mainDiv.appendChild(viewBox);

  return mainDiv;
}

//footer

export function footer() {
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
}
