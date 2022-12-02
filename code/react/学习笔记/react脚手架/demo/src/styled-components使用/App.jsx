import React, { PureComponent } from 'react'
import Home from "./Home";
import About from "./About";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <About></About>
      </div>
    )
  }
}

export default App
