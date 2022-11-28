## typeof 与 instanceof 有什么区别？

**[typeof 与 instanceof 的区别](https://vue3js.cn/interview/JavaScript/typeof_instanceof.html#%E9%9D%A2%E8%AF%95%E5%AE%98-typeof-%E4%B8%8E-instanceof-%E5%8C%BA%E5%88%AB)**

> `typeof` 操作符只能正确判断基本类型，其返回值为变量基本类型的字符串。对于引用类型，`typeof` 返回的值都是 "object" 或 "function"字符串。对于 `null` 值，`typeof` 返回的也是 "object"
>
> 而 `instanceof` 运算符则无法正确判断基本类型，它是用来判断构造函数的 `propotype` 属性是否在实例对象的原型链上。语法如下：`object instanceof constructor` 。其返回值为 `true` 或 `false` ，可以准确的判断出引用类型。
>
> `instanceof`实现原理参考：
>
> ```javascript
> function myInstanceof(obj, constructor) {
>   // 这里先用typeof来判断基础数据类型，如果是，直接返回false
>   if (typeof obj !== 'object' || obj === null) return false;
>   // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
>   let proto = Object.getPrototypeOf(obj);
>   while (true) {
>     if (proto === null) return false;
>     if (proto === constructor.prototype) return true;//找到相同原型对象，返回true
>     proto = Object.getPrototypeof(proto);
>   }
> }
> ```
>
> 如果需要通用的检测数据类型的方法，我们可以使用 `Object.prototype.toString.call(变量)`来进行判断，其返回值为统一格式的“[object Xxx]”字符串。
