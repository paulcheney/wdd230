const htmlElem = document.querySelector('html');
const pElem = document.querySelector('p');
const imgElem = document.querySelector('img');

const bgcolorForm = document.querySelector('#bgcolor');
const fontForm = document.querySelector('#font');
const imageHeightForm = document.querySelector('#imageHeight');

const lastVisitDate = document.querySelector('#lastVisit')

if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', bgcolorForm.value);
  localStorage.setItem('font', fontForm.value);
  localStorage.setItem('imageHeight', imageHeight.value);
  localStorage.setItem('lastVisitDate', new Date());
  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem('bgcolor');
  const currentFont = localStorage.getItem('font');
  const imageHeight = localStorage.getItem('imageHeight');
  const lastVisit = localStorage.getItem('lastVisitDate');

  bgcolorForm.value = currentColor;
  fontForm.value = currentFont;
  imageHeightForm.value = imageHeight;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', `https://placekitten.com/200/${imageHeight}`);
  lastVisitDate.textContent = lastVisit;
}

bgcolorForm.addEventListener('change', populateStorage);
fontForm.addEventListener('change', populateStorage);
imageHeightForm.addEventListener('change', populateStorage);


