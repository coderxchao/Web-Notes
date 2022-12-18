import React, { PureComponent } from 'react'
import store from './store'
import styled from 'styled-components'
import { subCountAction } from './store/actionCreators'
const DivWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: solid 2px blue;
`
export class About extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count
    }
    /* MARK 监听到store中的state值发生变化后，更新一下UI界面的值 */
    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }

  subCount(value) {
    /* MARK 发送action事件，让store在reducer中监听到派发的action并修改值 */
    console.log("about sub");
    store.dispatch(subCountAction(value))
  }

  render() {
    return (
      <DivWrapper>
        <div>Count:{this.state.count}</div>
        <button onClick={() => this.subCount(1)}>-1</button>
        <button onClick={() => this.subCount(2)} >-2</button>
        <button onClick={() => this.subCount(5)} >-5</button>
      </DivWrapper>
    )
  }
}

export default About
