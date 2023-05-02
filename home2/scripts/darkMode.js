// Store the selected elements that we are going to use. 
const darkBtn = document.querySelector('#darkBtn');
const mainTag = document.querySelector('main');


//Toggle the dark class off and on
darkBtn.addEventListener('click', () => {
	mainTag.classList.toggle('dark');

});
