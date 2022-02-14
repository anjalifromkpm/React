import React, { Component } from 'react';
import CompB from './CompB';

export class CompA extends Component {
    Name = 'praveen';
    Age = 23;
  render() {
    return (<>
      <div>CompA</div>
      <CompB Name={this.Name} Age={this.Age}/>
      </>)
  }
}

export default CompA