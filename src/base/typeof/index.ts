// function identity(arg) {
//   return arg;
// }

// type result = ReturnType<typeof identity>;


const s = "hello";
let n: typeof s;


const person = { name: "kevin", age: "18" }
type Kevin = typeof person;




// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// type result = ReturnType <identity<string>>;

enum UserResponse {
  No = 0,
  Yes = 1,
}
type result = typeof UserResponse;

const a: result = {
  No: 2,
  Yes: 3,
};

type resultKey = keyof typeof UserResponse

const b:resultKey = "No"