
import React, { PureComponent } from 'react'
import Home from './Home';

export default class App extends PureComponent {

  login() {
    localStorage.setItem("isLogin", true)
    this.forceUpdate();//强制重新渲染刷新
  }

  render() {
    return (
      <div>
        <button onClick={() => this.login()}>登录</button>
        <Home />
      </div>
    )
  }
}
