import React, { Component } from 'react'

export class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    }
  }
  render() {
    return (
      <div>
        {this.props.slotContent(this.state.message)}
      </div>
    )
  }
}

export default MyComponent
