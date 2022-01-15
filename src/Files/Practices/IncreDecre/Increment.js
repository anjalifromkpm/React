import React from "react";

class Increment extends React.Component{
    state = {
        CountNum :0
    };
    Increment = ()=>{
        this.setState({CountNum: this.state.CountNum + 1});
    }
    Decrement = ()=>{
       this.setState({CountNum:this.state.CountNum-1})
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1>Increment - Component</h1>
                    <hr /><br />
                    <h3>Counter: {this.state.CountNum}</h3>
                    <button className="mt-3 btn btn-danger btn-lg me-2" onClick={this.Increment}>InCrement</button>
                    <button className="mt-3 btn btn-danger btn-lg" onClick={this.Decrement}>InCrement</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Increment;