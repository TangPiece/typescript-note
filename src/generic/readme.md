# 泛型

### 目的
创建一个支持众多类型的组件

### 函数泛型

##### 1、函数声明式定义
```
function func1<Type>(arg: Type): Type {
  return arg;
}
```

##### 2、函数表达式定义
```
let func2: <Type>(arg: Type) => Type = function <T>(a: T): T {
  return a
};
```
进而得
##### 3、对象类型调用签名式定义
```
let func3: { <Type>(arg: Type): Type } = function <T>(a: T): T {
  return a
};
```
进而得
##### 4、接口泛型
```
interface GenericInterfaceFn{
  <Type>(arg: Type): Type
}

let func4: GenericInterfaceFn = function <T>(a: T): T {
  return a
};

// 错误示例
let test4 = func4<number>('1')
// Argument of type 'string' is not assignable to parameter of type 'number'

// 正确示例
let test41 = func4<number>(1)
let test42 = func4(1)
```
将泛型移到整个接口上，则声明GenericInterfaceFn时就得指定好类型
```
interface GenericInterfaceFn<Type>{
  (arg: Type): Type
}

let func5: GenericInterfaceFn<number> = function <T>(a: T): T {
  return a
};

// 错误示例
let test5 = func5<number>('1')
// Expected 0 type arguments, but got 1.

// 错误示例
let test51 = func5('1')
// Argument of type 'string' is not assignable to parameter of type 'number'.

// 正确示例
let test52 = func5(1)

```

### 泛型函数中使用泛型参数
使用时需要进行类型收窄再使用，参考[类型收窄](https://github.com/TangPiece/typescript-note/tree/main/src/narrowing/)


### 泛型约束```extends```
```
<T extends { length: number }>
```

