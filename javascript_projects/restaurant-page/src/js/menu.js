import dataBase from "./dataBase";

function leftDiv(imgSrc, title, desc) {
  let div = document.createElement("div");
  div.className = "card left";
  let imgcontainer = document.createElement("div");
  imgcontainer.className = "imgContainer";
  const image = document.createElement("img");
  image.src = imgSrc;
  let miniDiv = document.createElement("div");
  miniDiv.className = "miniDiv";
  let h1 = document.createElement("h1");
  h1.className = "foodTitle";
  h1.innerText = title;
  imgcontainer.appendChild(image);
  miniDiv.appendChild(h1);
  let p1 = document.createElement("p1");
  p1.className = "foodDescription";
  p1.innerText = desc;
  miniDiv.appendChild(p1);

  div.appendChild(miniDiv);
  div.appendChild(imgcontainer);

  return div;
}

function rightDiv(imgSrc, title, desc) {
  let div = document.createElement("div");
  div.className = "card right";
  let imgcontainer = document.createElement("div");
  imgcontainer.className = "imgContainer";
  const image = document.createElement("img");
  image.src = imgSrc;
  let miniDiv = document.createElement("div");
  miniDiv.className = "miniDiv";
  let h1 = document.createElement("h1");
  h1.className = "foodTitle";
  h1.innerText = title;
  imgcontainer.appendChild(image);
  miniDiv.appendChild(h1);
  let p1 = document.createElement("p1");
  p1.className = "foodDescription";
  p1.innerText = desc;
  
  miniDiv.appendChild(p1);
  div.appendChild(miniDiv);
  div.appendChild(imgcontainer);

  return div;
}

export function mainDiv() {
  let containerDiv = document.createElement("div");
  containerDiv.className = "menuBody";
  containerDiv.id = "menuDiv"
  const images = dataBase();
  for (let i = 0; i < images.length; i++) {
    if (i % 2 != 0) {
      containerDiv.appendChild(
        leftDiv(images[i].src, images[i].title, images[i].description)
      );
    } else {
      containerDiv.appendChild(
        rightDiv(images[i].src, images[i].title, images[i].description)
      );
    }
  }

  return containerDiv;
}
