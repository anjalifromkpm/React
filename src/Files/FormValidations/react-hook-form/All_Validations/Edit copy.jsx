import React,{useState} from 'react';
import { useForm } from 'react-hook-form';

const Form = ({setTodos,editID,todos}) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        defaultValues:{
            newname:todos[editID].firstname
        }
    });
    const [name,setname]=useState('')
    const UpdateData = (e)=>{
        const newData = [...todos];
        newData[editID] = {
            firstname:name
        }
        setTodos([...newData])
        reset()
    }
  return (
      <div className='container'>
          <div className='row'>
              <div className='col-5 m-auto'>
                  <div>
                      <form onSubmit={handleSubmit(UpdateData)}>
                        <div className='mb-3 d-flex' style={{columnGap:'10px'}}>
                            <div className='w-100'>
                                <input type="text" className='form-control' placeholder='Firstname'
                                {...register('newname',{required:'Rewuired input field...'})}
                                onChange={(e)=>{setname(e.target.value)}}
                                />
                                {errors.newname&&<p className='text-danger'>{errors.newname.message}</p>}
                            </div>
                        </div>
                        <div className='submit_button'>
                            <input type="submit" value='SUBMIT' className='btn btn-success w-100 rounded-0'/>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Form;