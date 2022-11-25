import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        {/* 如果父组件中只有1个子节点，则该children为一个节点对象。如果有多个子节点，则会是一个数组，可通过this.props.children[0]的方式访问不同的节点 */}
        {console.log(this.props.children)}
        {this.props.children}
      </div>
    )
  }
}

export default ChildComponent
