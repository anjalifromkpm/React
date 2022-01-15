import React, { Component } from 'react';
import axios from 'axios';
    
class Register extends Component {
    state = {
        name:'',
        email:'',
        course:'',
        mobile:'',
        salary:''
    }
    updateHandler = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    preventHandler = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:3005/employees',this.state)
             .then((response)=>{
                console.log(response)
             })
             .catch((error)=>{
                console.log(error)
             })
        console.log(this.state)
    }
    render() {
        return (
            <>
              <div className="container-fluid register top_sec bottom_sec" id="Register">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-8 border border-light p-2">
                            <div className="inner-col p-2 py-4">
                                <div className="reg-icons">
                                    <p className="m-0 text-center"><i className="bi bi-award-fill"></i></p>
                                    <p className="m-3 reg-title text-center">Register</p>
                                </div>
                                <form className="w-75 m-auto mt-5" onSubmit={this.preventHandler}>
                                    <pre>{JSON.stringify(this.state)}</pre>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control py-2 rounded-0" name="name"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control py-2 rounded-0" name="email"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Course</label>
                                        <input type="text" className="form-control py-2 rounded-0" name="course"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Mobile</label>
                                        <input type="text" className="form-control py-2 rounded-0" name="mobile"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Salary</label>
                                        <input type="text" className="form-control py-2 rounded-0" name="salary"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <input type="submit" className="btn sp-btn rounded-0 mt-3" value="Register" />
                                </form>
                            </div>
                        </div>  
                    </div>
                </div> 
            </>
        )
    }
}

export default Register;
