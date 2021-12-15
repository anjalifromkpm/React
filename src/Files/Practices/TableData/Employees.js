import React, { Component } from "react";
import Data from "./Data";

class Employees extends Component{
    state = {
        Inputvalue:''
    }
    showInputvalue = (e)=>{
        this.setState({Inputvalue:e.target.value})
    }


    Res = Data;
    Dis = this.Res.map((Elem,Index)=>{
        return <tr key={Index}>
                    <td>{Elem.id}</td>
                    <td>{Elem.name}</td>
                    <td>{Elem.email}</td>
                    <td>{Elem.country}</td>
                </tr>
    });
    render(){
        return(
            <React.Fragment>
                <div className="container w-75 mt-5">
                    <div className="d-flex justify-content-between">
                        <h2>Employees Lists: {this.state.Inputvalue}</h2>
                        <input type="text" placeholder="Search..." value={this.state.Inputvalue}
                        onChange={this.showInputvalue}
                        className="form-control w-25"/>
                    </div>
                    <table className="table table-hover mt-4 m-auto">
                        <thead>
                            <tr className="bg-success text-white">
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>COUNTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.Dis}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default Employees;