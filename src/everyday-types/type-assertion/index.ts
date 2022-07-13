/**
 * 类型断言 as
 */


// eg1
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




// eg2

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" } as const;
//as const 效果跟 const 类似，但是对类型系统而言，它可以确保所有的属性都被赋予一个字面量类型，而不是一个更通用的类型比如 string 或者 number 

handleRequest(req.url, req.method);


// as const 在解构中的应用
function asConst(){
  let a:string = "abc";
  let b = (firstname: string, lastname: string): string => firstname + lastname;
  return [a,b];
}

let [p,q] = asConst();
console.log(q("Green","Tom"));

// 上述代码会直接编译失败，原因是ts认为变量q的类型是string | ((firstname: string, lastname: string) => string)，编译器并不能认定q是一个函数。
// 我们也可以使用as const 将函数asConst的返回值由宽泛的string | ((firstname: string, lastname: string) => any)转化成具体的readonly [string，(firstname: string, lastname: string) => string]，从而显式的表明q是函数类型的变量

// function asConst(){
//   let a:string = "abc";
//   let b = (firstname:string,lastname:string):string => firstname + lastname;
//   return [a,b] as const;
// }

// let [p,q] = asConst();
// console.log( q("Green","Tom"));


// 总结：
// as const断言，可以将代码中宽泛的数据类型定义具体化，从而避免我们在开发过程中，
// 因为定义过于宽泛，造成的各种数据处理的错误，通过精准的数据类型定义，更好的管理我们前端代码。
