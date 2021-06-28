export default class Weather {
  static fetchWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=982ec374a029fba11ec7688f37ca3b94`
    )
      .then((response) => response.json())
      .then((data) => Weather.displayWeather(data))
      .catch((err) => {
        alert("Couldn't find the city");
        document.querySelector("#searchValue").value = "";
      });
    // console.log(data)
  }
  static displayWeather(data) {
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = `${temp}°C`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Windspeed: ${speed}km/h`;
    document.querySelector(".weather-div").classList.remove("loading");
    document.querySelector("#searchValue").value = "";
    // document.querySelector("#searchValue").value = "";
  }
  static search() {
    const city = document.querySelector("#searchValue").value;
    if (city) {
      Weather.fetchWeather(city);
    }
    // console.log(document.querySelector("#searchValue").value);
    // console.log("The key is",this.apiKey)
  }
}
