// 关于this绑定的另一种理解：https://zh.javascript.info/reference-type
/* ------------------------------------------------------------------------- */
// 1.默认绑定（函数独立调用）
function foo1() {
  // 浏览器中为window，node中为globalObject
  console.log(this);
}
foo1();

// 2.隐式绑定（通过对象调用函数）
var obj = {
  name: "obj",
  foo2: foo2
}
function foo2() {
  console.log(this);
}
obj.foo2();

// 3.显示绑定（通过call，apply，bind调用）
function foo3() {
  console.log(this);
}
foo3.call("显示绑定的对象")

// 4.new绑定（通过new关键字调用）
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}
new Person("coderchao", 18);
/* ------------------------------------------------------------------------- */
// 绑定规则：new>显示>隐式>默认
// 显示>隐式
function bar() {
  console.log(this);
}
var obj1 = {
  name: "obj1",
  bar: bar.bind("bind显示绑定")
}
obj1.bar(); // 打印的this是值为"bind显示绑定"的String包装对象而不是obj1，证明bind显示绑定>隐式绑定

// new>显示
function User(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}
var bindUser = User.bind("bind显示绑定");
new bindUser("coderchao", 18); // 打印的值为{ name: 'coderchao', age: 18 }
/* ------------------------------------------------------------------------- */
function foo4() {
  console.log(this);
}
var obj4 = {
  name: "obj4"
}
foo4.bind("hello").call(obj4); // 绑定到了"hello"字符串包装对象
foo4.bind("hello").bind("world").call("aaa"); //还是"hello"对象，表明bind后再进行bind或call绑定其他对象后无效
// foo4.call("hello").bind(obj4); // 报错,因为call调用后返回undefined再通过undefined.bind(obj4)
/* ------------------------------------------------------------------------- */
// 箭头函数中的this：箭头函数没有自己的this，箭头函数中使用this会去父作用域查找
var obj5 = {
  name: "obj5",
  data: null,
  getData: function () {
    setTimeout(() => {
      this.data = "箭头函数中设置的data"
      console.log(this); // 指向obj5对象，因为箭头函数没有自己的this，找到了getData函数中的this
    }, 2000);
  },
  getData2: function () {
    setTimeout(function () {
      // setTimout中的函数是独立调用的，通过显示绑定规则绑定到了全局的this
      this.data = "非箭头函数中设置的data"
      console.log(this);
    }, 2000)
  }
}
obj5.getData();
obj5.getData2();