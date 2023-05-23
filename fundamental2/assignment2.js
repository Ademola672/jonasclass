"use strict";
// const sumDolphins = 44 + 23 + 71;
// const sumKoalas = 65 + 54 + 49;

// console.log(sumDolphins, sumKoalas);

// const calcAverage = (dolphins) => sumDolphins / 3;

// calcAverage();

// // const doubleDolphins = avgDolphins * 2;
// // const doubleKoalas = avgKoalas * 2;

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > doubleKoalas) {
//     return `dolphins win ${avgDolphins} vs ${doubleKoalas}`;
//   } else if (avgKoalas > doubleDolphins) {
//     return `koalas win ${koalasAverage} vs ${dolphinAverage}`;
//   } else {
//     return `no winner dolphins ${avgDolphins} vs ${avgKoalas} koalas`;
//   }
// };

const calcAverage = (a, b, c) => (a + b + c) / 3;

// text 1//////////////////////////////////////////////////////////////////////////////////////
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win the trophy (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win the trophy (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No Winner");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

//test 2
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No Winner");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

/////////////////////////array assignment /////////////////////////////
const bills = [125, 555, 44]; ///////actual bill
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2; ////////returns the tip calculations
};

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //////// arrow function

const tip1 = calcTip(bills[0]); /////tip for the first element
console.log(tip1);

const tip2 = calcTip(bills[1]); /////tip for the second element
console.log(tip2);

const tip3 = calcTip(bills[2]); /////tip for the third element
console.log(tip3);

const tips = [tip1, tip2, tip3]; ///////array for the tips
console.log(tips);

const calcTotal = function (bills, tips) {
  return bills + tips; // returns the total calculations  i.e bill + tips
};

const total1 = calcTotal(bills[0], tips[0]); //// toytal for bill 1
const total2 = calcTotal(bills[1], tips[1]); //// toytal for bill 2
const total3 = calcTotal(bills[2], tips[2]); //// toytal for bill 3

const total = [total1, total2, total3]; ///// arrays for the total
console.log(total);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBmi(), john.calcBmi());
// document.write(mark.calcBmi(), john.calcBmi());
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} ${
      mark.lastName
    }'s BMI ${mark.calcBmi()} is higher than ${john.firstName} ${
      john.lastName
    }'s BMI ${john.calcBmi()}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} ${
      john.lastName
    }'s BMI ${john.calcBmi()} is higher than ${mark.firstName} ${
      mark.lastName
    }'s BMI ${mark.calcBmi()}`
  );
} else {
  console.log(
    `${mark.firstName} ${
      mark.lastName
    }'s BMI ${mark.calcBmi()} is the same as ${john.firstName} ${
      john.lastName
    }'s BMI ${john.calcBmi()}`
  );
}
