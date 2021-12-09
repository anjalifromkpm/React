import React, { Component } from 'react';
import axios from 'axios';

class Employees extends Component {
    state = {
        userData:[]
    }
    componentDidMount = ()=>{
        axios.get('http://localhost:3002/employees')
             .then((reponse)=>{
                this.setState({userData:reponse.data})
             })
             .catch()
    }
    render() {
        
        return (
            <>
              <div className="container-fluid top_sec bottom_sec">
                    <div className="row align-items-center">
                        <div className="col-8 m-auto">
                            <div>
                                {/* <pre>{JSON.stringify(this.state.userData)}</pre> */}
                                {
                                    Object.keys(this.state.userData).length>0? 
                                    <>
                                        <table className="table table-dark table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>NAME</th>
                                                    <th>EMAIL</th>
                                                    <th>COURSE</th>
                                                    <th>MOBILE</th>
                                                    <th>SALARY</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.userData.map((elem,index)=>{
                                                        return (
                                                            <tr key={index}>
                                                                <td>{elem.id}</td>
                                                                <td>{elem.name}</td>
                                                                <td>{elem.email}</td>
                                                                <td>{elem.course}</td>
                                                                <td>{elem.mobile}</td>
                                                                <td>{elem.salary}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </> : 
                                    <> <h1 className="text-center">Data is not Available.........!</h1> </>
                                }
                            </div>
                        </div>  
                    </div>
                </div> 
            </>
        )
    }
}

export default Employees;
