import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import './Edit.css';

const Form = ({setTodos,editID,todos,showmodal,setshowmodal}) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        defaultValues:{
            newname:todos[editID].firstname,
            newlname:todos[editID].lastname,
            newemail:todos[editID].email,
            newcourse:todos[editID].course,
            newskills:todos[editID].skills,
            newgender:todos[editID].gender
        }
    });

    const [name,setname]=useState('')
    const [lname,setlname]=useState('')
    const [email,setemail]=useState('')
    const [course,setcourse]=useState('')
    const [skills,setskills]=useState('')
    const [gender,setgender]=useState('')

    const UpdateData = (e)=>{
        const newData = [...todos];
        newData[editID] = {
            firstname:name.length>0?name:todos[editID].firstname,
            lastname:lname.length>0?lname:todos[editID].lastname,
            email:email.length>0?email:todos[editID].email,
            course:course.length>0?course:todos[editID].course,
            skills:skills.length>0?skills:todos[editID].skills,
            gender:gender.length>0?gender:todos[editID].gender,
        }
        setTodos([...newData])  
        setshowmodal(!showmodal)        
        reset()
        console.log(name,lname,email,course,skills,gender);
    }
  return (
      <div className='container-fluid popup'>
          <div className='row popup-content'>
              <div className='col-5 m-auto bg-white p-5'>
                  <div>
                  <form onSubmit={handleSubmit(UpdateData)}>
                        <div className='mb-3 d-flex' style={{columnGap:'10px'}}>
                            <div className='w-100'>
                                <input type="text" className='form-control' placeholder='Firstname'
                                {...register('newname',{required:'Required field...',pattern:{
                                    value:/^[a-zA-Z\s]*$/,
                                    message:'Only alphabets are allowed'
                                }})}
                                onChange={(e)=>{setname(e.target.value)}}
                                />
                                {errors.newname&& <p className='text-danger'>{errors.newname.message}</p>}
                            </div>
                            <div className='w-100'>
                                <input type="text" className='form-control' placeholder='Lastname' name='lastname'
                                {...register('newlname',{required:'Required field...',pattern:{
                                    value:/^[a-zA-Z\s]*$/,
                                    message:'Only alphabets are allowed'
                                }})}
                                onChange={(e)=>{setlname(e.target.value)}}
                                />
                                {errors.newlname && <p className='text-danger'>{errors.newlname.message}</p>}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Email' name="email"
                            {...register('newemail',{required:'Required field...',pattern:{
                                value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message:'Please validate email...'
                            }})}
                            onChange={(e)=>{setemail(e.target.value)}}
                            />
                            {errors.newemail && <p className='text-danger'>{errors.newemail.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <select className="form-select" name="course"
                            {...register('newcourse',{required:'Please select course...'})}
                            onChange={(e)=>{setcourse(e.target.value)}}>
                                <option value="React JS">React JS</option>
                                <option value="Node JS">Node JS</option>
                                <option value="Express JS">Express JS</option>
                                <option value="Mongo DB">Mongo DB</option>
                            </select>
                            {errors.newcourse &&<p className='text-danger'>{errors.newcourse.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <p>What you know?</p>
                            <div className='d-flex' style={{columnGap:'10px'}}>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='HTML' name='skills'
                                    {...register('newskills')}
                                    onChange={(e)=>{setskills(e.target.value)}}
                                    />  
                                    <label className="form-check-label">HTML</label>
                                </span>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='CSS' name="skills"
                                    {...register('newskills')}
                                    onChange={(e)=>{setskills(e.target.value)}}
                                    /> 
                                    <label className="form-check-label">CSS</label>
                                </span>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='JS' name="skills"
                                    {...register('newskills')}
                                    onChange={(e)=>{setskills(e.target.value)}}
                                    />  
                                    <label className="form-check-label">JS</label>
                                </span>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='BOOTSTRAP' name="skills"
                                    {...register('newskills')}
                                     onChange={(e)=>{setskills(e.target.value)}}
                                    />  
                                    <label className="form-check-label">BOOTSTRAP</label>
                                </span>
                            </div>
                            {errors.newskills &&<p className='text-danger'>{errors.newskills.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex' style={{columnGap:'10px'}}>
                                <div className='w-100 form-check'>
                                    <input type="radio" className="form-check-input" value='Male' name="gender"
                                    {...register('newgender')}
                                    onChange={(e)=>{setgender(e.target.value)}}
                                    />  
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className='w-100 form-check'>
                                    <input type="radio" className="form-check-input" value='Female' name="gender"
                                    {...register('newgender')}
                                    onChange={(e)=>{setgender(e.target.value)}}
                                    />  
                                    <label className="form-check-label">Female</label>
                                </div>
                                <div className='w-100 form-check'>
                                    <input type="radio" className="form-check-input" value='Others' name="gender"
                                    {...register('newgender')}
                                    onChange={(e)=>{setgender(e.target.value)}}
                                    />  
                                    <label className="form-check-label">Others</label>
                                </div>
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