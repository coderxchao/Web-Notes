import React, { PureComponent } from 'react'

export default class ControlledCpn extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "coderchao",
      sex: "man",
      hoppy: ['rap']
    }
  }

  /* 因为input的value绑定了state.username，所以通过控制修改username的值从而修改input输入框中的内容，输入框受state数据控制，所以叫做受控组件 */
  changeInputValue(e) {
    const keyName = e.target.name;
    console.log(keyName, e.target.value, e.target.checked);
    this.setState({
      [keyName]: e.target.value
    })
  }

  changeCheckedValue(e) {
    const keyName = e.target.name;
    console.log(keyName, e.target.value, e.target.checked);
    const newhoppy = [...this.state.hoppy];
    if (e.target.checked) {
      newhoppy.push(e.target.value)
    } else {
      newhoppy.splice(newhoppy.findIndex((value) => value === e.target.value), 1)
    }
    this.setState({
      [keyName]: newhoppy
    })
  }

  render() {
    return (
      <div>
        <h1>受控组件</h1>
        <form>
          <div>
            <label htmlFor="username">
              姓名
            </label>
            {/* 受控组件，表单的value被state数据绑定 */}
            <input type="text" id='username' name="username" value={this.state.username} onChange={(e) => this.changeInputValue(e)} />
            <span>{this.state.username}</span>
          </div>

          <div>
            <input type="radio" id='man' name="sex" value="man" checked={this.state.sex === "man"} onChange={(e) => this.changeInputValue(e)} />
            <label htmlFor="man">
              男
            </label>

            <input type="radio" id='woman' name="sex" value="woman" checked={this.state.sex === "woman"} onChange={(e) => this.changeInputValue(e)} />
            <label htmlFor="woman">
              女
            </label>
          </div>

          <div>
            爱好：
            <label htmlFor="sing">唱</label>
            <input type="checkbox" id='sing' value='sing' name='hoppy' checked={this.state.hoppy.findIndex((value) => (value === 'sing')) !== -1} onChange={(e) => this.changeCheckedValue(e)} />
            <label htmlFor="jump">跳</label>
            <input type="checkbox" id='jump' value='jump' name='hoppy' checked={this.state.hoppy.findIndex((value) => (value === 'jump')) !== -1} onChange={(e) => this.changeCheckedValue(e)} />
            <label htmlFor="rap">rap</label>
            <input type="checkbox" id='rap' value='rap' name='hoppy' checked={this.state.hoppy.findIndex((value) => (value === 'rap')) !== -1} onChange={(e) => this.changeCheckedValue(e)} />
          </div>
        </form>
      </div>
    )
  }
}
