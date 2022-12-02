import React, { Component } from 'react'
import ThemeContext from './context/ThemeContext'

export class HomeChild extends Component {
  static contextType = ThemeContext
  render() {
    console.log(this.context);
    return (
      <div>{this.context.color}</div>
    )
  }
}

export default HomeChild
