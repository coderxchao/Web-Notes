var obj = {
  name: "obj"
}
function foo(num1, num2) {
  console.log(this);
  return num1 + num2;
}

var result = foo.apply(0)
console.log(result);
/* ------------------------------------------------------------------------- */
Function.prototype.xcapply = function (thisArg, argArr) {
  var fn = this;
  thisArg = Object(thisArg) ?? globalThis
  thisArg.fn = fn;
  argArr = argArr || [];
  var result = thisArg.fn(...argArr)
  delete thisArg.fn;
  return result;
}
var result = foo.xcapply(0)
console.log(result);
