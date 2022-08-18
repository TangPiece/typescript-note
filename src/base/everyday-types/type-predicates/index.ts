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


const obj1: interfaceA = { name: "andy", age: 2 };

const obj2: interfaceB = { name: "andy", phone: 2 };


// 创建数组
// arr1, 创建两个interfaceA[]数组, 数组每一项都是 obj1
const arr1:interfaceA[]  = new Array<interfaceA>(2).fill(obj1);

// arr2, 创建两个interfaceB[]数组, 数组每一项都是 obj2
const arr2:interfaceB[] = new Array<interfaceB>(2).fill(obj2);


//  arr3类型就是一个联合数组
const arr3:(interfaceA | interfaceB)[] = [...arr1, ...arr2];

const target:interfaceA | interfaceB  = arr3[0];


// Ok获取两个结构共有的属性
// console.log(target.name);

// 获取两个接口不同的属性报错:
// console.log(target.phone);
// 报错: 类型“interfaceA”上不存在属性“phone”

// console.log(target.age);
// 报错:  类型“interfaceB”上不存在属性“age”



// 自定义类型保护函数
const isInterfaceA = (item: interfaceA | interfaceB): item is interfaceA => {
  return (item as interfaceA).age !== undefined;
  // return "age" in item
};

// 判断target 属于哪个类型
  if (isInterfaceA(target)) {
    console.log(target.age); //target的类型为interfaceA
  } else {
    console.log(target.phone); //target的类型为interfaceB
  }
  


