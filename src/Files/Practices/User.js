import react from 'react';
//import axios from 'axios';

class User extends react.Component{
    state = {
        userData:"Hello"
    }
    updateHandler = ()=>{
        console.log(this.state)
    }
    updateHandler();
    render(){
        return(
            <React.Fragment>
                <button className="btn btn-success" >Click to Open</button>
                <br/>
                <h1>{this.state.userData}</h1>
            </React.Fragment>
        )
    }
}
export default User;