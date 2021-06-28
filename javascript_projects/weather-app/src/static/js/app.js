import "../css/style.css";

//buttons
const button = document.getElementById("searchButton");
const display = document.getElementById("temperature");

//eventListeners
button.addEventListener("click", proceed);

//functions

function proceed() {
  const city = getValue();
  console.log(city);
  if (city) {
    getTemp(city)
      .then((data) => {
        console.log("resolved", data);
      })
      .catch((err) => {
        console.log("unresolved", err);
      });
  }
}

function getValue() {
  const inputBox = document.getElementById("searchValue");
  if (inputBox.value) {
    const input = inputBox.value;
    inputBox.value = "";
    return input;
  }
}

async function getTemp(city) {
  const response = await fetch(
    `api.openweathermap.org/data/2.5/weather?q=${city}&appid=982ec374a029fba11ec7688f37ca3b94`
  );
  if (response.status !== 200) {
    throw new Error("Couldn't Fetch Data");
  }

  const data = await response.json();
  return data;
}
