/*--------------- Event listeners -----------------*/ 

/*HAVE QUESTIONS*/
// // Declare handler and support functions here

// // Function for sorting by name
// const sortByName = ...

// // Function for sorting by rating
// const sortByRating = ...

// // Function for handling the `nameSorter` click
// const nameSorterClickHandler = ...

// // Function to handle the `ratingSorter` click
// const ratingSorterClickHandler = ...


// // The code that runs once the DOM is loaded
// const main = () => {
//   // Select the `nameSorter` link
//   const nameSorter = document.querySelector("#name-sorter");

//   // Add an event listener
//   nameSorter.addEventListener("click", nameSorterClickHandler);

//   // Select the `ratingSorter` link
//   const ratingSorter = document.querySelector("#rating-sorter");

//   // Add an event listener
//   ratingSorter.addEventListener("click", ratingSorterClickHandler);
// }

// // Add event listener for `DOMContentLoaded`
// window.addEventListener("DOMContentLoaded", main)


console.log('Before!');
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Loaded');
});
console.log('After!')

// const firstBtn = document.querySelector("button");
// firstBtn.addEventListener("click", (event) => {
//   console.log("You clicked the button", event);
// });

const allBtns = document.querySelectorAll('.rate-button')
allBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = '#c8e6c9'
  })
})

const nameSorter = document.querySelector('#name-sorter');
  // nameSorter.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   console.log('You clicked hte name sorter');
  // });

  nameSorter.addEventListener('click', (event) => {
    event.preventDefault();
    const main = document.querySelector('main');
    const parksList = document.querySelectorAll('.park-display');
    main.innerHTML = '';
  

  const parksArray = Array.from(parksList);

  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector('h2').innerText;
    const parkBName = parkB.querySelector('h2').innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

// // Function for sorting by name
// const sortByName = (parkA, parkB) => {
//   const parkAName = parkA.querySelector("h2").innerText;
//   const parkBName = parkB.querySelector("h2").innerText;
//   if (parkAName < parkBName) {
//     return -1;
//   } else if (parkAName > parkBName) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// // Function for handling the `nameSorter` click
// const nameSorterClickHandler = (event) => {
//   event.preventDefault();
//   const main = document.querySelector("main");
//   const parksList = main.querySelectorAll(".park-display");
//   main.innerHTML = "";
//   const parksArray = Array.from(parksList);
//   parksArray.sort(sortByName);
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// };

// const nameSorter = document.querySelector("#name-sorter");
// nameSorter.addEventListener("click", nameSorterClickHandler);

/*------------------ updating the dom ------------*/
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
const numberParks = parks.length;
const newElement = document.createElement('div');

newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add('header-statement');

const header = document.querySelector('header');
header.appendChild(newElement)


// const main = document.querySelector('main');
// const park = main.querySelector('.park-display');
// main.removeChild(park);

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