
class Animal {
  constructor(name: string) {
    this.name = name;
  }
  get name() :string {
    return this.name;
  }
  set name(value :string) {
    this.name = value
    console.log('setter: ' + value);
  }
}

let kitty: Animal = new Animal('Kitty'); // setter: Kitty
kitty.name = 'Tom'; // setter: Tom
console.log(kitty.name); //Tom