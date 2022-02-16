import React,{useState,useEffect} from 'react';
import Todolist from './Component/Todolist';
import axios from 'axios';
import Addtodolist from './Component/Addtodolist';

const App = () => {
    const [todolist,setTodolist] = useState([])

    useEffect(()=>{
        axios('http://localhost:8000/api/tasks')
        .then((res)=>{
            setTodolist(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const addTask = (newTask)=>{
        setTodolist([...todolist,newTask])
    }
    const removeTasK = (task)=>{
        const newtodo = todolist.filter((item,index)=>{return !(item._id===task._id)})
        setTodolist(newtodo)
    }
  return (<>
    <Addtodolist addTask={addTask}/>
    <Todolist todolist={todolist} removeTasK={removeTasK}/>
  </>)
}

export default App;