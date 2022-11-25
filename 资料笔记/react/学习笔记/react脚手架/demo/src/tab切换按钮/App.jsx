import React, { Component } from 'react'
import TableComponent from './TableComponent';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "精选", "热门"],
      currentIndex: 0
    }
  }
  changeIndex(index) {
    this.setState({
      currentIndex: index
    })
  }
  render() {
    const { titles, currentIndex } = this.state;
    return (
      <div>
        <TableComponent titles={titles} currentIndex={currentIndex} changeIndex={(index) => this.changeIndex(index)}></TableComponent>
        {titles[currentIndex]}
      </div>
    )
  }
}

export default App
