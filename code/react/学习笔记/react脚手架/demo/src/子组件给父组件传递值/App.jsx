import React, { Component } from 'react'
import ChildComponent from "./ChildComponent";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 10
    }
  }

  changeValue(value) {
    this.setState({
      count: this.state.count + value
    })
  }
  render() {
    return (
      <div>
        {this.state.count}
        <ChildComponent changeCount={(value) => this.changeValue(value)} />
      </div>
    )
  }
}

export default App
