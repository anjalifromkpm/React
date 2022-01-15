import React from "react";

class Form3 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <form>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" placeholder="Nmae"/>
                                    <label>Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" placeholder="Email"/>
                                    <label>Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" placeholder="Password"/>
                                    <label>Password</label>
                                </div>
                                <input type="submit" className="btn border border-danger text-danger "/>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Form3;
