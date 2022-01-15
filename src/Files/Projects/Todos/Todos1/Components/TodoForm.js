import React from 'react';

function TodoForm({lists,changeHandler,submitHandler,todos,deleteHandler}) {

    return (
        <div className='col-md-6 m-auto'>
            <form className='my-4' onSubmit={submitHandler}>
                <h1 className='mb-3'>Todo List</h1>
                <div className='d-flex justify-content-between'>
                    <input type='text' value={lists} onChange={changeHandler} className='form-control rounded-0'/>
                    <input type='submit' value='ADD' className='btn btn-success rounded-0'/>
                </div>
            </form>
            {
                todos.map((list,index)=>{
                    return(
                        <div className='todo-lists d-flex justify-content-between border p-1 align-items-center'  key={index}>
                            <h5>{list}</h5>
                            <button className='btn btn-danger rounded-0' onClick={()=>{deleteHandler(index)}}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoForm;
