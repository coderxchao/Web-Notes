import React, { PureComponent } from 'react'
import store from './store/index'
import styled from 'styled-components'
import { addCountAction } from './store/actionCreators';
const DivWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 2px red solid;
`
export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count
    }
    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }

  addCount(value) {
    store.dispatch(addCountAction(value))
  }

  render() {
    return (
      <DivWrapper>
        <div>Count:{this.state.count}</div>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(2)}>+2</button>
        <button onClick={() => this.addCount(5)}>+5</button>
      </DivWrapper>
    )
  }
}

export default Home
