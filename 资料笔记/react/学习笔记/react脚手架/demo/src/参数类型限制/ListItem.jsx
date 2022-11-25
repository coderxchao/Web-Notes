import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class ListItem extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.lists.map((value) => (<li key={value}>{value}</li>))}
        </ul>
      </div>
    )
  }
}

/* 限制传入的props属性类型 */
ListItem.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.string)
}
/* 设置props默认值 */
ListItem.defaultProps = {
  lists: []
}
export default ListItem;
