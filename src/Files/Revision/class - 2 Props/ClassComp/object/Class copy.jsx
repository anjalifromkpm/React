import React, { Component } from 'react'


export class Class extends Component {
    Employee = {
        name:'nagaraju',
        location:'bengalore',
        sal:'100000',
        info:'Some quick example text to build on the card title and make up the bulk of the card',
        image:'http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg'
    }
  render() {
    return (<>
        <div className="card mt-5 ms-1" style={{width:'18rem'}}>
            <img src={this.Employee.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>Name:</b> {this.Employee.name}</h5>
                <p className="card-text"><b>Salary:</b> {this.Employee.sal}</p>
                <p className="card-text"><b>Location:</b> {this.Employee.location}</p>
                <p className="card-text"><b>Information:</b> {this.Employee.info}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>)
  }
}

export default Class;