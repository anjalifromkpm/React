import React, { Component } from 'react';

class One extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'karthik'
        }
        console.log(`constructor A: ${this.state.name}`);
    }
    componentDidMount = ()=>{
        console.log('didmount method C');
    }
    componentDidUpdate = ()=>{
        console.log('Component is Updte!');
    }
    componentWillUnmount = ()=>{
        console.log('component has destroyed/ or changed');
    }
    render() {
        console.log('render method B');
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=>{this.setState({name:'I am updated'})}}>Update State</button>
            </div>
        )
    }
}

export default One
