import React,{useState} from 'react';
import axios from 'axios';

const Addtask = ({addTask}) => {
    const [task,settask]=useState('');

    const addtask = ()=>{
        if(task.trim()===''){
            return
        }else{
            axios.post('http://localhost:8000/api/tasks',{
                todo:task,
                isComplete:false
            }).then((res)=>{
                settask('')
                addTask(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
  return (<>
    <div className='todolist'>
        <input type='text' placeholder='Add task...' value={task}
        onChange={(e)=>{settask(e.target.value)}}/>
        <button onClick={()=>{addtask()}}>ADD TASK</button>
    </div>
  </>)
}

export default Addtask