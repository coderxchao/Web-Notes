var a = 1;
var b = 2;
console.log("a = " + a, "b = " + b);
var c = 1;
var d = 2;
var e = 3;
var f = 4;
console.log(c, d, e, f);

const arr = [a, b, c];
const newLocal = arr.map((value) => {
  return value * 2;
});
arr.forEach((value) => {
  console.log(value);
});
