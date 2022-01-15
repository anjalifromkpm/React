import React from "react";

class Form2 extends React.Component{
    state = {
        Username:'',
        Email:'',
        Password:''
    }
    UpdateHandler = (event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    SubmitHandler = (event)=>{
        console.log(this.state);
        event.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
               <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-md-6">
                           <div>
                               <pre>{JSON.stringify(this.state)}</pre>
                               <form onSubmit={this.SubmitHandler}>
                                   <div className="form-group mb-3">
                                       <label className="form-label">Username</label>
                                       <input type="text" name="Username" className="form-control" onChange={this.UpdateHandler}/>
                                   </div>
                                   <div className="form-group mb-3">
                                       <label className="form-label">Email</label>
                                       <input type="text" name="Email" className="form-control" onChange={this.UpdateHandler} />
                                    </div>
                                   <div className="form-group mb-3">
                                       <label className="form-label">Password</label>
                                       <input type="text" name="Password" className="form-control" onChange={this.UpdateHandler}/>
                                   </div>
                                   <input type="submit" value="Submit" className="btn btn-success"/>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
export default Form2;