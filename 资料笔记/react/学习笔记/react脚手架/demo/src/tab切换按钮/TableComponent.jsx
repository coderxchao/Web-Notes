import React, { Component } from 'react'
import "./table.css"

export class TableComponent extends Component {


  tabClick(index) {
    this.props.changeIndex(index)
  }

  render() {
    const { titles, currentIndex } = this.props;
    return (
      <div className='tablayout'>
        {titles.map((value, index) =>
        (
          <span onClick={() => this.tabClick(index)} className={`tabItem${currentIndex === index ? " active" : ""}`} key={value}>{value}</span>
        ))}
      </div>
    )
  }
}

export default TableComponent
