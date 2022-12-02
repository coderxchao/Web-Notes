import React, { PureComponent } from 'react'

export default class UncontrolledCpn extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: ""
    }
    this.usernameRef = React.createRef();
  }

  getUserNameValue(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>非受控组件</h1>
        <form>
          <label htmlFor="username">
            姓名
            {/* 非受控组件，表单的value没有和state数据绑定 */}
            <input ref={this.usernameRef} type="text" id='username' onChange={(e) => this.getUserNameValue(e)} />
            <span>{this.state.username}</span>
          </label>
        </form>
      </div>
    )
  }

  componentDidMount() {
    this.usernameRef.current.value = "Hello World"
  }
}
