import React, { Component } from 'react'
import ListItem from "./ListItem";
export class App extends Component {
  render() {
    return (
      <div><ListItem lists={["高级JavaScript", "CSS权威指南", "HTTP权威指南"]} /></div>
    )
  }
}

export default App
