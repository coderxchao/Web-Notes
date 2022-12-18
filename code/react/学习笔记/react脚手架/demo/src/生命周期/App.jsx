import React from "react"
import Main from "./Main";
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isShow: true,
      propsName: "传进来的props"
    }
  }

  switchVisibility() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  changeProps() {
    this.setState({
      propsName: "改变的props"
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.switchVisibility()}>切换可见性</button>
        {this.state.isShow && <Main propsName={this.state.propsName} changeProps={() => { this.changeProps() }} />}
      </div>
    )
  }
}

export default App
