# 类型收窄

### typeof（类型保护）

只适用于判断JavaScript基本类型，```interface、null、Array```等都会被识别为```object```

### 真值
用于去除```0 、NaN、""、0n、null undefined```等值

### 等值
使用```==、!==```判断两个变量是否相等来推断两个联合类型公有的类型


### in
通过```in```判断一个对象是否有特有的属性名来推断类型

### instanceof
通过```instanceof```判断JavaScript中```Date、Array```等对象类型

### 赋值
ts会根据赋的值类型推断出具体类型

### is 类型判断式

一个返回 ```boolean``` 值的函数，返回值采用 ```parameterName is Type```的形式，但 ```parameterName``` 必须是当前函数的参数名


### 可辨别联合
将一下枚举属性
```
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
```
修改为
```
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;
```
然后通过公有属性```kind```的值推断出类型

### 利用never强制穷举
利用任何类型不能赋值给never类型的特性，返回一直never类型的变量。这样，使用联合类型时，就必须针对每个类型做专门的处理，避免遗漏