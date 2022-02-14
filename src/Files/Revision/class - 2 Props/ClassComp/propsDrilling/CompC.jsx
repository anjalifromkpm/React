import React, { Component } from 'react'

export class CompC extends Component {
  render() {
    return (<>
      <div>CompB {this.props.Name}</div>
      <div>CompC {this.props.Age}</div>
      </>)
  }
}

export default CompC;