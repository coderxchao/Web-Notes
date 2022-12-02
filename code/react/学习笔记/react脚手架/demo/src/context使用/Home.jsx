import React, { Component } from 'react'
import HomeChild from "./HomeChild";
import HomeChild2 from "./HomeChild2";
export class Home extends Component {
  render() {
    return (
      <div>Home
        <HomeChild />
        <HomeChild2 />
      </div>
    )
  }
}

export default Home
