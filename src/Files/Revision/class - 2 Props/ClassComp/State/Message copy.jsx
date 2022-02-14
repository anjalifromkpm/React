import React, { Component } from 'react'

export class Message extends Component {
    state = {
        message:'Hello'
    }
  render() {
    return (<>
        <div className='ms-1'>{this.state.message}</div>
        <button onClick={()=>{this.setState({message:'Good Morning'})}} className="btn btn-success mt-3 ms-1">GM</button>
        <button onClick={()=>{this.setState({message:'Good After Noon'})}}  className="btn btn-success mt-3 ms-1">GA</button>
        <button onClick={()=>{this.setState({message:'Good Night'})}}  className="btn btn-success mt-3 ms-1">GN</button>
    </>)
  }
}

export default Message