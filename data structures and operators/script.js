"use strict";
/*
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} `
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
//////////////////////////////////////////////////////////////////////////////////////
// Working with string part 3
//split and join
console.log("a +very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("ademola oluwasegun");

//padding
const message = "Go to gate 23!";
console.log(message.padStart(15, "+").padEnd(16, "+"));
console.log("jonas".padStart(25, "+").padEnd(27, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; //it turns to a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard("758483747748938033"));
console.log(maskCreditCard(8484884848484848));

//Repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

//////////////////////////////////////////////////////////////////////////////////////
// Working with string part 2
const airline = "TAP AIR PORTUGAL";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = "jOnAs"; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = "hello@jonas.io";
const loginEmail = " Hello@jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// replacing
const priceGB = "288,97#";
const priceUS = priceGB.replace("#", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "ALL passengers come to boarding door 23, Boardinf door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

//Booleans

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Air") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("YOU are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");


//////////////////////////////////////////////////////////////////////////////////////
// Working with string part 1
const airline = "TAP AIR PORTUGAL";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("R"));
console.log(airline.lastIndexOf("R"));
console.log(airline.indexOf("PORTUGAL"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.slice(3, -4));

const checkMiddleSeat = function (seat) {
  //B and E are the middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😞");
  else console.log("You got lucky 😊");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Jonas"));
console.log(typeof new String("Jonas"));
console.log(typeof new String("Jonas").slice(-1));

////////////////////////////////////////////////////////////////
//coding challenge 3/////////

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

const question = new Map([
  ["question", "What is the best programming language in the World ? "],
  [1, "C"],
  [2, "java"],
  [3, "javaScript"],
  ["correct", 3],
  [true, "correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

//convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get("question"));
for (const [Key, value] of question) {
  if (typeof Key === "number") console.log(`Answer ${Key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));
// if (answer === question.get("correct")) {
//   console.log(question.get(true));
// } else console.log(question.get(false));

//convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

////////////////////////////////////////////////////////////
//Maps Fundamentals
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("Open", 11)
  .set("Close", 23)
  .set(true, "We are open 😃")
  .set(false, "We are closed ⛔");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("Open") && time < rest.get("Close")));

console.log(rest.has("categories"));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, " Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

console.log(rest.get(arr));

////////////////////////////////////////////////////////////////
//Sets
console.log(orderSet);

console.log(new Set("JONAS"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ["Waiter", "Chef", "Waiter", " Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", " Manager", "Chef", "Waiter"]).size
);

console.log(new Set("AdemolaOluwasegun").size);

//Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} We open at ${open} and close at ${close}`);
}
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day}, We open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? " Method does not exist");

//Arrays
const user = [{ name: " Jonas", email: " helllo@jonas.io" }];

console.log(user[0]?.name ?? "User array empty");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}

// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Plazza",
//   owner: "Giovanni Rossi",
// };
// // OR assignment operator///////////////////////////////////////////
// // rest1.numGuests = rest1.numGuests || 10; // same thing as rest1.numGuests ||= 10
// // rest2.numGuests = rest2.numGuests || 20; // same thing as rest2.numGuests ||= 20

// //nullish assignment operator (nill or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && "<ANONYMOUS>"; // rest1.owner &&= '<ANONYMOUUS>'
// rest2.owner = rest2.owner && "<ANONYMOUS>"; // rest2.owner &&= '<ANONYMOUUS>'
// console.log(rest1);
// console.log(rest2);


/////////////////////////////////////////////////////
//The Nullish Coalescing Operator
restaurant.numGuests = 0;
guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish :NULL and undefined  (NOT 0 or "")
const guestCorret = restaurant.orderPizza ?? 10;
console.log(guestCorret);

//////short circuiting (&& and ||)///////////////////////////////
console.log("------OR------");
//Use Any data type, return ANY data type, short circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("------AND------");
console.log(0 & "Jonas");
console.log(7 & "Jonas");

console.log("hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

//SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];

//REST,because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(Pizza, risotto, otherFood);

//objects///////////

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
restaurant.orderPizza("mushrooms");
//spread operators//////////////////////////////////////
// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets, Not objects
const str = "Jonas";
const letters = [...str, " ", "s."];
console.log(letters);
console.log(...str);
// console.log(`${...str} schmedtmann`)// not gonna work

//Real-World example

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2"),
  // prompt("Ingredient 3"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { founded: 1998, ...restaurant, founder: "ademola" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = " Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Destructuring objects///////////////////////////////////////////////////
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "idumota",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "idumota",
//   mainIndex: 1,
//   starterIndex: 0,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested object
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//Destructuring Arrays //////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;

// // main = second;
// // second = main;

// // console.log(main, second);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructing
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
*/
