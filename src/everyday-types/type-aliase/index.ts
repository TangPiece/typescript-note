// 类型别名继承（合并），类似 interface的extends
type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };


//type 能使用 in 关键字生成映射类型，但 interface 不行。
type Keys = "firstname" | "surname"
type DudeType = {
  [key in Keys]: string
}
const test: DudeType = {
  firstname: "Pawel",
  surname: "Grzybek"
}
