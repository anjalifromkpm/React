import React,{useState} from 'react';

function Edit({submitData,id,setSubmitData}) {
    const [name,setName] = useState(submitData[id].id);
    const submitHandler = (e)=>{
        let newSubmitData = [...submitData];
        newSubmitData[id] = {
            name: name
          };
        setSubmitData([...newSubmitData])
    }
  return <>
    <div>
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <input type='text' className='form-control' value={name}
                onChange={(e)=>setName(e.target.value)} placeholder='Username'/>
            </div>
            <input type='submit' className='btn btn-primary rounded-0'/>
        </form>
    </div>
  </>;
}
export default Edit;
