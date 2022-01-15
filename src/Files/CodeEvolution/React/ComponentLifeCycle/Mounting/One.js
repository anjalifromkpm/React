import React, { Component } from 'react';
import Two from './Two';

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
    render() {
        console.log('render method B');
        return (
            <div>
                <Two />
            </div>
        )
    }
}

export default One
