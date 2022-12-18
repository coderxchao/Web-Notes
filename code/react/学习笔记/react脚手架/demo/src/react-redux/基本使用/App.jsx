import React, { PureComponent } from 'react'
import About from './About'
import Home from './Home'

export class App extends PureComponent {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Home />
        <About />
      </div>
    )
  }
}

export default App
