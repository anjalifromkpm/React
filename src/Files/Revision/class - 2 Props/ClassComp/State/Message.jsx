import React, { Component } from 'react'

export class Message extends Component {
    state = {
      message:'Hello'
    }
    GMHandler = ()=>{
        this.setState({
          message:'Good Morning'
        })
    }
    GAHandler = ()=>{
      this.setState({
        message:'Good Afternoon'
      })
    }
   GNHandler = ()=>{
      this.setState({
        message:'Good Night'
      })
    }
  render() {
    return (<>
      <div className='ms-1'>{this.state.message}</div>
      <button onClick={this.GMHandler} className="btn btn-success mt-3 ms-1">GM</button>
      <button onClick={this.GAHandler} className="btn btn-success mt-3 ms-1">GA</button>
      <button onClick={this.GNHandler} className="btn btn-success mt-3 ms-1">GN</button>
      </>)
  }
}

export default Message;