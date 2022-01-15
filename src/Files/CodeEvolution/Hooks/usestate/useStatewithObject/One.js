import React,{useState} from 'react';

function One() {
    const [name,setname]=useState({fname:'',lname:''})
    return (
        <div>
          <form>
            <input type='text' value={name.fname} placeholder='First Name' 
                onChange={(e)=>{setname({...name,fname:e.target.value})}}
            />
            <input type='text' value={name.flname} placeholder='Last Name' 
                onChange={(e)=>{setname({...name,name,lname:e.target.value})}}
            />  
            <p className='mt-2'>First Name: {name.fname}</p> 
            <p>First Name: {name.lname}</p>   
          </form>  
        </div>
    )
}

export default One;
