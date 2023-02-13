

//banner
const today = new Date()
//console.log(today.getDay())
if (today.getDay() > 4) {
  document.querySelector('#banner').className = "hide"
}