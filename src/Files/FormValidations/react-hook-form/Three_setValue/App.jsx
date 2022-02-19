import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
    const [name,setName] = useState('');
    const [newName,setnewName] = useState('React JS')
    const {register,handleSubmit,reset,formState:{errors},setValue} = useForm();
    const submitHandler = (e)=>{
        reset()
    }
  return (
    <div className="container mt-5">
        <div className='row'>
            <div className='col-4 m-auto'>
                <div>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className='mb-3'>
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control"
                            {...register('username',{required:'Username required...',
                            minLength:{
                                value:4,
                                message:'Enter min 4 Characters...'
                            },
                            pattern:{
                                value:/^[a-zA-Z\s]*$/,
                                message:'Please enter only characters...'
                            }})}
                            onChange={(e)=>{setName(e.target.value)}}/>
                            {errors.username && <p className='text-danger'>{errors.username.message}</p>}
                        </div>
                        <button type='button'
                        onClick={()=>{setValue('username',newName)}}>Add Name</button>
                        <div className='submit_button'>
                            <input type="submit" value='SUBMIT' className="btn btn-success w-100"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App