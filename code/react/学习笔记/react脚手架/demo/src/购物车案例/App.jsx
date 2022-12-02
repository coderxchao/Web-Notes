import React from "react"
import ShoppingCart from "./ShoppingCart";
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }

  switchVisibility() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    return (
      <ShoppingCart />
    )
  }
}

export default App
