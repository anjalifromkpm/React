import React,{useState,useEffect} from 'react';
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
    const [isSubmit,setisSubmit] = useState(false);

    const changeHandler = (e)=>{
        setInputvalues({...Inputvalues,[e.target.name]:e.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        setInputErrors(Validate(Inputvalues))
        // // const newTodos = [...Todos,Inputvalues];
        // // setTodos(newTodos);
        setisSubmit(true);
    }
    useEffect(()=>{
        if((Object.keys(InputErrors).length===0 && isSubmit)){
            const newTodos = [...Todos,Inputvalues];
            setTodos(newTodos);
        }
    },[InputErrors])

    const deleteHandler = (IndexValue)=>{
        const FilteredTodo = Todos.filter((elem,index)=> index !==IndexValue);
        setTodos(FilteredTodo);
    }
    const editHandler = (editIndexValue)=>{
        const FilteredTodo = Todos.filter((elem,index)=> index !==editIndexValue);
        setTodos(FilteredTodo);
        const editSelector = Todos.find((elem,index)=> index ===editIndexValue);
        setInputvalues({
            name:editSelector.name,
            email:editSelector.email,
            number:editSelector.number,
            project_name:editSelector.project_name,
            task_description:editSelector.task_description,
            start_date:editSelector.start_date,
            end_date:editSelector.end_date,
            status:editSelector.status
        })
    }

    const Validate = (values)=>{
        const error = {};
        const OnlyNum = /^[0-9 ]*$/;
        const OnlyStrings = /^[a-zA-Z ]*$/;
        const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!values.name){
            error.name='Name input shouldn\t be empty!'
        }else if(!values.name.match(OnlyStrings)){
            error.name='Please enter only Alphabets'
        }
        if(!values.email){
            error.email='Email input shouldn\t be empty!'
        }else if(!values.email.match(isEmail)){
            error.email='Please provide a valid email'
        }
        if(!values.number){
            error.number='Number input shouldn\t be empty!'
        }else if(!values.number.match(OnlyNum)){
            error.number='Please enter numbers only'
        }else if(values.number.length<10){
            error.number='Mobile number should contain atleast 10 characters'
        }else if(values.number.length>10){
            error.number='Mobile number max 10 Digit'
        }else if((values.number.charAt(0)==1)){
            error.number='Should not start with 1,2,3'
        }else if((values.number.charAt(0)==2)){
            error.number='Should not start with 1,2,3'
        }else if((values.number.charAt(0)==3)){
            error.number='Should not start with 1,2,3'
        }
        if(!values.project_name){
            error.project_name='Project Name input shouldn\t be empty!'
        }else if((values.project_name.length<3)){
            error.project_name='Project name should contain atleast 3'
        }else if((values.project_name.length>30)){
            error.project_name='Project name should contain max 30 characters'
        }
        if(!values.task_description){
            error.task_description='Task description input shouldn\t be empty!'
        }else if((values.task_description.length<3)){
            error.task_description='Project description should contain atleast 3'
        }else if((values.task_description.length>30)){
            error.task_description='Project description should contain max 30 characters'
        }
        if(!values.start_date){
            error.start_date='Please select start date!'
        }
        if(!values.end_date){
            error.end_date='Please select end date!'
        }
        if(!values.status){
            error.status='Please choose any status!'
        }

        return error;
    }

  return(<>
    <div className="container">
        <div className='row m-md-auto'>
            <div className='col col-md-6  m-md-auto p-3 shadow'>
                <div className='gutter-gap'>
                    <h1 className='text-center mb-3'>To Do List</h1>
                    <form method='post' onSubmit={submitHandler}>
                       <div className='mb-3'>
                            <input type='text' placeholder='Enter Person Name' name='name' className='form-control rounded-0'
                            value={Inputvalues.name}
                            onChange={changeHandler}/>
                            <p className='text-danger m-0'>{InputErrors.name}</p>
                        </div> 
                        <div className='mb-3 d-md-flex '>
                            <div className='w-50 me-1'>
                                <input type='text' placeholder='Enter A Valid Email' name='email' className='form-control rounded-0'
                                value={Inputvalues.email}
                                onChange={changeHandler}/>
                                <p className='text-danger m-0'>{InputErrors.email}</p>
                            </div>
                            <div className='w-50 ms-1'>
                                <input type='text' placeholder='Enter A Valid Mobile Number' name='number' className='form-control rounded-0'
                                value={Inputvalues.number}
                                onChange={changeHandler}/>
                                <p className='text-danger m-0'>{InputErrors.number}</p>
                            </div>
                        </div> 
                        <div className='mb-3'>
                            <input type='text' placeholder='Enter Project Name' name='project_name' className='form-control rounded-0'
                            value={Inputvalues.project_name}
                            onChange={changeHandler}/>
                            <p className='text-danger m-0'>{InputErrors.project_name}</p>
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder='Enter Task Description' name='task_description' className='form-control rounded-0'
                            value={Inputvalues.task_description}
                            onChange={changeHandler}/>
                            <p className='text-danger m-0'>{InputErrors.task_description}</p>
                        </div>
                        <div className='mb-3 d-md-flex'>
                        <div className='w-50 me-1'>
                                <p>Start Date</p>
                                <input type='date' name='start_date' className='form-control rounded-0'
                                value={Inputvalues.start_date}
                                onChange={changeHandler}/>
                                <p className='text-danger m-0'>{InputErrors.start_date}</p>
                            </div>
                            <div className='w-50 ms-1'>
                                <p>End Date</p>
                                <input type='date' name='end_date' className='form-control rounded-0'
                                value={Inputvalues.end_date}
                                onChange={changeHandler}/>
                                <p className='text-danger m-0'>{InputErrors.end_date}</p>
                            </div>
                        </div> 
                        <div className='mb-3'>
                           <div className=' d-md-flex align-items-center radio-status'>
                                <p className='m-0'>Task Status:</p> 
                                <input type='radio' name='status' className='' value='Planned'
                                onChange={changeHandler}/> Planned
                                <input type='radio' name='status' className='' value='In-Progress'
                                onChange={changeHandler}/> In-Progress
                                <input type='radio' name='status' className='' value='Done'
                                onChange={changeHandler}/> Done
                            </div>
                           <p className='text-danger m-0'>{InputErrors.status}</p>
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
                    <Todolist Todos={Todos} deleteHandler={deleteHandler} views={views} editHandler={editHandler}/>
                </div>
            </div>
        </div>

    </div>
  </>)
}

export default App;
