const obj = {
  title: "obj",
  eating() {
    console.log("吃东西");
  },
};
let { title, eating } = obj;

console.log(title);
eating();

const arr = ["coderchao", "18", "actions"];
const [a1, a2, a3] = arr;
console.log(a1, a2, a3);

function foo({
  title = "foo",
  eating = function () {
    console.log("默认");
  },
} = {}) {
  console.log(title);
  eating();
}
foo(obj);
foo();
const obj2 = {};
foo(obj2);

function bar(
  { title, eating } = {
    title: "bar",
    eating: function () {
      console.log("默认bar");
    },
  }
) {
  console.log(title);
  eating();
}
bar();
// bar({}); // 报错
