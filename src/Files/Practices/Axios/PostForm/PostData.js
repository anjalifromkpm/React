import React, { Component } from 'react'
import axios from 'axios';

class PostData extends Component {
    state = {
        name:'',
        email:'',
        course:'',
        mobile:'',
        salary:''
    }
    setData = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    SubmitForm = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:3005/employees',this.state)
             .then((response)=>{
                console.log(response)
             })
             .catch((error)=>{
                 console.log(error)
             })
             console.log('*******************************');
             console.log(this.state);
    }

    render() {
        return (
            <>
                <div className='container mt-5'>
                    <div className='row'>
                        
                        <div className='col-md-6 m-auto'>
                            <div>
                            {JSON.stringify(this.state)}
                            <hr />
                                <form onSubmit={this.SubmitForm}>
                                    <div className="mb-3">
                                        <label className="form-label">name</label>
                                        <input type="text" className="form-control" name="name" onChange={this.setData} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">email</label>
                                        <input type="text" className="form-control" name="email" onChange={this.setData} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">course</label>
                                        <input type="text" className="form-control" name="course" onChange={this.setData} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">mobile</label>
                                        <input type="text" className="form-control" name="mobile" onChange={this.setData} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Salary</label>
                                        <input type="text" className="form-control" name="salary" onChange={this.setData} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PostData;
