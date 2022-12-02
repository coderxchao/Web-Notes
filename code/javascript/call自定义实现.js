var obj = {
  name: "obj"
}
function foo(num1, num2) {
  console.log(this);
  return num1 + num2;
}

var result = foo.call(0)
console.log(result);
/* ------------------------------------------------------------------------- */
Function.prototype.xccall = function (thisArg, ...argArray) {
  var fn = this; // this为要调用的函数，如foo.xccall()则表示foo
  var result;
  if (thisArg == null || thisArg == undefined) {
    result = fn(...argArray); // 没有传入要绑定的对象
  } else {
    thisArg = Object(thisArg)
    thisArg.fn = fn;
    result = thisArg.fn(...argArray);
  }
  delete thisArg && thisArg.fn
  return result;
}
var result = foo.xccall(0);
console.log(result);