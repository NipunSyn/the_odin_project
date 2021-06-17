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

  minidiv.appendChild(p);
  li.appendChild(minidiv);
  ul.appendChild(li);

  return ul;
}

export default () => {
  const aside = document.createElement("aside");
  aside.classList.add("flex");
  aside.classList.add("side-panel");
  aside.id = "aside";

  aside.appendChild(project());
  const button = document.createElement("button");

  const div = document.createElement("div");
  div.className = "project-div"
  button.id = "addProject";
  button.innerText = "+"
  div.appendChild(button)
  aside.appendChild(div);
  return aside;
};
