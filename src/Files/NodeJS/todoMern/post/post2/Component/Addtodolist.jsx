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
                name:name
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
                        <div className="mb-3">
                            <label className="form-label">User name</label>
                            <input type="text" className="form-control" name='name' value={name}
                            onChange={(e)=>{setname(e.target.value)}}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Addtodolist;