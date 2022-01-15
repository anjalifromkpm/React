import React,{useRef} from 'react';

const UI = ()=>{
    let login = useRef(null)
    let updateHandler = (e)=>{
        //console.log(login.current)
        login.current.disabled = !e.target.checked
    }
    return (
        <>
           <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className='form-group mb-2'>
                                <input type='text' className="form-control" placeholder="Email" />
                            </div>
                            <div className='form-group mb-2'>
                                <input type='text' className="form-control" placeholder="Password" />
                            </div>
                            <div className='form-check mb-2'>
                                <input type='checkbox' className="form-check-input" onChange={updateHandler}/>
                                Terms&Conditions
                            </div>
                            <div className='form-group'>
                                <input type='submit' ref={login} className="btn btn-success rounded-0" value="LogIn" disabled/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UI;