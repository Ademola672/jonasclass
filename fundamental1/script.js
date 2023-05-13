/*let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);*/

// let year = "tyui";

// console.log(year);
// console.log(typeof year);

// let biro = 2;

// console.log(biro);
// console.log(typeof biro);

// let accepted = true;

// console.log(accepted);
// console.log(typeof accepted);

// let pen;

// console.log(pen);
// console.log(typeof pen);

// pen = 7;
// console.log(typeof null);

//math operators
// const now = 2098;
// const ageSegun = now - 1997;
// const ageTosin = now - 2002;

// console.log(ageSegun, ageTosin);
// console.log(ageTosin * 2, ageSegun / 10, 2 ** 3);
// 2 **3 means 2 to the power of 3 = 2*2*2

const middleName = "segun";
const firstName = "Ademola";

console.log(typeof middleName + " " + firstName);

// Assignment operators
// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; //x = x * 25 = 100
// x++; // x + 1 = 101
// x--; //x - 1 = 100
// x--; // x -1 = 99
// console.log(x);

//comparison operators
// console.log(ageSegun > ageTosin); // <, >, <=,>=
// console.log(ageTosin >= 18);

// const isFullAge = ageTosin >= 18;

// console.log(now - 1997 > now - 2002);

// const now = 2098;
// const ageSegun = now - 1997;
// const ageTosin = now - 2002;

// console.log(now - 1997 > now - 2002);

// let x, y;
// x = y = 25 - 10 - 5; //x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageSegun + ageTosin) / 2;
// console.log(ageSegun, ageTosin, averageAge);

// const lastName = "Oluwasegun";
// const job = "programmer";
// const birthYear = 1997;
// const year = 2023;

// const oluwasegunNew = `i'm ${lastName}, a ${
//   year - birthYear
// } years old ${job}!`;
// console.log(oluwasegunNew);

// console.log(`just a regular String...`);

// console.log(`string
// with
// multiple
// lines`);

// const age = 10;

// if (age >= 18) {
//   console.log("sarah can start driving 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`sarah is too young,wait another ${yearsLeft}years`);
// }

// const birthYear = 2937;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// type conversion

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23));
// console.log(String(23) + "rd");

// //type coercion
// console.log("I am " + 23 + "years old");

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Dont't spend it all");
// } else {
//   console.log("you should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("height is undefined");
// }

//euality class with else and if again

// const age = "18";

// if (age === 18) console.log("you just became an adult");

// if (age == 18) console.log("you jiust became an adult loose");

// const favorite = Number(prompt("whats your fave number ?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favorite !== 23) console.log("why not 23");

//logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log(" sarah is able to drive");
} else {
  console.log(" someoneelse should drive... ");
}

const isTired = false;
const oldEnough = true;

console.log(hasDriversLicense && hasGoodVision && !isTired && oldEnough);

if (hasDriversLicense && hasGoodVision && !isTired && !oldEnough) {
  console.log("sarah is able to drive");
} else {
  console.log(" someoneelse should drive ");
}

const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log(" Go to coding meet up ");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "fridays":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}
//switch statement to if else statement
// const day = "monday";

if (day === "monday") {
  console.log("Plan course structure");
  console.log(" Go to coding meet up ");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

//conditional operator a.k.a ternary operator
const age = 23;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log(" like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
