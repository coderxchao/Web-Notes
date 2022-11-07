const STATUS_PENDING = "pending";
const STATUS_FULEFILLED = "fulfilled";
const STATUS_REJECTED = "rejected";
let promiseName = 0;
class XCPromise {
  /* MARK 1. 构造函数传入一个立即执行函数 */
  constructor(executor) {
    this.status = STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];
    promiseName++;
    this.promiseName = promiseName; // 为了查看是否为不同的promise
    /* MARK 3. 实现resove和reject回调函数 */
    const resolve = (value) => {
      if (this.status === STATUS_PENDING) {
        // this.status = STATUS_FULEFILLED; 这个放在此处会导致then函数中返回的结果为undefined

        /* MARK 4. 将代码放入微任务队列异步执行，为了收集then函数中的回调函数并调用 */
        queueMicrotask(() => {
          if (this.status !== STATUS_PENDING) return; // 这里如果不加此判断会导致回调完resove后还可以回调reject
          this.status = STATUS_FULEFILLED;
          this.value = value;
          // 执行所有then函数中的回调函数（订阅函数）
          this.onFulfilledFns.forEach((fn) => {
            fn();
          });
        });
      }
    };
    const reject = (reason) => {
      if (this.status === STATUS_PENDING) {
        // this.status = STATUS_REJECTED;
        queueMicrotask(() => {
          console.log("-----------", this.status, this.onRejectedFns.length);
          if (this.status !== STATUS_PENDING) return;
          this.status = STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => {
            fn();
          });
        });
      }
    };
    /* MARK 2. 通过构造函数传入的立即执行函数有2个参数，分别是resolve和reject回调函数 */
    try {
      executor(resolve, reject);
    } catch (error) {
      // 当executor执行代码中抛出异常需要捕获到reject中
      reject(error);
    }
  }

  /* MARK 5. then函数实现 */
  then(onFulfilled, onRejected) {
    /* 这里是为了可以实现catch和final方法效果 */
    const defaultOnRejected = (err) => {
      throw err;
    };
    onRejected = onRejected || defaultOnRejected;

    const defaultOnFulfilled = (value) => {
      return value;
    };
    onFulfilled = onFulfilled || defaultOnFulfilled;

    // 返回new Promise是为了可以链式调用then
    return new XCPromise((resolve, reject) => {
      // 如果状态已经确定了，直接调用（比如then函数调用放在一个异步函数中）
      if (
        this.status === STATUS_FULEFILLED &&
        typeof onFulfilled === "function"
      ) {
        // 这里代码下面有复用，可以提取到一个函数中
        try {
          const value = onFulfilled(this.value);
          /* MARK 6. 将then函数中的onfulfilled回调函数的返回值放到下一个promise的resolve中，方便链式调用 */
          resolve(value);
        } catch (err) {
          // 针对抛出异常的处理
          reject(err);
        }
      }
      if (this.status === STATUS_REJECTED && typeof onRejected === "function") {
        try {
          const reason = onRejected(this.reason);
          resolve(reason);
        } catch (err) {
          reject(err);
        }
      }
      // 状态是pending，存放到数组中
      if (this.status === STATUS_PENDING) {
        // 将多个then函数中传入的回调函数保存到数组
        if (typeof onFulfilled === "function") {
          // this.onFulfilledFns.push(onfulfilled);
          /* MARK 7. 收集then函数 */
          this.onFulfilledFns.push(() => {
            try {
              const value = onFulfilled(this.value);
              resolve(value);
            } catch (err) {
              reject(err);
            }
          });
          console.log(
            "*******",
            "push一个onFulfilledFns函数进去",
            this.onFulfilledFns.length,
            this
          );
        }
        if (typeof onRejected === "function") {
          // this.onRejectedFns.push(onrejected);
          this.onRejectedFns.push(() => {
            try {
              const reason = onRejected(this.reason);
              resolve(reason);
            } catch (err) {
              reject(err);
            }
          });
          console.log(
            "*******",
            "push一个onRejected函数进去",
            this.onRejectedFns.length,
            this
          );
        }
      }
    });
  }

  catch(onRejected) {
    this.then(undefined, onRejected);
  }

  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }

  static resolve(value) {
    return new HYPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new HYPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
    return new HYPromise((resolve, reject) => {
      const values = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res);
            if (values.length === promises.length) {
              resolve(values);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }

  static allSettled(promises) {
    return new HYPromise((resolve) => {
      const results = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res });
            if (results.length === promises.length) {
              resolve(results);
            }
          },
          (err) => {
            results.push({ status: PROMISE_STATUS_REJECTED, value: err });
            if (results.length === promises.length) {
              resolve(results);
            }
          }
        );
      });
    });
  }

  static race(promises) {
    return new HYPromise((resolve, reject) => {
      promises.forEach((promise) => {
        // promise.then(res => {
        //   resolve(res)
        // }, err => {
        //   reject(err)
        // })
        promise.then(resolve, reject);
      });
    });
  }

  static any(promises) {
    // resolve必须等到有一个成功的结果
    // reject所有的都失败才执行reject
    const reasons = [];
    return new HYPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, (err) => {
          reasons.push(err);
          if (reasons.length === promises.length) {
            reject(new AggregateError(reasons));
          }
        });
      });
    });
  }
}
// ------------------------------------------------------------
// new XCPromise((resolve, reject) => {
//   // reject("失败了");
//   resolve("成功了");
// })
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
const promise = new XCPromise((resolve, reject) => {
  resolve("成功");
});
setTimeout(() => {
  promise.then((res) => {
    console.log("res", res);
  });
}, 2000);
