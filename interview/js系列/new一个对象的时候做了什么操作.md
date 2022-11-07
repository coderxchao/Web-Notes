## 概念

1. 通过 new 关键字调用构造函数的时候首先会在内存中创建一个新的空对象
2. 然后这个新对象的内部属性 `[[prototype]]` （也就是它的原型，可通过 `__prototype__` 访问）会被赋值为该构造函数的 `prototype` 属性。（即 `obj.__proto__===Object.prototype` ）
3. 将 `this` 指向这个新对象
4. 执行构造函数中的代码
5. 如果构造函数没有 `return` 其他的引用类型数据，则默认会 `return` 返回这个新创建出来的对象

## 扩展

检测一个函数是否通过 new 关键字调用可通过 new.target 属性判断，在一个函数中，如果该函数是通过 new 关键字调用的，则 new.target 属性值为指向当前函数的引用，否则该属性值为 undefined。

```javascript
function Person() {
  console.log(new.target === Person);
  if (!new.target) {
    throw Error("构造函数必须通过 new 关键字调用");
  }
}
new Person(); // true
Person(); // false
```
