import React,{useState} from 'react';
import axios from 'axios';

const Addtodolist = ({addTask}) => {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
        if(name.trim()===''&&email.trim()===''){
            return
        }else{
            axios.post('http://localhost:8000/api/tasks',{
                name:name,
                email:email
            })
            .then((res)=>{
                setemail('')
                setname('')
                addTask(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
  return (<>
    <div className='container mb-5'>
        <div className='row'>
            <div className='col-6 m-auto'>
                <div>
                    <form onSubmit={submitHandler}>
                        <h1 className='text-center mb-4'>Login Form</h1>
                        <div class="mb-3">
                            <label class="form-label">User name</label>
                            <input type="text" class="form-control" name='name' value={name}
                            onChange={(e)=>{setname(e.target.value)}}/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="text" class="form-control" name='email' value={email}
                            onChange={(e)=>{setemail(e.target.value)}}/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Addtodolist