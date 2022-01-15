import React,{useState,useEffect} from 'react';

const Function = ()=>{
    const [Current,setCurrent] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setInterval(()=>{
            setCurrent(new Date().toLocaleTimeString());
        },1000)
        // return(()=>{
        //     console.log('Component WillUnMount')
        // })
    },[])
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                    <div className="card">
                        <div className="card header text-center p-2 bg-primary">
                        <h4>{Current}</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Function;
