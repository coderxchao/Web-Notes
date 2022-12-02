import React, { Component } from 'react'

export class ChildComponent extends Component {
  btnClick(value) {
    this.props.changeCount(value);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.btnClick(2)}>+2</button>
        <button onClick={() => this.btnClick(5)}>+5</button>
        <button onClick={() => this.btnClick(10)}>+10</button>
      </div>
    )
  }
}

export default ChildComponent
