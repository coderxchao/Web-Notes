import { Component } from "react";
import { PropContext } from "./context/PropContext";
export default function withContext(ComponentContext) {
  class NewCpn extends Component {
    render() {
      return (<PropContext.Consumer>
        {value => (
          <div>
            {/* 将context的值和传入进来的props进行传递 */}
            <ComponentContext {...value} {...this.props} />
          </div>
        )}
      </PropContext.Consumer>)
    }
  }
  return NewCpn
}
