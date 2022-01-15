import React, { Component } from 'react'
import Two from './Two';

class One extends Component {
    a=10;
    render() {
        return (
            <div>
                <h1>One - 1</h1>
                <hr />
                <Two a={this.a}/>
            </div>
        )
    }
}

export default One
