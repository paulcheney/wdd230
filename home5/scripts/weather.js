//Current Weather

const myAPI = "437209d363a4387bb2f5dffcea58bbee"
const myWeather = `//api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=437209d363a4387bb2f5dffcea58bbee&units=imperial`

// ========== Grab the weather data and W A I T
fetch(myWeather)
.then((response) => response.json())
.then((allData) => {
    currentWeather(allData)
}) // end waiting

function currentWeather(weatherResults) {
  console.log(weatherResults)
  const myTemperature = document.querySelector('#temp')
  myTemperature.textContent = weatherResults.main.temp
  const myDescription = document.querySelector('#desc')
  myDescription.textContent = weatherResults.weather[0].description
  const myIcon = document.querySelector('#icon')
  myIcon.src=`https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`
  myIcon.alt=weatherResults.weather[0].description
}