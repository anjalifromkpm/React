import React, { Component } from 'react';

class Two extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'karthik'
        }
        console.log(`Two: constructor A: ${this.state.name}`);
    }
    componentDidMount = ()=>{
        console.log('Two : didmount method C');
    }
    render() {
        console.log('Two : render method B');
        return (
            <div>
                
            </div>
        )
    }
}

export default Two;
