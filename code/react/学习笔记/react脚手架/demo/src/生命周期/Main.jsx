import React, { Component, PureComponent } from 'react'

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

  /* 让组件在props变化时更新state，该方法返回一个对象用于更新 state，如果返回 null 则不更新任何内容 */
  static getDerivedStateFromProps(nextProps, preState) {
    console.log("Main getDerivedStateFromProps 执行 nextProps preState", nextProps, preState);
    // return {
    //   name: "HELLO"
    // };

    return {
      message: nextProps.propsName + preState.message
    };
  }

  changeProps() {
    this.props.changeProps();
  }

  render() {
    console.log("Main render 执行", this.props);
    const { message } = this.state;
    return (
      <div>
        {message}
        <button onClick={(e) => this.changeMessage()}>改变文本</button>
        <button onClick={(e) => this.changeProps()}>改变props</button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.message === nextState.message) {
      return false;
    }
    return true; // 此声明周期函数如果返回false会造成render，componentDidUpdate声明周期函数不调用
  }

  componentDidMount() {
    console.log("Main componentDidMount 执行");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Main componentDidUpdate 执行 prevProps,prevState", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("Main componentWillUnmount 执行");
  }

  getSnapshotBeforeUpdate() {
    console.log("Main getSnapshotBeforeUpdate")
    return {
      scrollPosition: 1000
    }
  }
}

export default Main
