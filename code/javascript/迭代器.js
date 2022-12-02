/* 
迭代器：在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：即具有next方法
next方法有如下要求：
  一个无参数或者一个参数的函数，返回一个拥有以下两个属性的对象
  1. done （boolean）
    * 如果迭代器可以产生序列中的下一个值，则为false；
    * 如果迭代器已将序列迭代完毕，则为true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值
  2. value
*/

const iterator1 = {
  index: 1,
  next() {
    if (this.index < 5) {
      return { done: false, value: this.index++ };
    } else {
      return { done: true, value: undefined };
    }
  },
};
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

console.log("---------------------");

/* 
可迭代对象：需要实现iterable protocol协议
  1. 这个对象需要实现@@iterator方法，在代码中我们使用Symbol.iterator访问该属性。
  2. Symbol.iterator方法需要返回一个迭代器对象
*/
const iterableObj = {
  friends: ["coder", "kobe", "james"],
  /* [Symbol.iterator]表示该属性为计算属性 */
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      /* 这里需要使用箭头函数来访问上层作用域的this */
      next: () => {
        if (index < this.friends.length) {
          return { done: false, value: this.friends[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        console.log("迭代器被提前终止了11");
        return { done: true, value: undefined };
      },
    };
  },
};
// const iterator2 = iterableObj[Symbol.iterator]();
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

console.log("---------------------");
/* 可迭代对象可用于解构赋值 */
const [a, b, c] = iterableObj;
console.log(a, b, c);

console.log("---------------------");
/* 可迭代对象可通过for of遍历 */
for (const iterator of iterableObj) {
  console.log(iterator);
}
console.log("---------------------");
for (const iterator of iterableObj) {
  if (iterator === "kobe") {
    break; // 终止了，会回调return()方法
  }
  console.log(iterator);
}
