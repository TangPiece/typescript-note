# 字面量类型

- ts的类型推断不会推断出字面量类型，除非直接声明未字面量类型，或使用as进行断言
const req = { url: "https://example.com", method: "GET" } as const;