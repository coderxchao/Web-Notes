import React, { Component } from 'react'
import ThemeContext from './context/ThemeContext'

export class HomeChild extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => (
          <div>{value.color}</div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeChild
