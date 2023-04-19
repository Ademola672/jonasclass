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

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (26.8) is higher than john's(27.4)`);
} else {
  console.log(`John's BMI (27.4) is higher than Mark's (26.8)`);
}
