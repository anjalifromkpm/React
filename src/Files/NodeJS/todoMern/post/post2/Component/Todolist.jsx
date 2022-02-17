import React from 'react';
import axios from 'axios';

const Todolist = ({todolist,removeTasK,taskToupdate,showPopup}) => {

    const removeTask = (id)=>{
        axios.delete(`http://localhost:8000/api/tasks/${id}`)
        .then((res)=>{
            removeTasK(res.data)
        })
        .catch((err)=>{console.log(err)})
    }
  return (<>
    {
        todolist.length>0?<div className='container'>
        <div className='row'>
            <div className='col-6 m-auto'>
                <div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <td>S NO</td>
                                <td>NAME</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todolist.map((elem,index)=>{
                                    return(<tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{elem.name}</td>
                                        <td>
                                            <i className="bi bi-pencil-square taxt-success me-3" style={{cursor:'pointer'}}
                                            onClick={()=>{
                                                taskToupdate(elem)
                                                showPopup()
                                            }}></i>
                                            <i className="bi bi-trash text-danger" style={{cursor:'pointer'}}
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
    </div>:null
    }
  </>)
}

export default Todolist;