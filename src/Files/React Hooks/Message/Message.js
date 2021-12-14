import React from 'react';

class Message extends React.Component{
    state = {
        msg:'hello'
    }
    componentDidMount = ()=>{
        this.setState({msg:'Good Morning'})
    }
    render(){
        return(
            <div className='container mt-'>
                {this.state.msg}
            </div>
        )
    }
}
export default Message;