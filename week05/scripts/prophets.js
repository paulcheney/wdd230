const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets)
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const mySection = document.createElement('section')
    const myh2 = document.createElement('h2')
    const day = document.createElement('p')
    const place = document.createElement('p')
    const myImg = document.createElement('img')
    myh2.textContent = `${prophet.name} ${prophet.lastname}`
    day.textContent = `Date of Birth: ${prophet.birthdate}`
    place.textContent = `Place of Birth: ${prophet.birthplace}`
    myImg.setAttribute('src', prophet.imageurl);
    myImg.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    myImg.setAttribute('loading', 'lazy');
    myImg.setAttribute('width', '340');
    myImg.setAttribute('height', '440');

    mySection.appendChild(myh2)
    mySection.appendChild(day)
    mySection.appendChild(place)
    mySection.appendChild(myImg)
    cards.appendChild(mySection)
  });
}