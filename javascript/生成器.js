/* 
1. 生成器函数需要在function的后面加一个符号：*
2. 生成器函数可以通过yield关键字来控制函数的执行流程
3. 生成器函数的返回值是一个Generator（生成器），生成器事实上是一种特殊的迭代器
*/
function* foo() {
  console.log("函数开始执行-----");
  const value1 = 100;
  console.log("value1", value1);
  const params2 = yield value1; // yield返回的值将被放到next函数执行返回的{done:false,value:返回值}对象中
  console.log("接收到第二个next传入进来的参数", params2);

  const value2 = 200;
  console.log("value2", value2);
  yield value2 * params2;

  const value3 = 300;
  console.log("value3", value3);
  yield value3;

  console.log("函数结束执行-----------");
}
// 返回生成器（一个特殊的迭代器）
const generator = foo();
console.log(generator.next()); // 执行到第一个yield，并且暂停
console.log(generator.next(6)); // 执行到第二个yield，并且暂停，这里传入参数100将会作为上一个yield的返回值
console.log(generator.next()); // 执行到第三个yield，并且暂停
console.log(generator.next()); // 执行剩余的代码
console.log(generator.next());

console.log("*******************************");
// function* createRangeIterator(arr) {
//   for (const item of arr) {
//     yield item;
//   }
// }

function* createRangeIterator(arr) {
  yield* arr; //相当于上面那种方式的语法糖
}

const generator2 = createRangeIterator([1, 2, 5, 6, 7]);
for (const g1 of generator2) {
  console.log("i", g1);
}

console.log("************************");
/* MARK 案例, 我们需要向服务器发送网络请求获取数据，一共需要发送三次请求，第二次的请求url依赖于第一次的结果，第三次的请求url依赖于第二次的结果*/
function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}
// function getData() {
//   requestData("coderchao")
//     .then((res1) => {
//       return requestData(res1 + "aaa");
//     })
//     .then((res2) => {
//       return requestData(res2 + "bbb");
//     })
//     .then((res3) => {
//       console.log("res3", res3);
//     });
// }
// 通过生成器来实现
function* getData() {
  const res1 = yield requestData("coderchao");
  const res2 = yield requestData(res1 + "aaa");
  const res3 = yield requestData(res2 + "bbb");
  console.log("res3", res3);
}
const generator3 = getData();
// generator3.next()中的value才是yield requestData返回的promise
generator3.next().value.then((res1) => {
  console.log("将res1传入", res1);
  generator3.next(res1).value.then((res2) => {
    console.log("将res2传入", res2);
    generator3.next(res2).value.then((res3) => {
      console.log("最终获取到的结果", res3);
      generator3.next(res3); //这句为了执行最后一个yield后面的代码，也就是console.log那行
    });
  });
});

/* 上面调用方式太麻烦，可以封装一个工具函数自动执行生成器函数 */
function execGenerator(genFn) {
  const generator = genFn();
  function exec(res) {
    const result = generator.next(res);
    if (result.done) return result.value;
    result.value.then((res) => {
      exec(res);
    });
  }
  exec(); //第一次调用不需要传入参数
}

execGenerator(getData);
