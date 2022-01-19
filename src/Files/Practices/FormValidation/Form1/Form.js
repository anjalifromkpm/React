import React,{useState} from 'react';

function Form() {
    const [myForm,setmyForm] = useState({
        name:'',
        email:'',
        number:''
    });
    const UpdateHandler = (e)=>{
        setmyForm({...myForm,[e.target.name]:e.target.value})
    }
    const {name,email,number}=myForm;
    const onylNumber = /^[0-9 ]*$/;
    const onylString = /^[a-zA-Z ]*$/;
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const Validation = ()=>{
        if(name.trim()===''){
            alert('Name field should not be emprty!')
        }else if(!name.match(onylString)){
            alert('Please enter only Alphabets')
        }else if(email.trim()===''){
            alert('Email field should not be emprty!')
        }else if(!isEmail.test(email)){
            alert('Please provide valid email')
        }else if(number.trim()===''){
            alert('Number field should not be emprty!')
        }else if(!number.match(onylNumber)){
            alert('Please enter only Numbers')
        }else{
            console.log(myForm);
        }
        
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        Validation(); 
    }
    return (
        <div className='mt-5 container'>
            <div className='row m-md-auto'>
                <div className='col col-md-4 m-md-auto'>
                    <form onSubmit={submitHandler}> 
                        <div className='mb-3'>
                            <input type='text' placeholder="Username"  className='form-control'
                            onChange={UpdateHandler} name='name' value={name}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder="Email"  className='form-control'
                            onChange={UpdateHandler} name='email' value={email}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder="Number"  className='form-control'
                            onChange={UpdateHandler} name='number' value={number}/>
                        </div>
                        <button type='submiy' className='form-control bg-success text-white'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;
