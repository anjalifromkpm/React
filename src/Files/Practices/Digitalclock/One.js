import React from 'react';

class One extends React.Component{
    state = {
        clockshow:new Date().toLocaleTimeString()
    }
    componentDidMount = ()=>{
        setInterval(()=>{
            this.setState({clockshow:new Date().toLocaleTimeString()})
        },1000)
    }
    render(){
        return(
            <>
                <h2 className='text-center color-success text-decoration-underline my-4'>Digital Clock</h2>
                <p className='text-center'>Time Remaining:&nbsp; <b>{this.state.clockshow}</b></p>
            </>
    
        )
    }
}
export default One;