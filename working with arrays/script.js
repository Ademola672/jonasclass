"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  //.textcontent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
    <div class="movements__value">${mov}EUR</div>
  </div>
     `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}EUR`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}EUR`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // interest > 1)

  labelSumInterest.textContent = `${interest}EUR`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts); //stw
console.log(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(currentAccount.movements);

  //Display balance
  calcDisplayBalance(currentAccount);

  //Display summary
  calcDisplaySummary(currentAccount);
  // console.log("LOGIN");
};
//Event handler

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";

    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //ADD movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Delete");
  if (
    inputCloseUsername.vlue === currentAccount.value &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    console.log(index);

    //Delete account

    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ["a", "b", "c", "d", "e"];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(arr.slice([...arr]));

//SPICE
// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

//JOIN
console.log(letters.join("-"));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// at method also work on string
console.log("Jonas".at(0));
console.log("Jonas".at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log("-----forEach--------");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
//map arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
//const movementsUsd = movements.map(function (mov) {
// return mov * eurToUsd;
// });
const movementsUsd = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * eurToUsd);

console.log(movementsUsdFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);


//Filter
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((mov) => mov > 0);

console.log(movements);
console.log(deposits);
// for of loop

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);
//for withdrawals
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

//Reduce Method//////////////////////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// accumulator is like a snow ball
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(`Iteration ${i}: ${acc}`);
console.log(balance);

// //for loop
// let balance2 = 0;
// for (const mov of movements) balance2 = balance2 + mov;
// console.log(balance2);

//Maximum Value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//Pipeline////////////
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);
for (const acc of accounts[0]) {
  const ty = acc[1];
  console.log(ty);
}

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//Equality
console.log(movements.includes(-130));

// some : Condition
console.log(movements.some((mov) => mov === -130));

const anyDeposit = movements.some((mov) => mov > 0);
console.log(anyDeposit);

//every:
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// seperate call back
const deposit = (mov) => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//Flat
const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//FlatMap
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);


//Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//return < 0, A, B (keep order)
//return > 0, B, A(switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   else if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
//descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   else if (b > a) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty arrays + fill
const x = Array(7);
console.log(x);
// console.log(x.map() => 5);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const dice = Array.from({ length: 100 }, (_, i) => Math.random(i + 1));
console.log(dice);

labelBalance.addEventListener("click", function () {
  const movementsUi = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("EUR", ""))
  );
  // console.log(movementsUi);
  console.log(movementsUi);

  const movementsUi2 = [...document.querySelectorAll(".movements__value")];
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array methods practice
// const movFunc = function () {};

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

//2
// const numDeposit1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((acc) => acc >= 1000).length;

const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(
  accounts.flatMap((acc) => acc.movements).filter((acc) => acc >= 1000)
);
console.log(numDeposit1000);

//Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

//3
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//4
//this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here Is another title with an EXAMPLE"));
*/
