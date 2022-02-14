import React, { Component } from 'react'

export class Two extends Component {
  render() {
    return (
      <div>
          <p>I am coming from props: {this.props.Name}</p>
          <p>I am coming from props: {this.props.empArray}</p>
          <div>I am coming from props: 
            <p>name:{this.props.carObj.name}</p>
            <p>price:{this.props.carObj.price}</p>
            <p>color:{this.props.carObj.color}</p>
          </div>
          <hr />
          <button onClick={this.props.updateHandler}>Update Counter</button>
      </div>
    )
  }
}

export default Two