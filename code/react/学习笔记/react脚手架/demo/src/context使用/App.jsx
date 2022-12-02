import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from "./context/ThemeContext";
export class App extends Component {
  render() {
    return (
      <div>
        App
        <ThemeContext.Provider value={{ "color": "dark" }}>
          <Home />
        </ThemeContext.Provider>
      </div >
    )
  }
}

export default App
