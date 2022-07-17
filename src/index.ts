class Person {
  name: string;
  age: number;
  country: string;
  isMarried: boolean;

  constructor(name: string, age: number, country: string, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.isMarried = isMarried;
  }

  whoIs() {
    console.log(`This Person name is ${this.name}`);
  }
}

const playerOne = new Person("Saiful Islam Shanto", 21, "Bangladesh", false);

const persons: Person[] = [];

persons.push(playerOne);

console.log(persons);
