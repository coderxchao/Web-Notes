import React from "react"
import Main from "./Main";
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
      <div>
        <button onClick={() => this.switchVisibility()}>切换可见性</button>
        {this.state.isShow && <Main propsName="propsName" />}
      </div>
    )
  }
}

export default App
