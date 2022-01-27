import React,{useState} from 'react';
import { useForm } from 'react-hook-form';

const Form1 = ()=>{
    const [Todos,setTodos] = useState([]);
    const [InitialValues,setInitialValues] = useState({
        f_name:'',
        l_name:'',
        mobile:'',
        email:'',
        date:'',
        course:'',
        gender:'',
        street:'',
        city:'',
        state:''
    })
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:InitialValues
    });
    const mystyle = {
        columnGap:'15px'
    }
    const HandleSubmit = (data)=>{
        const newTodos = [...Todos,data]
        setTodos(newTodos)
    }
    const HandleDelete = (IndexDelete)=>{
        const FilteredTodos = Todos.filter((elem,index)=> index !==IndexDelete)
        setTodos(FilteredTodos)
    }
    const HandleEdit = (IndexEdit)=>{
        const FilteredTodos = Todos.filter((elem,index)=> index !==IndexEdit)
        setTodos(FilteredTodos)
        const FilteredTodosUpdate = Todos.find((elem,index)=>index===IndexEdit)
        setInitialValues({f_name:FilteredTodosUpdate.f_name})
        //setInitialValues({f_name:'Hello'})
        console.log(InitialValues);  
    }
  return(<>
    <div className='container-fluid'>
        <div className='row m-auto'>
            <div className='col-md-6 m-auto'>
                <div className='gutter-gap'>
                    <h2 className='text-center'>Student Registration</h2>
                    <form method='post' onSubmit={handleSubmit(HandleSubmit)}>
                        <div className='mb-3 d-flex' style={mystyle}>
                            <div className='w-50'>
                                <label>First Name<sup className='text-danger'>*</sup></label>
                                <input type='text' name="f_name" placeholder='First name' className='form-control'
                                // value={EditTodos.l_name}
                                // onChange={changeHandler}
                                {...register('f_name',{required:true,pattern:/^[a-zA-Z ]*$/})}/>
                                {errors.f_name?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                                {errors.f_name?.type === 'pattern' && <span className='text-danger'>Please enter onyl alphabets</span>}
                            </div>
                            {/* <div className='w-50'>
                                <label>Last Name<sup className='text-danger'>*</sup></label>
                                <input type='text'  name="l_name" placeholder='Last name' className='form-control'
                                value={EditTodos.l_name}
                                {...register('l_name',{required:true,pattern:/^[a-zA-Z ]*$/})}/>
                                {errors.l_name?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                                {errors.l_name?.type === 'pattern' && <span className='text-danger'>Please enter onyl alphabets</span>}
                            </div> */}
                        </div>
                        {/* <div className='mb-3'>
                            <label>Mobile<sup className='text-danger'>*</sup></label>
                            <input type='text'  name="mobile" placeholder='Mobile' className='form-control'
                            {...register('mobile',{required:true,pattern:/^[0-9 ]*$/,minLength:4,maxLength:10})}/>
                            {errors.mobile?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                            {errors.mobile?.type === 'pattern' && <span className='text-danger'>Please enter onyl numbers</span>}
                            {errors.mobile?.type === 'minLength' && <span className='text-danger'>Please enter minimum 4 digits</span>}
                            {errors.mobile?.type === 'maxLength' && <span className='text-danger'>Please enter minimum 10 digits</span>}
                        </div>
                        <div className='mb-3 d-flex' style={mystyle}>
                            <div className='w-50'>
                                <label>Email<sup className='text-danger'>*</sup></label>
                                <input type='text'  name="email" placeholder='Email' className='form-control'
                                {...register('email',{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}/>
                                {errors.email?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                                {errors.email?.type === 'pattern' && <span className='text-danger'>Please provide valid email</span>}
                            </div>
                            <div className='w-50'>
                                <label>Date of Birth<sup className='text-danger'>*</sup></label>
                                <input type='date'  name="dob" className='form-control'
                                {...register('date',{required:true})}/>
                                {errors.date?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                            </div>
                        </div>
                        <div className='mb-3 d-flex' style={mystyle}>
                            <div className='w-50'>
                                <label>Course<sup className='text-danger'>*</sup></label>
                                <select className='form-select'  name="course">
                                    <option disabled>Course</option>
                                    <option value='HTML'  {...register('course')}>HTML</option>
                                    <option value='CSS'  {...register('course')}>CSS</option>
                                    <option value='JAVASCRIPT'  {...register('course')}>JAVASCRIPT</option>
                                </select>
                            </div>
                            <div className='w-50'>
                                <label>Gender<sup className='text-danger'>*</sup></label>
                                <select className='form-select'  name="gender">
                                    <option disabled>Gender</option>
                                    <option value='Male'  {...register('gender')}>Male</option>
                                    <option value='Fe-Male'  {...register('gender')}>Fe-Male</option>
                                    <option value='Other'  {...register('gender')}>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label>Street<sup className='text-danger'>*</sup></label>
                            <input type='text'  name="street" placeholder='Street' className='form-control'
                             {...register('street',{required:true})}/>
                                {errors.street?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                        </div>
                        <div className='mb-3'>
                            <label>City<sup className='text-danger'>*</sup></label>
                            <input type='text'  name="city" placeholder='City' className='form-control'
                             {...register('city',{required:true})}/>
                                {errors.city?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                        </div>
                        <div className='mb-3'>
                            <label>State<sup className='text-danger'>*</sup></label>
                            <input type='text'  name="state" placeholder='State' className='form-control'
                             {...register('state',{required:true})}/>
                                {errors.state?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                        </div> */}
                        <input type='submit' value='Submit' className='form-control btn btn-success'/>
                    </form>
                </div>
            </div>
        </div>

        <div className='row m-auto'>
            <div className='col mt-5'>
                <div className='gutter-gap'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>DOB</th>
                                <th>Course</th>
                                <th>Gender</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              Todos.map((elem,index)=><tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{`${elem.f_name} ${elem.l_name}`}</td>
                                                            <td>{elem.mobile}</td>
                                                            <td>{elem.email}</td>
                                                            <td>{elem.date}</td>
                                                            <td>{elem.course}</td>
                                                            <td>{elem.gender}</td>
                                                            <td>{elem.street}</td>
                                                            <td>{elem.city}</td>
                                                            <td>{elem.state}</td>
                                                            <td className='text-center'>
                                                                <i className="bi bi-pencil-square me-2 text-success"
                                                                onClick={()=>HandleEdit(index)} style={{cursor:'pointer'}}></i>
                                                                <i className="bi bi-trash text-danger" style={{cursor:'pointer'}}
                                                                onClick={()=>HandleDelete(index)}></i>
                                                            </td>
                                                       </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Form1;
