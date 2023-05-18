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
