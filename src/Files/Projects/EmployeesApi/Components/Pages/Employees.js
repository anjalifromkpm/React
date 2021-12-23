import React, { Component } from 'react';
import axios from 'axios';

class Employees extends Component {
    state = {
        userData:[],
        ae:0,
        deletamsg:''
    }
    componentDidMount = ()=>{
        axios.get('http://localhost:3005/employees')
             .then((reponse)=>{
                this.setState({userData:reponse.data})
                this.setState({ae:this.state.userData.length})
             })
             .catch()
             
    }
    deleteEMP = (empid)=>{
        //alert(empid)
        axios.delete('http://localhost:3005/employees'+empid)
             .then((response)=>{
                 this.setState({deletamsg:'Message was deleted successfully !'})

             })
             .catch((error)=>{
                this.setState({deletamsg:"error"})
             })
    }
    render() {
        
        return (
            <>
              <div className="container-fluid top_sec bottom_sec">
                    <div className="row align-items-center">
                        <div className="col-8 m-auto">  
                            <p className='text-center mb-3'><b>Available Employess <span className='text-success'>( {this.state.ae} )</span></b></p>
                            {this.state.deletamsg}
                            <div>
                                {/* <pre>{JSON.stringify(this.state.userData)}</pre> */}
                                {
                                    Object.keys(this.state.userData).length>0? 
                                    <>
                                        <table className="table table-dark table-hover">
                                            <thead>
                                                <tr>
                                                    <th>NAME</th>
                                                    <th>EMAIL</th>
                                                    <th>COURSE</th>
                                                    <th>MOBILE</th>
                                                    <th>SALARY</th>
                                                    <th>DELETE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.userData.map((elem,index)=>{
                                                        return (
                                                            <tr key={index}>
                                                                <td>{elem.name}</td>
                                                                <td>{elem.email}</td>
                                                                <td>{elem.course}</td>
                                                                <td>{elem.mobile}</td>
                                                                <td>{elem.salary}</td>
                                                                <td><button onClick={this.deleteEMP.bind(this,elem.id)} className='btn text-white border rounded-0 bg-danger'>Delete</button></td>
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
