import React, { Component } from 'react'

export class Couter extends Component {
    state = {
        counter:0
    }
    updateHandler = ()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
  render() {
    return (<>
      <div><b>Couter</b>: {this.state.counter}</div>
      <button onClick={this.updateHandler} className="btn btn-success mt-3">INCR</button>
      </>)
  }
}

export default Couter