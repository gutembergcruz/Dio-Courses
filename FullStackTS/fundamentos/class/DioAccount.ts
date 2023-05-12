export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  readonly status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + amount;
      console.log(`Você depositou ${amount} em sua conta`);
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance > amount) {
        this.balance = this.balance - amount;
        console.log(`Voce sacou ${amount} da sua conta`);
      } else {
        console.log("Você não possui saldo suficiente");
      }
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  getStatus = (): boolean => {
    return this.status;
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
