import { ADD_COUNT, SUB_COUNT } from "./constants"
/* MARK 调用函数返回dispatch需要派发的action对象 */
export const addCountAction = function (value) {
  return {
    type: ADD_COUNT,
    value: value
  }
}

export const subCountAction = function (value) {
  return {
    type: SUB_COUNT,
    value: value
  }
}
