const url = "./data/links.json";

async function goFetchData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data); // Did the data make it back?
  displayLinks(data.weeks);
}

goFetchData(); // fall the function above


//once the data arrives, display the links on the web page
const myLinks = document.querySelector("#displayLinksHere");

function displayLinks(allWeeks) {
  //console.log(allWeeks) //check that we have a JSON object to work with.
  allWeeks.forEach(item => {
    //console.log(item.week)

    const oneWeek = document.createElement("h4");
    oneWeek.textContent = `${item.week}`;

    const linksList = document.createElement("ul");
    item.links.forEach(link => {
      const listitem = document.createElement("li");
      listitem.innerHTML=`<a href="${link.url}">${link.title}</a>`
      linksList.appendChild(listitem)
    }) // end links for assignments
  
    myLinks.appendChild(oneWeek);
    myLinks.appendChild(linksList)
  }); // end for each
 
} // end function
