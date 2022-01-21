import React,{useState} from 'react';
import Todolist from './Todolist';
import './App.css';

const App = ()=>{
    const initialValue = {
        name:'',
        email:'',
        number:'',
        project_name:'',
        task_description:'',
        start_date:'',
        end_date:'',
        status:''
    }
    const [Inputvalues,setInputvalues] = useState(initialValue);
    const [Todos,setTodos] = useState([]);
    const [views,setviews] = useState(false);
    const [InputErrors,setInputErrors] = useState({});

    const changeHandler = (e)=>{
        setInputvalues({...Inputvalues,[e.target.name]:e.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const newTodos = [...Todos,Inputvalues];
        setTodos(newTodos);
    }
    const deleteHandler = (IndexValue)=>{
        const FilteredTodo = Todos.filter((elem,index)=> index !==IndexValue);
        setTodos(FilteredTodo);
    }
  return(<>
    <div className="container">
        <div className='row m-md-auto'>
            <div className='col col-md-6  m-md-auto'>
                <div className='gutter-gap'>
                    <h1 className='text-center mb-3'>To Do List</h1>
                    <form method='post' onSubmit={submitHandler}>
                       <div className='mb-3'>
                            <input type='text' placeholder='Enter Person Name' name='name' className='form-control rounded-0'
                            value={Inputvalues.name}
                            onChange={changeHandler}/>
                        </div> 
                        <div className='mb-3 d-md-flex'>
                            <input type='text' placeholder='Enter A Valid Email' name='email' className='form-control rounded-0 w-50 me-md-2'
                            value={Inputvalues.email}
                            onChange={changeHandler}/>
                            <input type='text' placeholder='Enter A Valid Mobile Number' name='number' className='form-control rounded-0 w-50'
                            value={Inputvalues.number}
                            onChange={changeHandler}/>
                        </div> 
                        <div className='mb-3'>
                            <input type='text' placeholder='Enter Project Name' name='project_name' className='form-control rounded-0'
                            value={Inputvalues.project_name}
                            onChange={changeHandler}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder='Enter Task Description' name='task_description' className='form-control rounded-0'
                            value={Inputvalues.task_description}
                            onChange={changeHandler}/>
                        </div>
                        <div className='mb-3 d-md-flex'>
                            <input type='date' name='start_date' className='form-control rounded-0 w-50 me-md-2'
                            value={Inputvalues.start_date}
                            onChange={changeHandler}/>
                            <input type='date' name='end_date' className='form-control rounded-0 w-50'
                            value={Inputvalues.end_date}
                            onChange={changeHandler}/>
                        </div> 
                        <div className='mb-3 d-md-flex align-items-center radio-status'>
                           <p className='m-0'>Task Status:</p> 
                           <input type='radio' name='status' className='' value='Planned'
                           onChange={changeHandler}/> Planned
                           <input type='radio' name='status' className='' value='In-Progress'
                           onChange={changeHandler}/> In-Progress
                           <input type='radio' name='status' className='' value='Done'
                           onChange={changeHandler}/> Done
                        </div>
                        <div className='mb-3 d-md-flex align-items-center justify-content-between mt-3'>
                           <input type='submit' value='SUBMIT' className='btn btn-primary  rounded-0'/>
                           <button type='button' className='btn btn-success rounded-0'
                           onClick={()=> setviews(true)}>VIEW</button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>

        <div className='row mt-4'>
            <div className='col  m-md-auto'>
                <div className='gutter-gap'>
                    <Todolist Todos={Todos} deleteHandler={deleteHandler} views={views}/>
                </div>
            </div>
        </div>

    </div>
  </>)
}

export default App;
