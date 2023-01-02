//Current Weather
const myAPI = "437209d363a4387bb2f5dffcea58bbee"
const myLat = "42.9106"
const myLong = "-76.802231"
//const myWeather = `//api.openweathermap.org/data/2.5/onecall?zip=84653,us&appid=437209d363a4387bb2f5dffcea58bbee&units=imperial`

const myWeather = `//api.openweathermap.org/data/2.5/onecall?lat=${myLat}&lon=${myLong}&exclude=minutely,alerts,hourly&appid=${myAPI}&units=imperial`

// ========== Grab the weather data and W A I T
fetch(myWeather)
  .then((response) => response.json())
  .then((allData) => {
    currentWeather(allData)
  }) // end waiting

function currentWeather(weatherResults) {
  //console.log(weatherResults)
  const myTemperature = document.querySelector('#temp')
  myTemperature.textContent = weatherResults.current.temp + "°"
  const myDescription = document.querySelector('#desc')
  myDescription.textContent = weatherResults.current.weather[0].description
  const forecast = document.querySelector('#forecast')
  for (let i = 0; i < 3; i++) {
    //console.log(i)
    const day = document.createElement('span')
    day.textContent = weatherResults.daily[i].feels_like.day + "°"
    forecast.appendChild(day)
  }
}

//Member Spotlight
const url = './data/members.json';
async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  const allMembers = data.members
  //console.log(allMembers)
  const specialMembers = data.members.filter(x => x.level > 1);
  displayMembers(specialMembers)
}

getMembers();

const displayMembers = (spotList) => {
  for (let i = 0; i < 3; i++) {
    //console.log(spotList)
    //console.log(spotList.length)
    randomSpot = Math.floor(Math.random() * spotList.length);
    //console.log(randomSpot)
    selectedSpot = spotList[randomSpot]
    spotList.splice(randomSpot, 1);
    //console.log(selectedSpot)
    //console.log(spotList)
    displaySpot(selectedSpot)
  }
}


const spotCards = document.querySelector('#cards')
function displaySpot(x) {
  //console.log(x)
  const mySpot = document.createElement('section')
  mySpot.className = "spot"
  const myHeader = document.createElement('span')
  myHeader.textContent = "SPOTLIGHT"
  const myCompany = document.createElement('h2')
  myCompany.textContent=x.name
  const myLogo = document.createElement('img')
  myLogo.src=`images/${x.logopath}`
  myLogo.alt="x.name"
  const myURL = document.createElement('a')
  myURL.textContent="Visit Sponsor"
  myURL.href=x.url
  myURL.target="_blank"

  mySpot.appendChild(myHeader)
  mySpot.appendChild(myCompany)
  mySpot.appendChild(myLogo)
  mySpot.appendChild(myURL)
  spotCards.appendChild(mySpot)
}


//banner
const today = new Date()
//console.log(today.getDay())
if (today.getDay()>4) {
document.querySelector('#banner').className = "hide"
}