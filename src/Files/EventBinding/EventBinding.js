import React, {  Component } from "react";

class EventBinding extends Component{
    state = {
        msg:"Hello.."
    }
    UpdateHandler = (value)=>{
        this.setState({msg:value});
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.msg}</h1>
                <div className="btn-group">
                    <button className="btn btn-info" onClick={this.UpdateHandler.bind(this,"Good Morning")}>GM</button>
                    <button className="btn btn-info" onClick={this.UpdateHandler.bind(this,"Good Afternoon")}>GA</button>
                    <button className="btn btn-info" onClick={this.UpdateHandler.bind(this,"Good Night")}>GN</button>
                </div>
            </React.Fragment>
        )
    }
}

export default EventBinding;