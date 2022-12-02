var obj = {
  name: "obj",
  num1: 33,
  num2: 44
}
function foo(num1, num2, num3, num4) {
  console.log(this);
  return num1 + num2 + num3 + num4;
}

var result = foo.bind(obj, 1, 3)
console.log(result(3, 4));
/* ------------------------------------------------------------------------- */
Function.prototype.xcbind = function (thisArg, ...argArr) {
  var fn = this;
  if (thisArg === null || thisArg === undefined) {
    thisArg = globalThis;
  } else {
    thisArg = Object(thisArg);
  }
  return function (...argArr2) {
    thisArg.fn = fn;
    var finalArgs = [...argArr, ...argArr2];
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn;
    return result;
  }
}
var result = foo.xcbind(obj, 1, 3)
console.log(result(3, 4));
var result2 = foo.xcbind(obj, 1, 2, 3, 4);
console.log(result2());