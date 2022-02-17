import React,{useState} from 'react';
import './updatetodo.css';
import axios from 'axios';

const  Updatetodo= ({task,UpdateTask,removePop}) => {
    const [taskname,setTaskname] = useState(task.name);
    const updatetask = ()=>{
        if(taskname.trim()==='' && task.name===taskname){
            return
        }else{
            axios.put(`http://localhost:8000/api/tasks/${task._id}`,{
                _id:task._id,
                name:taskname
            }).then((res)=>{
                removePop()
                UpdateTask(res.data)
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
  return (<>
    <div className='popup'>
        <div className='popup-content'>
            <input type='text' placeholder='Update Task..... ' className="form-control rounded-0" value={taskname} 
            onChange={(e)=>{setTaskname(e.target.value)}}/>
            <button type='button'
            onClick={()=>{updatetask()}} className="btn btn-primary rounded-0 mt-3">Update</button>
        </div>
    </div>
  </>)
}

export default Updatetodo;