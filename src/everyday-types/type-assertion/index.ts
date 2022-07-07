interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}


// animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可 
// animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行  【Cat不兼容Animal】


// 把父类断言为子类 [ok]

// const animal: Animal = {
//   name: 'tom'
// };
// let tom = animal as Cat;


// 把子类断言父类 [ok]

// const tom: Cat = {
//   name: 'Tom',
//   run: () => { console.log('run') }
// };
// let animal = tom as Animal;


// 子类的实例赋值给类型为父类的变量 [ok]

// const tom: Cat = {
//   name: 'Tom',
//   run: () => { console.log('run') }
// };
// let animal: Animal = tom;


// 父类的实例赋值给类型为子类的变量 [error]

// const animal: Animal = {
//   name: 'tom'
// };

// let tom: Cat = animal;


