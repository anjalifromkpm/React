import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoLists = ()=>{
    const [Todos,setTodos] = useState([]);

    const AddTodo = (todo)=>{
        if(!todo.Text || /^\s*$/.test(todo.Text)){
            return;
        }
        const newTodos = [todo,...Todos]
        setTodos(newTodos);
        //console.log(todo,...Todos);
    }
  return <div>
            <h2 className='text-center mb-4'>Todo App</h2>
            <TodoForm AddTodo={AddTodo}/>
            {
                Todos.map((elem,index)=>{
                    return <div key={index} className='p-2 px-3 bg-light col-6 m-auto mt-2 d-flex justify-content-between'>
                        <p className='m-0'>{elem.Text}</p>
                        <p className='m-0'>
                            <i className="bi bi-pencil-square me-2"></i>
                            <i className="bi bi-trash"></i>
                        </p>
                    </div>
                })
            }
         </div>;
}

export default TodoLists;
