// 接口 interfaceA
interface interfaceA {
  name: string;
  age: number;
}

// 接口 interfaceB
interface interfaceB {
  name: string;
  phone: number;
}

// 推断类型
const obj1: interfaceA = { name: "andy", age: 2 };
// const obj1: {name: string;age: number;}

const obj2: interfaceB = { name: "andy", phone: 2 };
// const obj2: {name: string;phone: number;}

// 创建数组
// arr1, 创建两个interfaceA[]数组, 数组每一项都是 obj1
const arr1:interfaceA[]  = new Array<interfaceA>(2).fill(obj1);

// arr2, 创建两个interfaceB[]数组, 数组每一项都是 obj2
const arr2:interfaceB[] = new Array<interfaceB>(2).fill(obj2);

// 合并两种类型数组,
//  arr3类型就是一个联合数组
const arr3:(interfaceA | interfaceB)[] = [...arr1, ...arr2];


const target = arr3[0];
// const target: interfaceA | interfaceB  

// Ok获取两个结构共有的属性
// console.log(target.name);

// 获取两个接口不同的属性报错:
// console.log(target.phone);
// 报错: 类型“interfaceA”上不存在属性“phone”

// console.log(target.age);
// 报错:  类型“interfaceB”上不存在属性“age”


// 联合类型
type interfaceAB = interfaceA | interfaceB;

// 自定义类型保护函数
const isInterfaceA = (item: interfaceAB): item is interfaceA => {
  return (item as interfaceA).age !== undefined;
};

// 判断target 属于哪个类型
if (isInterfaceA(target)) {
  console.log(target.age); //target的类型为interfaceA
} else {
  console.log(target.phone); //target的类型为interfaceB
}
