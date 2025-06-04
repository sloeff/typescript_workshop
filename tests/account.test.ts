import { test, expect, describe } from "vitest";
import { Account } from "../src/account";

describe("Account tests", () => {
  test("Deposit to checking account", () => {
    let checkingAccount = new Account("checking");

    checkingAccount.deposit(50);

    expect(checkingAccount.balance).toEqual(50);
  });

  test("Deposit and withdraw from savings account", () => {
    let savingsAccount = new Account("Savings");

    savingsAccount.deposit(10);
    savingsAccount.withdraw(5);

    expect(savingsAccount.balance).toEqual(5);
  });
});

describe("Error producing tests", () => {
  test("Overdraw from a savings account is not allowed", () => {
    let savingsAccount = new Account("Savings");
    expect(() => savingsAccount.withdraw(1)).toThrowError("Cannot go into negative on a savings account");
  });

  test("Deposit a negative amount is not allowed", () => {
    let checkingAccount = new Account("checking");
    expect(() => checkingAccount.deposit(-1)).toThrowError("Please supply a positive, non-zero amount");
  });

  test("Deposit zero is not allowed", () => {
    let checkingAccount = new Account("checking");
    expect(() => checkingAccount.deposit(0)).toThrowError("Please supply a positive, non-zero amount");
  });
});
