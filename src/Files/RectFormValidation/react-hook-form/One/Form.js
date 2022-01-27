import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

const Form = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [Inputvalues,setInputvalues] = useState({})
    const SubmitHandle = (data)=>{
        setInputvalues({data})
    }
    console.log(errors);
  return <div className='container'>
      <div className='row m-auto'>
          <div className='col-md-4 m-auto'>
              <div className='gutter-gap'>
                  <pre>{JSON.stringify(Inputvalues)}</pre>
                  <h2 className='mb-3'>Registration Form</h2>
                  <form onSubmit={handleSubmit(SubmitHandle)}>
                      <div className='mb-3'>
                          <label className='form-label'>Username</label>
                          <input type='text' placeholder='Username' className='form-control' 
                          {...register('name',{required:true,pattern: /^[A-Za-z]+$/i})}/>
                          {errors.name?.type==='required' && <span className='text-danger'>Name input field shouldn't be empty!</span>}
                          {errors.name?.type==='pattern' && <span className='text-danger'>Please enter only alphabets!</span>}
                      </div>
                      <div className='mb-3'>
                          <label className='form-label'>Email</label>
                          <input type='text' name='email' placeholder='Email' className='form-control' 
                          {...register('email',{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} />
                          {errors.email?.type === 'required' && <span className='text-danger'>Email input field shouldn't be empty!</span>}
                          {errors.email?.type === 'pattern' && <span className='text-danger'>Please enter valid email</span>}
                      </div>
                      <div className='mb-3'>
                          <label className='form-label'>Password</label>
                          <input type='text' name='password' placeholder='Password' className='form-control' 
                          {...register('password',{required:true,minLength:4,maxLength:10,pattern:/^[0-9 ]+$/i})} />
                          {errors.password?.type === 'required' && <span className='text-danger'>Password input field shouldn't be empty!</span>}
                          {errors.password?.type === 'minLength' && <span className='text-danger'>Minimum password should contain 4 digits</span>}
                          {errors.password?.type === 'maxLength' && <span className='text-danger'>Maximum password should contain 10 digits</span>}
                          {errors.password?.type === 'pattern' && <span className='text-danger'>Should contain only Numbers</span>}
                      </div>
                      <input type='submit' className='btn btn-success' value='Submit'/>
                  </form>
              </div>
          </div>
      </div>
  </div>;
}

export default Form;
