import React, { Component } from "react";
import CompoB from "./CompoB";

class CompoA extends Component{
    Name = "Karthik";
    Age = 23;
    Course = "React/Java";
    Fee  = 30000;
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1>Component - A</h1>
                    <hr />
                </div>
                <CompoB Name={this.Name} Age={this.Age} Course={this.Course} Fee={this.Fee}/>
            </React.Fragment>
        )
    }
}

export default CompoA;