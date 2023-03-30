/* When does the Block start? */
const startDay=22
const startMonth=2
const startYear = 2023

const monthList= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

const blockStart = new Date(`${startMonth}/${startDay}/${startYear}`).getTime();
console.log(blockStart)

function readableDate(add) {
  let y = add * 86400000
  console.log(y)
  let x = new Date(blockStart + y )
  console.log(x)
  m = monthList[x.getMonth()]
  //console.log(m)

  d = x.getDate()
  //console.log(d)

  y = x.getFullYear()
  //console.log(y)

return `${m} ${d}, ${y}`
}

/*Build a time stamp*/


//console.log('Semester Start Date')
//console.log(readableDate(5))
const wk0due = document.querySelector('#week00')
wk0due.innerHTML = readableDate(0)

const wk1due = document.querySelector('#week01')
wk1due.innerHTML = readableDate(3)

const wk2due = document.querySelector('#week02')
wk2due.innerHTML = readableDate(10)

const endClass = document.querySelector('#endClass')
endClass.innerHTML = readableDate(43)

const registerDeadline = document.querySelector('#registerDeadline')
registerDeadline.innerHTML = readableDate(7)