// as const 在解构中的应用
function asConst(){
  let a:string = "abc";
  let b = (firstname:string,lastname:string):string => firstname + lastname;
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