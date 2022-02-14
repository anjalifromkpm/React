import React, { Component } from 'react';
import Two from './Two';

export class One extends Component {
    state = {
        counter:0
    }
    Name = 'praveen'; // variable
    empArray = ['Naga',25,'civil']; //array
    carObj = {name:'tata',price:250000,color:'red'} // object

    updateHandler = ()=>{
        this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <div>
          <p>One component name: {this.Name}</p>
          <p>One component empArray: {this.empArray}</p>
          <p>One Counter: {this.state.counter}</p>
          <hr />
          <Two Name={this.Name} empArray={this.empArray} carObj={this.carObj} updateHandler={this.updateHandler}/>
      </div>

    )
  }
}

export default One