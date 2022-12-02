import React, { PureComponent } from 'react'
import ClassCpn from './ClassCpn';
import FuncCpn from './FuncCpn';

export class App extends PureComponent {
  constructor() {
    super();
    this.ref2 = React.createRef();
    this.classCpnRef = React.createRef();
    this.funcCpnRef = React.createRef();
  }
  getDOMElement() {
    const h1 = this.refs.ref1;
    console.log(h1);
    const h2 = this.ref2.current;
    console.log(h2);
    const h3 = this.ref3;
    console.log(h3);
    const classCpn = this.classCpnRef.current;
    console.log(classCpn);
    const funcCpn = this.funcCpnRef.current;
    console.log(funcCpn);
  }

  setElementRef(element) {
    this.ref3 = element;
  }

  render() {
    return (
      <div>
        <h1 ref="ref1">绑定dom元素方式一</h1>
        <h2 ref={this.ref2}>绑定dom元素方式二</h2>
        <h3 ref={(el) => this.setElementRef(el)}>绑定dom元素方式三</h3>
        <ClassCpn ref={this.classCpnRef} />
        <FuncCpn ref={this.funcCpnRef} />
        <button onClick={() => this.getDOMElement()}>获取DOM元素</button>
      </div>
    )
  }
}

export default App
