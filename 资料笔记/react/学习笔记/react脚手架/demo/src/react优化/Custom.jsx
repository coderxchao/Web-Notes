import React, { Component } from 'react'

export class Custom extends Component {
  render() {
    console.log("Custom render()");
    return (
      <div>Custom</div>
    )
  }

  /* 通过设置shouldComponentUpdate函数的返回值让render不重新执行 */
  shouldComponentUpdate() {
    return false;
  }
}

export default Custom
