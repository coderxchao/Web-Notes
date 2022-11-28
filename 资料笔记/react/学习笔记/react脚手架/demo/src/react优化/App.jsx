import React, { Component } from 'react'
import Home from "./Home.jsx";
import HomeChild from "./HomeChild";
import FnCpn from "./FnCpn";
import Custom from './Custom.jsx';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    }
  }

  changeMessage() {
    this.setState({
      message: "你好啊，React"
    })
  }

  render() {
    console.log("App render()");
    return (
      <div>
        {this.state.message}
        <button onClick={(e) => this.changeMessage()}>修改APP中的message</button>
        {/* 当点击按钮后，修改了message会造成App的render函数重新执行，这样又会导致App中的子组件Home，和HomeChild的render函数重新执行。通过让HomeChild继承自PureComponent可让HomeChild的render函数不重新执行 */}
        <Home />
        <HomeChild />
        <FnCpn />
        <Custom />
      </div>
    )
  }
}

export default App
