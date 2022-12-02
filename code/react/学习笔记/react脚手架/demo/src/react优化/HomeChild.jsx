import { PureComponent } from 'react';

export class HomeChild extends PureComponent {
  render() {
    console.log("HomeChild render()");
    return (
      <div>HomeChild</div>
    )
  }
}

export default HomeChild
