# typeof 操作符
用于获取一个变量或者属性的类型

## 基本使用

```
let s = "hello";
let n: typeof s;  // n:string


const s = "hello";
let n: typeof s;  //n:'hello'
```


## 对对象使用 typeof
```
const person = { name: "kevin", age: "18" }
type Kevin = typeof person;
```

## 对函数使用 typeof
```
function identity<Type>(arg: Type): Type {
  return arg;
}
type result = typeof identity;
```

## 对函数使用 ReturnType
```
type Predicate = (x: string, y:string) => string;
type K = ReturnType<Predicate>;
```
```
function f() {
  return { x: 10, y: 3 };
}
// 只有对标识符（比如变量名）或者他们的属性使用 typeof 才是合法的
type P = ReturnType<typeof f>;
```

## 对 enum 使用 typeof

```
enum UserResponse {
  No = 0,
  Yes = 1,
}
type result = typeof UserResponse;

const a: result = {
      "No": 2,
      "Yes": 3
}

// 不过对一个 enum 类型只使用 typeof 一般没什么用，通常还会搭配 keyof 操作符用于获取属性名的联合字符串
type resultKey = keyof typeof UserResponse
const b:resultKey = "No"
```
