import React, { Component } from 'react';
import Data from '../Data';

class Three extends Component {
    state = {
        InputValue:''
    }
    updateSearchHandler = (e)=>{
        this.setState({InputValue:e.target.value})
    }
    render() {
        return (
            <>
               <div className='container mt-5'>
                    <div className='row mb-5'>
                        <div className='col-md-6 m-auto text-center d-flex justify-content-between'>
                            <h2 className='w-auto'>Filter Data</h2>
                            <input type="text" value={this.state.InputValue}
                            className='form-control w-50'
                            placeholder='Search Data'
                            onChange={this.updateSearchHandler}
                            />
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-md-8 m-auto text-center'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Data.employees.filter((x)=>{return x.name.toLocaleLowerCase().includes(this.state.InputValue.toLocaleLowerCase())}).map((e)=>{
                                            return <>
                                                <tr>
                                                    <td>{e.id}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.email}</td>
                                                </tr>
                                            </>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
            </>
        )
    }
}

export default Three;
