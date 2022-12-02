import React, { PureComponent } from 'react'
import { withLogin } from './withLogin'

export class Home extends PureComponent {
  render() {
    return (
      <div>Home</div>
    )
  }
}

export default withLogin(Home)
