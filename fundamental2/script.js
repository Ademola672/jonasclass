"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive");

// // const interface = "auto";

// function

// function logger() {
//   console.log("My name is oluwasegun");
// }
// // calling/running or invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // function makePorridge(yam, beans) {
// //   const porridge = `make with ${yam} tubers of yam and ${beans} cups of beans`;
// //   return porridge;
// // }
// // const makeHe = makePorridge(4, 8);
// // console.log(makeHe);
// // document.write(makeHe);

// function makePPorridge(yam, beans) {
//   const porridge = `make ${yam} tubers of yam and ${beans}cups of beans`;
//   return porridge;
// }

// const makeFood = makePPorridge(10, 10);
// const makeFoods = makePPorridge(100, 10);
// console.log(makeFood);
// console.log(makeFoods);

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1991);
// // console.log(age1);
////////////////////////////////////////////////////////////////
// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);
/////////////////////////////////////////////////////////////////////
//arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, FirstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${FirstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutfruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutfruitPieces(apples);
//   const orangesPieces = cutfruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces  oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//////////////////////////////////////////////////////////////////////
// const calcAge = function (year) {
//   return 2037 - year;
// };

// const yearUntilRetirement = function (birthYear, FirstName) {
//   // const age = 2037 - birthYear;
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${FirstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${FirstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearUntilRetirement(1991, "Ademola"));
// console.log(yearUntilRetirement(1970, "mike"));
/// arrays         ///////////////////////////////////////////////////////////////////////
// const friends = ["micheal", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1992, 1993, 1994);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(y.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "jonas";
// console.log(friends);

// const firstName = "jonas";
// const jones = [firstName, "schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jones);
// console.log(jones.length);

// ///////excercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);
// //array operator///////////////////////////////////////////
// const friendss = ["Michea", "Steven", "Peter"];
// //Add Element///////////////////////////////////
// const newLength = friendss.push("Jay");
// console.log(friendss);
// console.log(newLength);

// const newLength2 = friendss.unshift("John");
// console.log(friendss);
// console.log(newLength2);
// //Remove element //////////////////////
// const poppeds = friendss.pop(); ///last element of the array
// console.log(friendss);
// console.log(poppeds);

// const popped = friendss.pop(); //peter should also be gone
// console.log(friendss);
// console.log(popped);

// const shift = friendss.shift(); //First
// console.log(friendss);
// console.log(shift);

// console.log(friendss.indexOf("Steven"));
// console.log(friendss.indexOf("Bob"));

// friendss.push(23);
// console.log(friendss.includes("Steven"));
// console.log(friendss.includes("Bob"));
// console.log(friendss.includes(23));

// if (friendss.includes("Steven")) {
//   console.log("you have a called Steven");
// }
// ////////////////////////////////////////////////////object
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about jonas ? choose between firstName, lastName, age, job, and friends"
// );
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);
// ////////////////////////////////////////challenge//////////
// //jonas has 3 friends and his best friend is called michael
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends ,and his best friends is called ${jonas.friends[0]}`
// );
// object method/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const jonas = {
//   firstName: "jonas",
//   lastName: "schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   //   calcAge: function (birthYear) {
//   //     return 2037 - birthYear;
//   //   },

//   //   calcAge: function () {
//   //     return 2037 - this.birthYear;
//   //   },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver"s license`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas.['calcAge'](1991));
// console.log(jonas.getSummary());

//looop /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for loop keeps running while condition is TRue
// for (let rep = 1; rep <= 10; rep = rep + 1) {
//   console.log(`Lifting weights repetitiong 🏋️🏋️  ${rep} `);
// }
// const jonas = [
//   "jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Stevens"],
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   //reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   //filling types array ////////////////////////
//   //   types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
//continue and break///////////////////////////////////
// console.log("-----ONLY STRINGS-------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("---BREAK WITH NUMBER-----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }
//looping backwards ///////////////////////////////////////////////////////
// const jonas = [
//   "jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Stevens"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`----lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   //   console.log(`----lifting weight repetition ${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//   //   console.log(`----lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6);
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice} `);
//   if (dice === 6) console.log("loop is about to end");
// }
