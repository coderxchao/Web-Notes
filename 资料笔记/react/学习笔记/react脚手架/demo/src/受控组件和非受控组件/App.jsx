import React, { PureComponent } from 'react'
import ControlledCpn from './ControlledCpn'
import UncontrolledCpn from './UncontrolledCpn'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UncontrolledCpn />
        <ControlledCpn />
      </div>
    )
  }
}
