import React from 'react';

class One extends React.Component{

    state = {
        user:'karthik'
    }
    handler=()=>{
        this.setState({user:'Karthik M'})
    }
    render(){
        return(
            <>
                <h3>Name: {this.state.user}</h3>
                <button className="btn btn-success" onClick={this.handler}>Update Name</button>
            </>
        )
    }
}
export default One;