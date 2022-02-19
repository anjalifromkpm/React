import React,{useState,useEffect} from 'react';
import Todolist from './Component/Todolist';
import axios from 'axios';
import Addtodolist from './Component/Addtodolist';
import Updatetodo from './Component/Updatetodo';

const App = () => {
    const [todolist,setTodolist] = useState([])
    const [taskToupdate,settaskToupdate] = useState({})
    const [showPopup,setshowPopup] = useState(true)

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
    const UpdateTask = (task)=>{
        const newlist = [...todolist];
        newlist.forEach((item)=>{
            if(item._id===task._id){
                item.name = task.name
            }
        })
        setTodolist(newlist)
    }
  return (<>
    <Addtodolist addTask={addTask}/>
    <Todolist todolist={todolist} removeTasK={removeTasK}
    taskToupdate={(task)=>{settaskToupdate(task)}} showPopup={()=>{setshowPopup(!showPopup)}}/>
    {showPopup && <Updatetodo task={taskToupdate} UpdateTask={UpdateTask} 
    removePop={()=>{setshowPopup(!showPopup)}}/>}
  </>)
}

export default App;