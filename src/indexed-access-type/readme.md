# 索引访问类型

### 要点
- 字面量类型
- 联合类型
- keyof
- 数组索引
- 变量不能作为索引
- 实例：数组转为联合类型

### 只有类型才能做索引


### 常量类型索引
```
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
```


### 联合类型
```
type I1 = Person["age" | "name"];
```

### keyof
```
type I2 = Person[keyof Person];
```


### 数组索引
```
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];
type Person0 = typeof MyArray[0];
```

### 数组转联合类型
```
const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;
// const APP: readonly ["TaoBao", "Tmall", "Alipay"]

type typeOfAPP = typeof APP;
// type typeOfAPP = readonly ["TaoBao", "Tmall", "Alipay"]

type app = typeof APP[number];
// type app = "TaoBao" | "Tmall" | "Alipay"
```