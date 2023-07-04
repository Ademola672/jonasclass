"use strict";
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);


const flight = "LM234";
const jonas = {
  name: "jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LM999";
  passenger.name = "Mr" + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("checked in");
  } else {
    alert("Wrong passport!");
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Trandsformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};
//JS uses callbacks all the time
// document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);


const bi = function (str) {
  return str.replace(/ /g, " ").toUpperCase();
};

const tol = function (pan) {
  const [first, ...others] = pan.split(" ");
  return [first.toUpperCase(), ...others];
};

const oga = function (biro, pen) {
  console.log(`${biro}`);
  console.log(`${pen(biro)}`);
};

oga("betTer dAys aheAd", tol);
oga("betTer dAys aheAd", bi);


// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Ademola");
// greeterHey("Oluwasegun");

//
// greet("hello")("Durotimi");
//arrow function
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");
greeterHey("Ademola");
greeterHey("Oluwasegun");


const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //book: function() {}

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Ademola Oluwasegun".toUpperCase());
lufthansa.book(639, "Ademola Dami".toUpperCase());
// console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

//Does NOT work
//book(23, 'Sarah Williams')
//Call method
book.call(eurowings, 23, "Olude Mariam");
// console.log(eurowings);

book.call(lufthansa, 239, "Olude baby");

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 124, "Ademola Coutinho");

//Aplly method
const flightData = [583, "luk doncic"];
// book.apply(swiss, flightData); //new way book.call(swiss, ...flightData)
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
// book.call(eurowings, 23, 'sarah williams')

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "steve harvey");
bookLH(23, "steve harvey");
bookLX(23, "steve harvey");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas schmedtmann");
bookEW23("Agbani Darego");
bookEW23("Labron James");

//with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value  => value + value * rate;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT(23));


const runOnce = function () {
  console.log("this will never runn again");
};

runOnce();
// IIFE
(function () {
  console.log("this will never run again");
})();

(() => console.log("this will ALSO never run again"))();


const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// const perGroup = 1000;
boardPassengers(180, 3);
*/
