import React, { Component } from 'react'
import One from './One';
class App extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        checkme:'',
        message:'',
        count:100
    }
    messageHandler = (event)=>{
        this.setState({count:100 - event.target.value.length})
    }
    updateData = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    FormPrevent = (event)=>{
        event.preventDefault();
    }
    render() {
        return (
            <>
              <One prev={this.FormPrevent} lenghtofInput={this.state} updateData={this.updateData}
              messageHandler ={this.messageHandler }/>  
            </>
        )
    }
}

export default App;
