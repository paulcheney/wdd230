// Select the HTML element to manipulate
const date1 = document.querySelector("#date");

// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
	document("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#date").textContent = fulldate;

let quantity = document.querySelector('#q').value;