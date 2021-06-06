const descriptions = document.querySelectorAll('.description-display')

for (let desc of descriptions.values()) {
  let content = desc.innerText;
  if (content.length > 250) {
    content = content.slice(0, 250) + '<a href="#">...</a>'/* + "..."*/;
    //content += ;
  }
  desc.innerHTML = content;
}


const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}


const parks = document.querySelectorAll('.park-display');
const numberParks =parks.length;
const newElement = document.createElement('div');

newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add('header-statement');

const header = document.querySelector('header');
header.appendChild(newElement)


const main = document.querySelector('main');
const park = main.querySelector('.park-display');
main.removeChild(park);

/*---------------selecting Elements on DOM-----------*/
// console.log(document);

// const heading = document.querySelector("h1");
// console.log(heading);

// const classValue = document.querySelector('.value')
// console.log(classValue)

// const button = document.querySelector("button")
// console.log(button)

// const divStat = document.querySelector('.stat div')
// console.log(divStat)

// const hello = document.querySelector('.hello')
// console.log(hello)

// const buttons = document.querySelectorAll("button");
// console.log(buttons);


// // Get a list of all `<h3>` elements
// const heading3List = document.querySelectorAll("h3");

// // // Iterate over the list and print each one
// // for (let element of heading3List.values()) {
// //   console.log(element);
// // }

// for (let i = 0; i < heading3List.length; i++) {
//   const element = heading3List[i];
//   console.log(element);
// }

// const divs = document.querySelectorAll('.rating-display')
// console.log(divs)

// for (const rating of divs.values()) {
//   console.log(rating)
// }

// const areas = document.querySelectorAll('.area-display .value')
// console.log(areas)

// for (let i = 0; i < areas.length; i++) {
//   const area = areas[i]
//   console.log(area)
// }