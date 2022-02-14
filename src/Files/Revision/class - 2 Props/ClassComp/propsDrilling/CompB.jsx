import React, { Component } from 'react';
import CompC from './CompC';

export class CompB extends Component {
  render() {
    return (<>
      <div>CompB {this.props.Name}</div>
      <div>CompC {this.props.Age}</div>
      <hr />
      <CompC Age={this.props.Age} Name={this.props.Name}/>
      </>)
  }
}

export default CompB