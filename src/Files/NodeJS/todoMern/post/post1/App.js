import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Addtask from './components/Addtask';

const App = () => {
    const [todolist,settodolist] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/tasks')
        .then((res)=>{
            settodolist(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const addTask = (newtask)=>{
        settodolist([...todolist,newtask])
    }
  return (<>
    <Addtask addTask={addTask}/>
  </>)
}

export default App;