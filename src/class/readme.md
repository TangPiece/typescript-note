# 类
### 关键词```class```

### 类成员
- 字段
  - 初始值
    - 构造函数内初始化
    - ```--strictPropertyInitialization```
    - ```!```
  - ```readonly```
    - 只能在构造函数中赋值
- 构造函数
  - 不能有返回值类型
  - 不能使用泛型
  - 继承的类必须调用Super
- 方法
 - 变量作用域
- Getter/Setter
 - 只有get无set===readonly
 - setter参数类型可省略
 - set必须兼容get的可见性
- 索引签名（不推荐）

### 类继承
- ```implements```
  - 只是做类型检查，实现兼容接口定义即可
- ```extends```
  - 拥有基类的所有属性和方法
  - 覆写需兼容基类的实现
  - 初始化顺序（先基类后子类）
  - 内置类型（Error、Array）的this原型链
    - 在 ES2015 中，当调用 super(...) 的时候，如果构造函数返回了一个对象，会隐式替换 this 的值。
    - new.target
    - Object.setPrototypeOf

### 成员可见性
- ```public```
  - 默认、无限制
- ```protected```
  - 仅子类中可以访问
  - 子类中可以扩大父类的可见性
- ```private```
  - 自己内部才能访问
- 弱私有```[]```
- ```#```和```WeakMaps```
