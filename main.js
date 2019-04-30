console.log("Hello, World!");
const output = document.querySelector("#output");


businesses.filter(business => {
  // console.log("business", business);
  let inNewYork = false;

  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }
  return inNewYork;
});

businesses.filter(biz => biz.addressStateCode === "NY")
  .forEach(business => {
    // console.log(business);
    output.innerHTML +=
      `<h2>${business.companyName}</h2>
            <address>${business.addressStateCode}</address>            
            <hr>`
  });

function showBusiness(business) {
  return `<div>
            <h2>
              ${business.companyName}
            </h2>
          </div>`
};

let newStuff = businesses.map(showBusiness);
output.innerHTML += newStuff.join(`<hr>`);

// -------------------------------------------------------------------------

const candies = [
  {
    name: "Lollipop",
    price: 2.99
  },
  {
    name: "Tootsie Roll",
    price: 1.49
  },
  {
    name: "Sugar Daddy",
    price: 2.49
  }
];

const firstCheapCandy = candies.find(candy => candy.price < 2.00)
// console.log(firstCheapCandy);

// -------------------------------------------------------------------------

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => {
  // console.log("current Total", currentTotal, "nextValue", nextValue);
  return currentTotal += nextValue;
});

// console.log("Rainfall", totalRainfall)

// ---------------------------------------------------------------------------

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((currentString, nextWord) => {
  // console.log("current string:", currentString);
  return currentString += ` ${nextWord}`;
});
output.innerHTML += `<h3>${sentence}</h3>`;
// console.log(sentence);

// -----------------------------------------------------------------------------

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
  const isLarger = business.orders.find(order => order >= 9000)
  // console.log("Name", business.companyName, "Is Larger", isLarger);
  if (isLarger !== null){
    return isLarger;
  }
});
console.log(bigSpenders);

// ----------------------------------------------------------------------------

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetDiv = document.querySelector("#planets");

// planets.forEach(planet => {
//   planetDiv.innerHTML += `<h3>${planet}</h3>`
// });

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.map(planet => {
  let upperPlanet = planet.charAt(0).toUpperCase() + planet.slice(1);
  console.log("uppercase: ", upperPlanet);
  planetDiv.innerHTML += `<h3>${upperPlanet}</h3>`
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const ePlanets = planets.filter(planet => planet.includes("e"));
console.log("planets with an e", ePlanets);


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

// -------------------------------------------------------------------------------------------------------

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

function mult(num){
  return ((num * 1.5) - 1);
};

const sorted = integers.sort((a, b) => {return a-b})
  .filter(integer => integer <= 19)
    .map(int => mult(int))
      .reduce((current, next)=> current += next);
      
console.log("sorted, adjusted and summed: ", sorted);

// -------------------------------------------------------------------------------------------------------

console.log("database", salesDatabase);


