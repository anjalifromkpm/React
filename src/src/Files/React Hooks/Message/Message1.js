import React,{useState} from 'react';

let Message1 = function Message1() {
   const [msg, setmessage] = useState('Hello');
   let Gm = ()=>{
        setmessage('Good Morning')
   }
   let Ga = ()=>{
    setmessage('Good Afternoon')
    }
    let Gn = ()=>{
        setmessage('Good Night')
   }
    return (
        <>
           <div className='container mt-5'>
           {msg} 
           <br />
           {/* <button className='btn btn-success mt-3' onClick={()=>{setmessage('Good Morning')}}>GM</button>
           <button className='btn btn-success mt-3' onClick={()=>{setmessage('Good Afternoon')}}>GA</button>
           <button className='btn btn-success mt-3' onClick={()=>{setmessage('Good Night')}}>GN</button> */}
           <button className='btn btn-success mt-3' onClick={Gm}>Click</button>
           <button className='btn btn-success mt-3' onClick={Ga}>Click</button>
           <button className='btn btn-success mt-3' onClick={Gn}>Click</button>
           </div>
        </>
    )
}

export default Message1;
