// const continet = "Africa";
// const country = "Nigeria";
// const population = 200000000;

// console.log(continet);
// console.log(country);
// console.log(population);

let markHeight = 1.69;
let markWeight = 78000;
let johnHeight = 1.95;
let johnWeight = 92000;

let markBMI = console.log(markWeight / (markHeight + markHeight));
let johnBMI = console.log(johnWeight / (johnHeight + johnHeight));

// let markHigherBMI = console.log(markBMI > johnBMI);

// text data 2
markHeight = 1.88;
markWeight = 95000;
johnHeight = 1.76;
johnWeight = 85000;

markBMI = console.log(markWeight / (markHeight + markHeight));
johnBMI = console.log(johnWeight / (johnHeight + johnHeight));

// markHigherBMI = console.log(markBMI > johnBMI);

// correction

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than john's(${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

//3rd code challenge for dolphins and koalas

// const sumDolphins = 96 + 108 + 89;
// const sumKoalas = 88 + 91 + 110;
// const avgDolphins = sumDolphins / 3;
// const avgKoalas = sumKoalas / 3;

// console.log(avgDolphins);
// console.log(avgKoalas);

// if (avgDolphins > avgKoalas) {
//   console.log("Dolphin wins the tournament");
// } else if (avgDolphins === avgKoalas) {
//   console.log(" we have a tie");
// } else {
//   console.log(" Koalas wins the tournament");
// }

//3rd code challenge section 2

//Bonus 1
const sumDolphins = 97 + 112 + 101;
const sumKoalas = 109 + 95 + 123;
const avgDolphins = sumDolphins / 3;
const avgKoalas = sumKoalas / 3;
const winReq = 100;

console.log(avgDolphins);
console.log(avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins take the trophy home");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log("Koalas wins the tournamen");
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("both team wins the tournament");
} else {
  console.log("No one wins the trophy");
}

// ternary assignment

const bill = 40;

const tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : bill * 0.2;

console.log(
  ` the bill was ${bill}, and the tip was ${tip}, and the total value is ${
    bill + tip
  } `
);
