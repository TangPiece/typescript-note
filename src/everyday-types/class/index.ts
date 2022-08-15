


// 静态方法

// class MyStaticClass {
//     static doSomething() { }
// }

// class MyStaticClassSon extends MyStaticClass {
//     static doSomething2() {
//         super.doSomething()
//     }
// }

// MyStaticClassSon.doSomething2()


// function doSomething() {}

// const MyHelperObject = {
//   dosomething() {},
// };




// // 类静态块
// class Foo {
//     static #count = 1;

//     get() {
//         return Foo.#count;
//     }

//     static {
//         try {
//             const lastInstances = '111';
//             Foo.#count += lastInstances.length;
//         }
//         catch {}
//     }
// }

// console.log(new Foo().get())
// // console.log(Foo.#count)








// // 静态成员中的类型参数

// class Box<Type> {
//   static defaultValue: Type;
// }

// Box<string>.defaultValue
// Box<number>.defaultValue








// // 类运行时的 this
// // 普通函数
// class MyClass {
//   name = "MyClass";
//   getName() {
//     return this.name;
//   }
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };

// console.log(obj.getName());




// // 箭头函数
// class MyClass {
//   name = "MyClass";
//   getName=()=> {
//     return this.name;
//   }
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };

// console.log(obj.getName());




// // this 参数
// class MyClass {
//   name = "MyClass";
//   getName(this: MyClass) {
//     return this.name;
//   }
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };

// console.log(obj.getName());





// // this 类型
// class Box {
//   contents: string = "";
//   set(value: string) {
//     this.contents = value;
//     return this;
//   }
// }

// class ClearableBox extends Box {
//   clear() {
//     this.contents = "";
//   }
// }

// const boxa = new Box();
// const boxb = boxa.set("hello");

// const clearableBoxa = new ClearableBox();
// const clearableBoxb = clearableBoxa.set("hello");




//  // 你也可以在参数类型注解中使用 this ：
// class Box {
//   content: string = "";
//   sameAs(other: this) {
//     return other.content === this.content;
//   }
// }

// class DerivedBox extends Box {
//   otherContent: string = "?";
// }

// const base = new Box();
// const derived = new DerivedBox();
// derived.sameAs(base);





// // 基于 this 的类型保护

// class FileSystemObject {
//     isFile(): this is FileRep {
//         return this instanceof FileRep;
//     }
//     isDirectory(): this is Directory {
//         return this instanceof Directory;
//     }
//     isNetworked(): this is Networked & this {
//         return this.networked;
//     }
//     constructor(public path: string, private networked: boolean) { }
// }

// class FileRep extends FileSystemObject {
//     constructor(path: string, public content: string) {
//         super(path, false);
//     }
// }

// class Directory extends FileSystemObject {
//     children: FileSystemObject[] = [];
// }

// interface Networked {
//     host: string;
// }

// const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

// if (fso.isFile()) {
//     fso.content;
//     // const fso: FileRep
// } else if (fso.isDirectory()) {
//     fso.children;
//     // const fso: Directory
// } else if (fso.isNetworked()) {
//     fso.host;
//     // const fso: Networked & FileSystemObject
// }



// class Box<T> {
//   value?: T;

//   hasValue(): this is { value: T } {
//     return this.value !== undefined;
//   }
// }

// const box = new Box<string>();
// box.value = "Gameboy";

// box.value;  

// if (box.hasValue()) {
//   box.value;
// }





// // 抽象类和成员
// // 抽象方法或者抽象字段是不提供实现的。这些成员必须存在在一个抽象类中，这个抽象类也不能直接被实例化。
// // 抽象类的作用是作为子类的基类，让子类实现所有的抽象成员。当一个类没有任何抽象成员，他就会被认为是具体的（concrete）。

// abstract class Base {
//   abstract getName(): string;

//   printName() {
//     console.log("Hello, " + this.getName());
//   }
// }

//  const b = new Base();
// // Cannot create an instance of an abstract class.


// class Derived extends Base {
//   getName() {
//     return "world";
//   }
// }

// const d = new Derived();
// d.printName();






// function greet(ctor: typeof Base) {
//   const instance = new ctor();
// 	// Cannot create an instance of an abstract class.
//   instance.printName();
// }

// greet(Base);



// function greet(ctor: new () => Base) {
//   const instance = new ctor();
//   instance.printName();
// }
// greet(Derived);
// greet(Base);





// class Person {
//     name: string | undefined;
//     age: number = 0;
// }

// class Employee {
//     name: string | undefined;
//     age: number = 0;
//     salary: number = 0;
// }

// // OK
// const p: Person = new Employee();

