import React,{useState,useEffect} from 'react';

const Form = ()=>{
    const initialValues = {username:'',email:'',passwords:''};
    const [formValues,setformValues] = useState(initialValues);
    const [formErrors,setformErrors] = useState({});
    const [isSubmit,setisSubmit] = useState(false);


    const handleChange = (e)=>{
        setformValues({...formValues,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setformErrors(Validate(formValues));
        setisSubmit(true);
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
    const onlyNumbers = /^[a-zA-Z ]*$/;
    const Validate = (values)=>{
        const errors = {};
        if(!values.username){
            errors.username='Username can\'t be empty! ';
        }else if(!values.username.match(onlyNumbers)){
            errors.username='Username must contain alphabest!';
        }
        if(!values.email){
            errors.email='Email can\'t be empty! ';
        }
        if(!values.passwords){
            errors.passwords='Passwords can\'t be empty! ';
        }
        return errors;
    }
  return(
      <div className='container my-5'>
          <div className='row m-md-auto'>
              <div className='col col-md-4 m-md-auto'>
                  <div className='gutter-gap'>
                      <form onSubmit={handleSubmit}>
                          <pre>{JSON.stringify(formValues,undefined,2)}</pre>
                          <h1 className='text-center mb-4'>Login Form</h1>
                          <div className='mb-3'>
                              <input type='text' name='username' className='form-control' placeholder='Username'
                              value={formValues.username}
                              onChange={handleChange}/>
                              <p className='text-danger'>{formErrors.username}</p>
                          </div>
                          <div className='mb-3'>
                              <input type='text' name='email' className='form-control' placeholder='Email'
                              value={formValues.email}
                              onChange={handleChange}/>
                              <p>{formErrors.email}</p>
                          </div>
                          <div className='mb-3'>
                              <input type='password' name='passwords' className='form-control' placeholder='Passwords'
                              value={formValues.passwords}
                              onChange={handleChange}/>
                              <p>{formErrors.passwords}</p>
                          </div>
                          <input type='submit' className='btn btn-info form-control' value='SUBMIT'/>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Form;
