//Form Validation
const user1 = document.querySelector('input[name=pass1]')
const user2 = document.querySelector('input[name=pass2]')
const matchMessage = document.querySelector('#feedback')
user2.addEventListener("focusout", matchCheck);
function matchCheck() {
  if (user1.value !== user2.value) {
    matchMessage.textContent = "Usernames DO NOT MATCH"
    user1.value = "";
    user2.value = "";
    user1.focus();
  } else {
    matchMessage.textContent = ""
  }
}// end function

//Display Slider Value
const rateDisplay = document.querySelector('#rating');
const rateSlider = document.querySelector('input[type=range]');
function displayRating() {
  rateDisplay.innerHTML = rateSlider.value;
}
rateSlider.addEventListener('change', displayRating)