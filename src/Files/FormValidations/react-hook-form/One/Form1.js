import React,{useState} from 'react';
import { useForm } from 'react-hook-form';

const Form1 = ()=>{
    const [Inputvalues,setInputvalues] = useState([]);
    const [Todos,setTodos] = useState([]);
    const {register,handleSubmit,formState:{errors}} = useForm();
    const mystyle = {
        columnGap:'15px'
    }
    const HandleSubmit = (data)=>{
        setInputvalues({data})
        const newTodos = [{Inputvalues,...Todos}]
        setTodos(newTodos)
    }
    console.log(Todos);

  return(<>
    <div className='container'>
        <div className='row m-auto'>
            <div className='col-md-8 m-auto'>
                <div className='gutter-gap'>
                    <pre>{JSON.stringify(Todos)}</pre>
                    <h2 className='text-center'>Todo Lists</h2>
                    <form method='post' onSubmit={handleSubmit(HandleSubmit)}>
                        <div className='mb-3 d-flex' style={mystyle}>
                            <div className='w-50'>
                                <label>First Name<sup className='text-danger'>*</sup></label>
                                <input type='text' name="f_name" placeholder='First name' className='form-control'
                                {...register('f_name',{required:true,pattern:/^[a-zA-Z ]*$/})}/>
                                {errors.f_name?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                                {errors.f_name?.type === 'pattern' && <span className='text-danger'>Please enter onyl alphabets</span>}
                            </div>
                            <div className='w-50'>
                                <label>Last Name<sup className='text-danger'>*</sup></label>
                                <input type='text'  name="l_name" placeholder='Last name' className='form-control'
                                {...register('l_name',{required:true,pattern:/^[a-zA-Z ]*$/})}/>
                                {errors.l_name?.type === 'required' && <span className='text-danger'>Input field should not be empty</span>}
                                {errors.l_name?.type === 'pattern' && <span className='text-danger'>Please enter onyl alphabets</span>}
                            </div>
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
            <div className='col-md-8 m-auto'>
                <div className='gutter-gap'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                              (Object.keys(Inputvalues).length>0).map((elem,index)=><tr>
                                                                <td>{index+1}</td>
                                                                <td>{elem.f_name}</td>
                                                            </tr>)  
                            } */}
                            {
                              Todos.map((elem,index)=><tr key={index+1}>
                                                            <td>{index+1}</td>
                                                            <td>{elem.f_name}</td>
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
