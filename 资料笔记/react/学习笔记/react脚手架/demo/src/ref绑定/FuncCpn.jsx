import React from 'react'
/* 函数组件通过forwardRef可以将ref转发到jsx中的dom元素 */
const FuncCpn = React.forwardRef((props, ref) => {
  return (
    <div>
      <ul ref={ref}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
})
export default FuncCpn
