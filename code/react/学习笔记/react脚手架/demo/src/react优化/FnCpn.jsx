// function FnCpn() {
//   console.log("函数组件重新执行");
//   return (
//     <div>函数组件</div>
//   )
// }

import { memo } from "react";
/* 函数组件通过传入memo后可以使当父组件内部状态变化导致重新渲染时不重新渲染函数组件 */
const FnCpn = memo(function () {
  console.log("函数组件重新执行");
  return (
    <div>函数组件</div>
  )
})
export default FnCpn;
