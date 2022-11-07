/* https://segmentfault.com/q/1010000011676760 */
var obj = { name: "obj" }
// console.log(obj.__proto__);
// console.log(obj.__proto__ === Object.prototype);
// console.log(Object.getOwnPropertyDescriptors(Object.prototype));
// console.log(Object.getOwnPropertyDescriptor(Object, "prototype"));
// console.log(Object.getOwnPropertyDescriptors(Object));

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new Person("coderchao", 18)
console.log(Object.getOwnPropertyDescriptors(p1.__proto__));
console.log(p1.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Function.prototype === Object.__proto__);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

/* ------------------------------------------------------------------------- */
/* 通过原型实现继承 */
function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}


function Animal(nickname, age, friends) {
  this.nickname = nickname;
  this.age = age;
  this.friends = friends;
}
Animal.prototype.running = function () {
  console.log(this.nickname + "在跑");
}

function Dog(nickname, age, friends, other) {
  Animal.call(this, nickname, age, friends)
  this.other = other;
}
inheritPrototype(Dog, Animal)
Dog.prototype.eating = function () {
  console.log(this.nickname + "在吃东西");
}

var dog1 = new Dog("小红狗", 2, ["小白", "小黑"], "小红狗红又红");
var dog2 = new Dog("小黑狗", 3, ["小兰", "小紫"], "小黑狗黑又黑")
dog1.eating();
dog1.running()

