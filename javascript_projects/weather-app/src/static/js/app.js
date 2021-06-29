import "../css/style.css";
import Weather from "./weather";

document.addEventListener("DOMContentLoaded", () => {
  Weather.fetchWeather("New York");
});

document.querySelector(".search-btn").addEventListener("click", () => {
  Weather.search();
});

document.querySelector(".search-text").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    Weather.search();
  }
});

document.querySelector(".weather-div").addEventListener("click", Weather.changeMetrics);

//functions 
