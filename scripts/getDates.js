document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;

const rightNow = new Date();
//console.log(rightNow);
//console.log(rightNow.getFullYear());
document.querySelector('#year').textContent = rightNow.getFullYear();

// Navigation Stuff Here
const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});

// dark mode stuff here
const modeBtn = document.querySelector('#mode');
const theMainArea = document.querySelector('main')
modeBtn.addEventListener('click', () => {
  console.log('clicked')
  modeBtn.classList.toggle('dark')
  theMainArea.classList.toggle('dark')
})

// visit count
const visitFeedback = document.querySelector('#visitCount');
let numVisits = localStorage.getItem("visits")
console.log(numVisits)
if (numVisits == null) {
  visitFeedback.textContent = "You're a first timer"
  localStorage.setItem("visits", 1);
} else {
  numVisits++;
  localStorage.setItem("visits", numVisits);
  visitFeedback.innerHTML = `You have been here ${numVisits} times &#x1F440;`
}

//Form Validation
const rateDisplay = document.querySelector('#rating');
const rateSlider = document.querySelector('input[type=range]');
function displayRating() {
  rateDisplay.innerHTML = rateSlider.value;
}
rateSlider.addEventListener('input', displayRating)

const password1 = document.querySelector('input[name=pass1]')
const password2 = document.querySelector('input[name=pass2]')
const matchMessage = document.querySelector('#feedback')
password2.addEventListener("focusout", matchCheck);
function matchCheck() {
  if (password1.value !== password2.value) {
    matchMessage.textContent = "Your so stupid"
    password2.value = "";
    password1.focus();
  }
}