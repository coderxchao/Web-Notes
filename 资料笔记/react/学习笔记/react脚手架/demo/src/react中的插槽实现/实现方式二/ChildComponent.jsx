import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div className="left">{this.props.leftProps}</div>
        <div className="center">{this.props.centerProps}</div>
        <div className="right">{this.props.rightProps}</div>
      </div>
    )
  }
}

export default ChildComponent
