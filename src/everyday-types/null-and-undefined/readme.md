在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型

与 void 的区别是，undefined 和 null 是所有类型的子类型。

当 strictNullChecks 选项关闭的时候，如果一个值可能是 null 或者 undefined，它依然可以被正确的访问，或者被赋值给任意类型的属性。这些检查的缺少，是导致 bug 的主要源头，所以我们始终推荐开发者开启 strictNullChecks 选项。