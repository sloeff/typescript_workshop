import { Account } from "./account";

let savingsAccount = new Account("Savings");

// console.log(`Account type: ${savingsAccount.type}`);
// console.log(`Account balance: ${savingsAccount.balance}`);

// savingsAccount.deposit(5);
// console.log(`After deposit, the total now is: ${savingsAccount.balance}`);

// savingsAccount.deposit(0);
// savingsAccount.withdraw(0);
//console.log(`After withdraw, the total now is: ${savingsAccount.balance}`);

// try {
//   savingsAccount.deposit(0);
// } catch (err) {
//   console.log(err.message);
// }

try {
  savingsAccount.withdraw(1);
} catch (err) {
  console.log(err.message);
}

console.log(`Savings account balance: ${savingsAccount.balance}`);

let checkinAccount = new Account("checkin");

try {
  checkinAccount.withdraw(1);
} catch (err) {
  console.log(err.message);
}

console.log(`Checking account balance: ${checkinAccount.balance}`);
