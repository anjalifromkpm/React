import React,{useEffect} from 'react';

function One() {
    let Inp = React.createRef();
    useEffect(()=>{
        console.log(Inp.current.focus());
    },[])
    return (
        <div className='text-center'>
            <input type='text' ref={Inp}/>
        </div>
    )
}

export default One;
