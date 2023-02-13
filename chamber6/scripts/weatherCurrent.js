//Current Forecast
const API = "437209d363a4387bb2f5dffcea58bbee"
const Lat = "42.9106"
const Long = "-76.802231"

const currentWeather = `//api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${API}&units=imperial`

// ========== Grab the weather data and W A I T
fetch(currentWeather)
  .then((response) => response.json())
  .then((allData) => {
    showCurrent(allData)
  }) // end waiting

  function showCurrent(allData) {
    const tempNow = document.querySelector('#temp')
    tempNow.textContent = Math.floor(allData.main.temp)+'°'
    const conditionsNow = document.querySelector('#desc')
    conditionsNow.textContent = allData.weather[0].description
    const townName = document.querySelector('#town')
    townName.textContent = allData.name
    console.log(allData)
  }

