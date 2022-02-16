import React from 'react';
import axios from 'axios';
const Todolist = ({todolist,removeTasK}) => {

    const removeTask = (id)=>{
        axios.delete(`http://localhost:8000/api/tasks/${id}`)
        .then((res)=>{
            removeTasK(res.data)
        })
        .catch((err)=>{console.log(err)})
    }
  return (<>
    <div className='container'>
        <div className='row'>
            <div className='col-6 m-auto'>
                <div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <td>S NO</td>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todolist.map((elem,index)=>{
                                    return(<tr>
                                        <td>{index+1}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.email}</td>
                                        <td>
                                            <i class="bi bi-pencil-square taxt-success me-3" style={{cursor:'pointer'}}></i>
                                            <i class="bi bi-trash text-danger" style={{cursor:'pointer'}}
                                            onClick={()=>{removeTask(elem._id)}}></i>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Todolist;