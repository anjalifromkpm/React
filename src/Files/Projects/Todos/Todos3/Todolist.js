import React from 'react';

const Todolist = ({Todos,deleteHandler,editHandler})=>{
  return(<>
    {
        Todos.map((elem,index)=>{
            return <div key={index} className='border d-flex justify-content-between ps-1 mb-1'>
                <h2>{elem}</h2>
                <button className='btn btn-success rounded-0' onClick={()=>{return editHandler(index)}}>Edit</button>
                <button className='btn btn-info rounded-0' onClick={()=>{return deleteHandler(index)}}>Delete</button>
            </div>
        })
    }
  </>)
}

export default Todolist;
