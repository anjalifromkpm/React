import React, { Component } from 'react';
import One from './One';

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'kaarthik'
        }
    }
    componentDidMount = ()=>{
        setInterval(()=>{
            this.setState({
                name:'karthik'
            })
        },2000)
    }
    
    render() {
        console.log("parent is rendering");
        return (
            <div>
                Parenent <br />
                <One name={this.state.name}/>
            </div>
        )
    }
}

export default Parent;
