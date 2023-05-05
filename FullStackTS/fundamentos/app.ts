class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("Você depositou");
  };

  withdraw = () => {
    console.log("Você sacou");
  };
}

const newAccount: Account = new Account("Gute", 1);

newAccount.withdraw();
