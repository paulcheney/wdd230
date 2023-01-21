document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;


const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelector("nav ul");

menubutton.addEventListener("click", () => {
	menubutton.classList.toggle("open");
  menuitems.classList.toggle("open");
});


// Time between visits
const now = Date.now();
const msInDay = 1000 * 60 * 60 * 24;
let message = "Looks like your first visit"
const storedDate = localStorage.getItem('lastVisitTime')
if (storedDate != null) {
  const difference = (now - storedDate)/msInDay;
  //console.log(difference)
  if (difference>1) {
    message = `It has been ${Math.floor(difference)} days since your last visit`
  } else {
    message = `I see you were here earlier today`
  }
} 
localStorage.setItem('lastVisitTime', now)
document.querySelector('#visitCount').textContent = message;