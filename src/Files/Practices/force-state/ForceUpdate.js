import React from "react";

class ForceUpdate extends React.Component{
    state = {
        Counter:0
    }
    Up = ()=>{
        this.state.Counter=2;
        this.forceUpdate();
    }
    Dn = ()=>{
        this.setState({Counter: this.state.Counter - 1});
    }
    render(){
        return(
            <React.Fragment>
                <h1>Counter: {this.state.Counter}</h1>
                <button className="btn btn-success" onClick={this.Up}>UpDate</button>
                <button className="btn btn-success" onClick={this.Dn}>Down</button>
            </React.Fragment>
        )
    }
}

export default ForceUpdate;