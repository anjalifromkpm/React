import React, { Component } from "react";
import CompoC from "./CompoC";

class CompoB extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1>Component - B</h1>
                    <pre>{JSON.stringify(this.props)}</pre>
                    <hr />
                </div>
                <CompoC Name={this.props.Name} Age={this.props.Age} Course={this.props.Course} Fee={this.props.Fee}/>
            </React.Fragment>
        )
    }
}

export default CompoB;