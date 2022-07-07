## interface 和 type 很像，很多场景，两者都能使用。但也有细微的差别：


#### 不同点：

- 扩展语法： interface使用extends，type使用‘&’

- 同名合并：interface 支持，type 不支持。

- 描述类型：对象、函数两者都适用，但是 type 可以用于基础类型、联合类型、元祖。

- 计算属性：type 支持计算属性，生成映射类型,；interface 不支持。


#### 相同点：

- 两者都可以用来描述对象或函数的类型

- 两者都可以实现继承

#### 总的来说，公共的用 interface 实现，不能用 interface 实现的再用 type 实现。主要是一个项目最好保持一致。

***

类型别名、字面量、联合类型
```
type Size = 'small' | 'middle' | 'large'
```