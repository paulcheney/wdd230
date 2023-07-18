import {blockStart, blockEnd, week2start, monthList} from './starts.js';


function readableDate(startPoint, add) {
   
  let x = new Date(startPoint + (add * 86400000))
  //console.log(x)

  let m = monthList[x.getMonth()]
  //console.log(m)

  let d = x.getDate()
  //console.log(d)

  let y = x.getFullYear()
  //console.log(y)

return `${m} ${d}, ${y}`
}

document.querySelector('#sendWelcomeEmail').innerHTML = readableDate(blockStart, -3)

document.querySelector('#classStart').innerHTML = readableDate(blockStart, 0)
document.querySelector('#classEnd').innerHTML = blockEnd;

// these dates are 7 and 15  days after the block starts
document.querySelector('#registerDeadline').innerHTML = readableDate(blockStart, 7)
document.querySelector('#dropDeadline').innerHTML = readableDate(blockStart, 15)

// Week 1 changes length every block
document.querySelector('#week01start').innerHTML = readableDate(blockStart, 0)
document.querySelector('#week01report').innerHTML = readableDate(week2start, -2)

//Week 2 starts on a Monday
document.querySelector('#week02start').innerHTML = readableDate(week2start, 0)
document.querySelector('#week02report').innerHTML = readableDate(week2start, 5)

//Week 3 starts on a Monday
document.querySelector('#week03start').innerHTML = readableDate(week2start, 7)
document.querySelector('#week03report').innerHTML = readableDate(week2start, 12)

//Week 4 starts on a Monday
document.querySelector('#week04start').innerHTML = readableDate(week2start, 14)
document.querySelector('#week04report').innerHTML = readableDate(week2start, 19)

//Week 5 starts on a Monday
document.querySelector('#week05start').innerHTML = readableDate(week2start, 21)
document.querySelector('#week05report').innerHTML = readableDate(week2start, 26)

//Week 6 starts on a Monday
document.querySelector('#week06start').innerHTML = readableDate(week2start, 28)
document.querySelector('#week06report').innerHTML = readableDate(week2start, 33)

//Week 7 starts on a Monday
document.querySelector('#week07start').innerHTML = readableDate(week2start, 35)
document.querySelector('#classOver').innerHTML = readableDate(blockEnd, 0);

//Semester Ends on Wednesday
document.querySelector('#week07report').innerHTML = readableDate(blockEnd, 0);