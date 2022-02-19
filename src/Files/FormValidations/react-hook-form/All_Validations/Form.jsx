import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import Edit from './Edit';

const Form = () => {
    const { register,handleSubmit,reset,formState:{errors} } = useForm({
        defaultValues:{
            firstname:'',
            lastname:'',
            email:'',
            course:'',
            skills:'',
            gender:''
        }
    });
    const [initialValue,setinitialValue] = useState({
        firstname:'',
        lastname:'',
        email:'',
        course:'',
        skills:'',
        gender:''
    });
    const [todos,setTodos] = useState([]);
    const [editID,seteditID] = useState(null);
    const [showmodal,setshowmodal] = useState(false);
    const submitHandler = (e)=>{
        const Todos = [...todos,e];
        setTodos(Todos)
        reset()
    };
    const deletHandler = (indexValue)=>{
        const newTodos = todos.filter((elem,index)=>{return index !== indexValue})
        setTodos(newTodos);
    }
  return (<>
      <div className='container'>
          <div className='row'>
              <div className='col-5 m-auto'>
                  <div>
                      <h2 className='text-center mb-4'>React-Hook-Form-Validation</h2>
                      <form onSubmit={handleSubmit(submitHandler)}>
                        <div className='mb-3 d-flex' style={{columnGap:'10px'}}>
                            <div className='w-100'>
                                <input type="text" className='form-control' placeholder='Firstname' name="firstname"
                                onChange={(e)=>{setinitialValue({[e.target.name]:e.target.value})}}
                                {...register('firstname',{required:'Required field...',pattern:{
                                    value:/^[a-zA-Z\s]*$/,
                                    message:'Only alphabets are allowed'
                                }})}
                                />
                                {errors.firstname&& <p className='text-danger'>{errors.firstname.message}</p>}
                            </div>
                            <div className='w-100'>
                                <input type="text" className='form-control' placeholder='Lastname' name='lastname'
                                {...register('lastname',{required:'Required field...',pattern:{
                                    value:/^[a-zA-Z\s]*$/,
                                    message:'Only alphabets are allowed'
                                }})}
                                />
                                {errors.lastname && <p className='text-danger'>{errors.lastname.message}</p>}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Email' name="email"
                            {...register('email',{required:'Required field...',pattern:{
                                value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message:'Please validate email...'
                            }})}
                            />
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <select className="form-select" name="course"
                            {...register('course',{required:'Please select course...'})}>
                                <option value="React JS">React JS</option>
                                <option value="Node JS">Node JS</option>
                                <option value="Express JS">Express JS</option>
                                <option value="Mongo DB">Mongo DB</option>
                            </select>
                            {errors.course&&<p className='text-danger'>{errors.course.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <p>What you know?</p>
                            <div className='d-flex' style={{columnGap:'10px'}}>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='HTML' name='skills'
                                    {...register('skills')}
                                    />  
                                    <label className="form-check-label">HTML</label>
                                </span>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='CSS' name="skills"
                                    {...register('skills')}
                                    /> 
                                    <label className="form-check-label">CSS</label>
                                </span>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='JS' name="skills"
                                    {...register('skills')}
                                    />  
                                    <label className="form-check-label">JS</label>
                                </span>
                                <span className='w-100 form-check'>
                                    <input type="checkbox" className="form-check-input" value='BOOTSTRAP' name="skills"
                                    {...register('skills')}
                                    />  
                                    <label className="form-check-label">BOOTSTRAP</label>
                                </span>
                            </div>
                            {errors.skills&&<p className='text-danger'>{errors.skills.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex' style={{columnGap:'10px'}}>
                                <div className='w-100 form-check'>
                                    <input type="radio" className="form-check-input" value='Male' name="gender"
                                    {...register('gender')}
                                    />  
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className='w-100 form-check'>
                                    <input type="radio" className="form-check-input" value='Female' name="gender"
                                    {...register('gender')}
                                    />  
                                    <label className="form-check-label">Female</label>
                                </div>
                                <div className='w-100 form-check'>
                                    <input type="radio" className="form-check-input" value='Others' name="gender"
                                    {...register('gender')}
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

          <div className='row mt-5'>
              <div className='col-6 m-auto'>
                  <div>
                      <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>COURSE</th>
                                    <th>SKILLS</th>
                                    <th>GENDER</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map((elem,index)=>{
                                        const { firstname,lastname,email,course,skills,gender } = elem;
                                        return(<tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{firstname} {lastname}</td>
                                            <td>{email}</td>
                                            <td>{course}</td>
                                            <td>{skills}</td>
                                            <td>{gender}</td>
                                            <td>
                                                <i className="bi bi-pencil-square text-success me-2" style={{cursor:'pointer'}} 
                                                onClick={()=>{
                                                    seteditID(index)
                                                    setshowmodal(!showmodal)
                                                }}
                                                ></i>
                                                <i className="bi bi-trash text-danger" style={{cursor:'pointer'}}
                                                onClick={()=>{return deletHandler(index)}}
                                                ></i>
                                            </td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    {showmodal && <Edit setTodos={setTodos} editID={editID} todos={todos} showmodal={showmodal} setshowmodal={setshowmodal}/>}
  </>)
}

export default Form;