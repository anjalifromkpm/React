import React from "react";

class Message extends React.Component{
    state = {
        msg : "Hello MR: ...!"
    }
    gmHandler(){
        //console.log(this.state.msg);
        this.setState({msg:"Good Morning"})
        //console.log(this.state.msg)
    }
    gaHandler  = ()=>{
        this.setState({msg:"Good Afternoon"})
    }
    gnHandler = ()=>{
        this.setState({msg:"Good Night"})
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1>{this.state.msg}</h1>
                    <div className="mt-5">
                        <button className="btn btn-primary me-2" onClick={()=>{this.gmHandler()}}>GM</button>
                        <button className="btn btn-success me-2" onClick={this.gaHandler}>GA</button>
                        <button className="btn btn-info" onClick={this.gnHandler}>GN</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Message;