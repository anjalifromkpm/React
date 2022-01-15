import React, { Component } from 'react'
import axios from 'axios';

class PostData extends Component {
    state = {
        id:'',
        name:'',
        sal:''
    }
    setData = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    SubmitForm = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:3005/postedData',this.state)
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
                                        <label className="form-label">ID</label>
                                        <input type="text" className="form-control" name="id" onChange={this.setData} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" name="name" onChange={this.setData} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Salary</label>
                                        <input type="text" className="form-control" name="sal" onChange={this.setData} />
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
