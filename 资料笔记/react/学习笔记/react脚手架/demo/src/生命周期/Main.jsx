import React, { Component } from 'react'

export class Main extends Component {
  constructor(props) {
    super(props)
    console.log("Main constructor 执行");
    this.state = {
      message: "Hello World"
    }
  }

  changeMessage() {
    this.setState({
      message: "改变了"
    })
  }

  render() {
    console.log("Main render 执行", this.props);
    const { message } = this.state;
    return (
      <div>
        {message}
        <button onClick={(e) => this.changeMessage()}>改变文本</button>
      </div>
    )
  }

  shouldComponentUpdate() {
    return true; // 此声明周期函数如果返回false会造成render，componentDidUpdate声明周期函数不调用
  }

  componentDidMount() {
    console.log("Main componentDidMount 执行");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Main componentDidUpdate 执行", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("Main componentWillUnmount 执行");
  }
}

export default Main
