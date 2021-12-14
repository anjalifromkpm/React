import React, { Component } from 'react'
    
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
        console.log(this.state)
        event.preventDefault();
    }
    render() {
        return (
            <>
              <div className="container-fluid register top_sec bottom_sec" id="Register">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-8 border border-light p-2">
                            <div className="inner-col p-2 py-4">
                                <div className="reg-icons">
                                    <p className="m-0 text-center"><i class="bi bi-award-fill"></i></p>
                                    <p className="m-3 reg-title text-center">Register</p>
                                </div>
                                <form className="w-75 m-auto mt-5">
                                    <pre>{JSON.stringify(this.state)}</pre>
                                    <div class="mb-3">
                                        <label class="form-label">User Name</label>
                                        <input type="text" class="form-control py-2 rounded-0" name="name"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control py-2 rounded-0" name="email"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Course</label>
                                        <input type="text" class="form-control py-2 rounded-0" name="course"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Mobile</label>
                                        <input type="text" class="form-control py-2 rounded-0" name="mobile"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Salary</label>
                                        <input type="text" class="form-control py-2 rounded-0" name="salary"
                                        onChange={this.updateHandler}
                                        />
                                    </div>
                                    <input type="submit" class="btn sp-btn rounded-0 mt-3" value="Register"
                                    onClick={this.preventHandler}/>
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
