// 类型别名定义函数类型
type Add = (x: number, y: number, z?: number) => number;

// 接口定义函数类型
// interface Add {
//   (x: number, y: number, z?: number): number;
// }

let add: Add = (arg1, arg2, arg3 = 0) => arg1 + arg2 + arg3;

add(1, 2);   
add(1, 2, 3); 



