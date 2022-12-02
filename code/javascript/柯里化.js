function add(a, b, c) {
  return a + b + c;
}

function wrapFunction(func) {
  function curried(...argArr) {
    if (argArr.length >= func.length) {
      return func.apply(this, argArr); // 如果传入的参数足够，直接通过apply调用原函数
    } else {
      return function (...argArr2) {
        // 如果参数不够，返回一个函数，并递归调用curried
        return curried.apply(this, argArr.concat(argArr2));
      };
    }
  }
  return curried;
}

var wrapAdd = wrapFunction(add);
console.log(wrapAdd(5, 6, 7));

let add10 = wrapAdd(10);
console.log(add10(1, 2));
console.log(add10(1, 3));

console.log(add10(1)(2));
