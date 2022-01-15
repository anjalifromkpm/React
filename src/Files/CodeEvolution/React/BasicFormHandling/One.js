import React, { Component } from 'react';

class One extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             Email:'',
             Course:''
        }
    }
    UpdateHandler = (event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    submitHandler = (event)=>{
        event.preventDefault();
        alert(`${this.state.Username},${this.state.Email},${this.state.Course}`)
    }
    render() {
        return (
            <div className='w-50 m-auto'>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler} method='post'>
                    <div>
                        <label>Username</label>
                        <input type='text' name="Username" value={this.state.Username} onChange={this.UpdateHandler}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' name="Email" value={this.state.Email} onChange={this.UpdateHandler}/>
                    </div>
                    <div>
                        <label>Course</label>
                        <input type='text' name="Course" value={this.state.Course} onChange={this.UpdateHandler}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default One;
