const url = './data/members.json';
const cards = document.querySelector('#members');

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.members);
  displayMembers(data.members)
}

getMembers();

const displayMembers = (allMembers) => {
  allMembers.forEach((member) => {
    const myName = document.createElement('h3')
    myName.textContent= member.name;
    const myAddress = document.createElement('p')
    myAddress.textContent = member.address
    const myPhone = document.createElement('p')
    myPhone.textContent = member.phone
    const myURL = document.createElement('p')
    myURL.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`
    const myLogo = document.createElement('img')
    myLogo.src=`./images/${member.logopath}`
    const myLevel = document.createElement('img')
    switch(member.level) {
      case 1:
        myLevel.src = "./images/level-bronze.png"
        myLevel.alt="Bronze"
        break;
      case 2:
        myLevel.src = "./images/level-silver.png"
        myLevel.alt="Silver"
        break;
        case 3:
          myLevel.src = "./images/level-gold.png"
          myLevel.alt="Gold"
        break;
      default:
        myLevel.src = "./images/level-nfp.png"
        myLevel.alt="Npt for Profit"
    }
    const mySection = document.createElement('section')
    mySection.appendChild(myLogo)
    mySection.appendChild(myName)
    mySection.appendChild(myAddress)
    mySection.appendChild(myPhone)
    mySection.appendChild(myURL)
    mySection.appendChild(myLevel)
    cards.appendChild(mySection)
  });
}

const setGrid = document.querySelector('#btnGrid')
const setList = document.querySelector('#btnList')
setGrid.addEventListener('click',() => {
  setGrid.className="active"
  setList.className=""
  cards.className='grid'
})
setList.addEventListener('click',() => {
  setList.className="active"
  setGrid.className=""
  cards.className='list'
})