export class Account {
  private _type: string;
  private _balance: number;

  constructor(type: string) {
    this._type = type;
    this._balance = 0;
  }

  get type(): string {
    return this._type;
  }

  get balance(): number {
    return this._balance;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Please supply a positive, non-zero amount");
    }
    if (this._type == "Savings" && amount > this._balance) {
      throw new Error("Cannot go into negative on a savings account");
    }
    this._balance -= amount;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Please supply a positive, non-zero amount");
    } else {
      this._balance += amount;
    }
  }
}
