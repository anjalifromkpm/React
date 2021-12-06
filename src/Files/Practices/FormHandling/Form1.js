import React from "react";

class Form1 extends React.Component{
    state = {
        name:'',
        email:''
    }
    emHandler = (event)=>{
        this.setState({email:event.target.value})
    }
    nmHandler = (event)=>{
        this.setState({name:event.target.value})
    }
    render(){
        return(
            <React.Fragment>
                <form>
                    <div>
                        <label className="form-label">Name:</label>
                        <input type="text" name="name" onChange={this.nmHandler}/>
                        <p>{this.state.name}</p>
                    </div>
                    <div>
                        <label className="form-label">Email:</label>
                        <input type="email" name="email" onChange={this.emHandler}/>
                        <p>{this.state.email}</p>
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
                <br /><br />
                <pre>{JSON.stringify(this.state)}</pre>
            </React.Fragment>
        )
    }
}

export default Form1;