import React, { Component } from 'react'
import MyComponent from './作用域插槽/MyComponent'
import ChildComponent from './实现方式一/ChildComponent'
import ChildComponent2 from './实现方式二/ChildComponent'

export class App extends Component {
  render() {
    return (
      <div>
        <ChildComponent>
          <h2>插槽实现方式一</h2>
        </ChildComponent>
        <ChildComponent>
          <h3>插槽实现方式多个子节点</h3>
          <h4>插槽实现方式多个子节点</h4>
          <h5>插槽实现方式多个子节点</h5>
        </ChildComponent>

        <ChildComponent2 leftProps={<div>左边的内容</div>}
          centerProps={<div>中间的内容</div>}
          rightProps={<div>右边的内容</div>} />

        {/* 将子组件的数据传递了过来 */}
        <MyComponent slotContent={(message) => <h1>{message}</h1>} />
      </div>
    )
  }
}

export default App
