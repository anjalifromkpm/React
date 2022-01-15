import React,{useState} from 'react';

function One() {
  const [name,setname] = useState(['karthik','suresh'])
  return (
    <div>
      <form>
        <input type='text' value={name[0]} placeholder='firstname'
        onChange={(e)=>{setname([name[0]=e.target.value])}}/>
        <input type='text' value={name[1]} placeholder='lasttname'
        onChange={(e)=>{setname([name[1]=e.target.value])}}/>
      </form>
      <p className='mt-4'>First Name: {name[0]}</p>
      <p className='mt-0'>Last Name: {name[1]}</p>
    </div>
  )
}

export default One;
