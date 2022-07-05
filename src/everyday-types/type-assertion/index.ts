interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const tom: Cat = {
  name: 'Tom',
  run: () => { console.log('run') }
};
let animal: Animal = tom;

// const animal: Animal = {
//   name: 'tom'
// };

// let tom: Cat = animal;
