import React from "react";

class One extends React.Component{
    constructor(){
        super();
        this.state={
            name:'karthik'
        }
    }
    clickHandler = (bnd)=>{
        this.setState({name:bnd})
    }
    render(){
        return(<>
            <div className="text-center">
                <p>{this.state.name}</p>
                <button onClick={this.clickHandler.bind(this,'welcome karthik')}>Click</button>
                <button onClick={this.clickHandler.bind(this,'Good Morning karthik')}>gm</button>
            </div>
        </>)
    }
}
export default One;