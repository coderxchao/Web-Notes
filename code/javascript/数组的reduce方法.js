const arr1 = [1, 2, 3, 4, 5, 6, 7];
const finallyValue = arr1.reduce(
  (previousValue, currentValue, currentIndex, arr) => {
    console.log(
      "previousValue=" +
        previousValue +
        "  currentValue=" +
        currentValue +
        "  currentIndex=" +
        currentIndex
    );
    return previousValue + currentValue;
  },
  100
);
console.log("计算结果", finallyValue);

// 没有传入初始值会少计算一次，previousValue为数组第一个元素，currentValue为数组第二个元素
const finallyValue2 = arr1.reduce(
  (previousValue, currentValue, currentIndex, arr) => {
    console.log(
      "previousValue=" +
        previousValue +
        "  currentValue=" +
        currentValue +
        "  currentIndex=" +
        currentIndex
    );
    return previousValue + currentValue;
  }
);
console.log("计算结果", finallyValue2);
