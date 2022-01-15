import React, { Component } from 'react'

class One extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputType:'password'
        }
    }
    UpdateHandler = ()=>{
        this.setState({inputType: this.state.inputType=='password'?'text':'password'})
    }
    render() {
        return (
            <>
               <form className='col-md-5 m-auto mt-5 p-5 shadow'>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" required/>
                    </div>
                    <div className="mb-3 position-relative passwords">
                        <label className="form-label">Password</label>
                        <input type={this.state.inputType} className="form-control" />
                        <i class="bi bi-eye position-absolute" onClick={this.UpdateHandler}></i>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </>
        )
    }
}

export default One;
