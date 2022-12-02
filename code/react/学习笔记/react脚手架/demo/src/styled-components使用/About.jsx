import React, { PureComponent } from 'react'
import styled from 'styled-components'
const PWrapper = styled.p`
  span{
    font-size: 30px;
  }
  .sp1{
    font-weight: bold;
  }
  .sp2{
    color: pink;
  }
  .sp3{
    font-style: italic;
  }
  .btn-sub{
    color:blue
  }
  .btn-add{
    color:red
  }
`
export class About extends PureComponent {
  render() {
    return (
      <PWrapper>
        <span className='sp1'>0</span>
        <span className='sp2'>1</span>
        <span className='sp3'>2</span>
        <button className='btn-sub'>-1</button>
        <span>0</span>
        <button className='btn-add'>+1</button>
      </PWrapper>
    )
  }
}

export default About
