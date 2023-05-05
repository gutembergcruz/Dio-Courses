class User {
  name: string = "Gute";
  age: number = 26;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name);
  };
}

const user = new User("Gutemberg", 27);

user.showName();
