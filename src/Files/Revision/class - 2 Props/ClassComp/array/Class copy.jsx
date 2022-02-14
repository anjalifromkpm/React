import React, { Component } from 'react'

export class Class extends Component {
    Name = 'karthik';
    Age = '23';
    Course = 'React JS';
  render() {
    return (
      <div>
        <h1>User Name: {this.Name}</h1>  
        <h1>User Age: {this.Age}</h1>  
        <h1>User Course: {this.Course}</h1>  
      </div>
    )
  }
}

export default Class;