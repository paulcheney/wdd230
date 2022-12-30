document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;


const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelector("nav ul");

menubutton.addEventListener("click", () => {
	menubutton.classList.toggle("open");
  menuitems.classList.toggle("open");
});


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