import React,{useState} from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';

const App = ()=>{
    const [lists,setlists]=useState('');
    const [todos,settodos]=useState([]);
    const changeHandler=(e)=>{
        setlists(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const newTodos=[...todos,lists];
        settodos(newTodos);
        setlists('');
    }
    const deleteHandler=(index)=>{
        const newtodos=todos.filter((todo,inde)=>{return inde!==index});
        settodos(newtodos)

    }
    return (
        <div className='col-md-6 m-md-auto pt-4 text-center'>
            <TodoForm lists={lists} changeHandler={changeHandler} submitHandler={submitHandler} todos={todos} deleteHandler={deleteHandler}/>
        </div>
    )
}

export default App;
