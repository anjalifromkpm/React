import React, { Component } from "react";
import DrillbyObject from "./DrillbyObject";

class CompoC extends Component{
    Emp = {
        Name:this.props.Name,
        Age:this.props.Age,
        Course:this.props.Course,
        Fee:this.props.Fee
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1>Component - C</h1>
                    <pre>{JSON.stringify(this.props)}</pre>
                    <hr />
                </div>
                <DrillbyObject Emp={this.Emp}/>
            </React.Fragment>
        )
    }
}

export default CompoC;