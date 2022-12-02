import { Component } from "react";
export function withLogin(ComponentParams) {
  class NewCpn extends Component {
    render() {
      const isLogin = localStorage.getItem("isLogin")
      /* 高阶组件，将原来传入的组件封装一层 */
      return (
        <div>
          {isLogin ? <ComponentParams /> : "暂未登录，请先登录"}
        </div>
      )
    }
  }
  return NewCpn
}
