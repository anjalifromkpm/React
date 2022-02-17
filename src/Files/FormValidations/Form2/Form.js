import React,{useState,useEffect} from 'react';

const Form = ()=>{
    const initialValues = {name:'',email:'',password:'',c_password:''};
    const [Formvalues,setFormvalues]  = useState(initialValues);
    const [FormLists,setFormLists] = useState([]);
    const [FormErrors,setFormErrors]  = useState({});
    const [isSubmit,setisSubmit]  = useState(false);

    const changeHandler = (e)=>{
        setFormvalues({...Formvalues,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(Validate(Formvalues));
        setisSubmit(true);
        // const newFormLists = [...FormLists,Formvalues]
        // setFormLists(newFormLists)
        
    }
    useEffect(()=>{
        // if(Object.keys(FormErrors).length===0 && isSubmit){
        //     console.log(Formvalues);
        // }
        if(Object.keys(FormErrors).length===0 && isSubmit){
            const newFormLists = [...FormLists,Formvalues]
            setFormLists(newFormLists) 
        }
    },[FormErrors])

    const OnlyNum = /^[a-zA-Z ]*$/;
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const Validate = (values)=>{
       const Errors = {};
       if(!values.name){
            Errors.name='Username should not be Empty!'
       }else if(!values.name.match(OnlyNum)){
            Errors.name='Username should contain only Alphabets!';
       }

       if(!values.email){
        Errors.email='Email should not be Empty!'
       }else if(!values.email.match(isEmail)){
           Errors.email='Please provide valid email!'
       }

       if(!values.password){
        Errors.password='Password should not be Empty!'
       }else if(values.password.length<5){
        Errors.password='Password atleast contains 5 letters'
       }else if(values.password!==values.c_password){
        Errors.password='Password & Confirm Password should be same!'
       }
       if(!values.c_password){
        Errors.c_password='Confirm Password should not be Empty!'
       }
        return Errors;
    }
  return <div>
      <form className='col col-md-4 m-auto my-5' onSubmit={handleSubmit} method='post'>
         {
             (Object.keys(FormErrors).length===0 && isSubmit)?
             <div className='text-success text-center'>SignedIn Successfully</div>:<pre>{JSON.stringify(Formvalues,undefined,2)}</pre>
         }
        <h1 className='text-center mb-4'>LogIn Form</h1>
        <div className='mb-3'>
            <input type='text' name='name' placeholder='Username' className='form-control'
            value={Formvalues.name}
            onChange={changeHandler}/>
            <p className='text-danger'>{FormErrors.name}</p>
        </div>
        <div className='mb-3'>
            <input type='text' name='email' placeholder='Email' className='form-control'
            value={Formvalues.email}
            onChange={changeHandler}/>
            <p className='text-danger'>{FormErrors.email}</p>
        </div>
        <div className='mb-3'>
            <input type='password' name='password' placeholder='Password' className='form-control'
            value={Formvalues.password}
            onChange={changeHandler}/>
            <p className='text-danger'>{FormErrors.password}</p>
        </div>
        <div className='mb-3'>
            <input type='password' name='c_password' placeholder='Confirm Password' className='form-control'
            value={Formvalues.c_password}
            onChange={changeHandler}
            autoComplete='on'/>
            <p className='text-danger'>{FormErrors.c_password}</p>
        </div>
        <input type='submit' value='SUBMIT' className='form-control btn btn-info'/>
      </form>

      {
          Object.keys(FormErrors).length===0 && isSubmit?<div className='col col-md-6 m-md-auto'>
          <table className='table table-hover'>
              <thead>
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>C-PASSWORD</th>
                </tr>
              </thead>
              <tbody>
                  {
                      FormLists.map((elem,index)=>{
                          return <tr key={index}>
                                    <td>{index}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.password}</td>
                                    <td>{elem.c_password}</td>
                                 </tr>
                      })
                  }
              </tbody>
          </table>
      </div>:null
      }
  </div>;
}

export default Form;
