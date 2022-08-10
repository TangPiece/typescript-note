/**
 * 映射类型
 * 1. 基于索引签名实现
 * 2. 从一个类型映射出一个新类型
 * 3. 一定是泛型类型
 */

// 映射修饰符
type O = {
  id: number;
  name: string;
  piiAttr: { pii: true };
}

// 加只读修饰符
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}

type ReadonlyO = ReadOnly<O>

// 删除属性上的只读修饰符
type Writable<T> = {
  -readonly [P in keyof T]: T[P];
}

type O2 = Writable<ReadonlyO>

// 属性改为非必选
type Partial1<T> = {
  [P in keyof T]?: T[P]
}

type PartialO = Partial1<O>


// 属性改为必选
type Require<T> = {
  [P in keyof T]-?: T[P]
}

// 因为O默认属性就是必填的所有这里用PartialO
type RequireO = Require<PartialO>

// as 映射新属性

// 只支持string属性所以加了 P & string  忽略调非string属性
type Getter<T> = {
  [P in keyof T as `get${Capitalize<P & string>}`]: () => T[P]
}

type Setter<T> = {
  [P in keyof T as `set${Capitalize<P & string>}`]: (value: T[P]) => void
}


// 扩展
let DBFields = {
  id: { format: "incrementing" },
  name: { type: 'ahah', pii: true },
} as const;



type PiiIsTrue<T> = {
    [P in keyof T]: T[P] extends { pii: boolean } ? true : false;
}

type DBFieldsN = typeof DBFields

type PiiIsTrueDBFields = PiiIsTrue<typeof DBFields>

