
import React, { PureComponent } from 'react'
import Home from './Home';
import { PropContext } from "./context/PropContext";
import HomeChild from './HomeChild';

export default class App extends PureComponent {

  login() {
    localStorage.setItem("isLogin", true)
    this.forceUpdate();//强制重新渲染刷新
  }

  render() {
    return (
      <div>
        <button onClick={() => this.login()}>登录</button>
        <PropContext.Provider value={{ name: "coderchao", age: 28, sex: "男" }}>
          <Home />
          <HomeChild />
        </PropContext.Provider>
      </div>
    )
  }
}
