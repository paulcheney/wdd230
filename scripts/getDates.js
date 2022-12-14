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
