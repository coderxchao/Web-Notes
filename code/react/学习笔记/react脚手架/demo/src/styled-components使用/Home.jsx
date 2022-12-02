import React, { PureComponent } from 'react'
import styled from "styled-components";

const DivWrapper = styled.div`
  .btn-sub{
    color:blue
  }
  .btn-add{
    color:red
  }
  span{
    font-size: 20px;
  }
`


export class Home extends PureComponent {
  render() {
    return (
      <DivWrapper>
        <button className='btn-sub'>-1</button>
        <span>0</span>
        <button className='btn-add'>+1</button>
      </DivWrapper>
    )
  }
}

export default Home
