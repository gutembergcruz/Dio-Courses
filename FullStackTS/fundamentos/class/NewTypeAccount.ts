import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.getStatus()) {
      let newAmount = amount + 10;
      this.balance = this.balance + newAmount;
      console.log(`Você depositou ${newAmount} em sua conta`);
    }
  };
}
