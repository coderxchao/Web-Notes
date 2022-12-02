import React, { PureComponent } from 'react'
import { PropContext } from "./context/PropContext";
import withContext from "./withContext";


class HomeChild extends PureComponent {
  render() {
    return (
      <div>{`name=${this.props.name}  age=${this.props.age}  sex=${this.props.sex}`}</div>
      // <PropContext.Consumer>
      //   {
      //     value => (
      //       <div>{`name=${value.name}  age=${value.age}  sex=${value.sex}`}</div>
      //     )
      //   }
      // </PropContext.Consumer>

    )
  }
}

HomeChild.contextType = PropContext;

export default withContext(HomeChild)
