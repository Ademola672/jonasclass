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
*/

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
