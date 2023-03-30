/* When does the Block start? */
const startMonth=2
const startDay=22
const startYear = 2023

const monthList= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

const blockStart = new Date(`${startMonth}/${startDay}/${startYear}`).getTime();
//console.log(blockStart)

function readableDate(add) {
  let y = add * 86400000
  //console.log(y)
  
  let x = new Date(blockStart + y )
  //console.log(x)

  m = monthList[x.getMonth()]
  //console.log(m)

  d = x.getDate()
  //console.log(d)

  y = x.getFullYear()
  //console.log(y)

return `${m} ${d}, ${y}`
}

document.querySelector('#endClass').innerHTML = readableDate(43)

document.querySelector('#registerDeadline').innerHTML = readableDate(7)

document.querySelector('#week00').innerHTML = readableDate(0)

document.querySelector('#week01').innerHTML = readableDate(3)

document.querySelector('#week02').innerHTML = readableDate(10)