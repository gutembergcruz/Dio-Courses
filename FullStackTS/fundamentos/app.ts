import { CompanyAccount } from "./class/CompanyAccount";
import { NewTypeAccount } from "./class/NewTypeAccount";
import { PeopleAccount } from "./class/PeopleAccount";

// const peopleAccount: PeopleAccount = new PeopleAccount(1, "Gute", 10);
// peopleAccount.deposit(25);
// console.log(peopleAccount.balance);
// peopleAccount.withdraw(20);
// console.log(peopleAccount.balance);

// const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
// companyAccount.getLoan(500);
// console.log(companyAccount.balance);

const myAccount: NewTypeAccount = new NewTypeAccount("Nova", 21);
myAccount.deposit(50);
console.log(myAccount.balance);
