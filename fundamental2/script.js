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

function cutfruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutfruitPieces(apples);
  const orangesPieces = cutfruitPieces(oranges);

  const juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces  oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
