import React,{useState} from 'react'

let Form = ()=>{
    const [users, setusers] = useState({
        F_name:'',
        L_name:'',
        Email:'',
        Password:'',
        Html:'',
        Css:'',
        Javascript:'',
        Bootstrap:'',
        Location:'',
        Gender:''
    })
    const ShowFormFields = (event)=>{
        setusers({...users,[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault();
    }
    return (
        <>
           <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7  shadow-sm">
                        <div>
                            <h2 className='text-center mb-4'>Registration Form</h2>
                            
                            <form>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='d-flex'>
                                            <div className="input-group p-2">
                                                <div className="input-group-text"><i className="bi bi-person-lines-fill"></i></div>
                                                <input type="text" name='F_name' onChange={ShowFormFields} className="form-control p-2" placeholder="First Name" />
                                            </div>
                                            <div className="input-group p-2">
                                                <div className="input-group-text"><i className="bi bi-person-lines-fill"></i></div>
                                                <input type="text" name='L_name' onChange={ShowFormFields} className="form-control p-2" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className="input-group p-2">
                                                <div className="input-group-text"><i className="bi bi-envelope-open-fill"></i></div>
                                                <input type="email" name='Email' onChange={ShowFormFields} className="form-control p-2" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className="input-group p-2">
                                                <div className="input-group-text"><i className="bi bi-file-earmark-lock-fill"></i></div>
                                                <input type="password" name='Password' onChange={ShowFormFields} className="form-control p-2" placeholder="Password" />
                                                <div className="input-group-text"><i className="bi bi-eye-fill"></i></div>
                                            </div>
                                        </div>
                                        
                                        <div className='d-flex' style={{marginLeft: '25px'}}>
                                            <div className="form-check p-2">
                                                <input type="checkbox" name='Html' onChange={ShowFormFields} value='HTML' className="form-check-input" />
                                                <label className="form-check-label">HTML</label>
                                            </div>
                                            <div className="form-check p-2" style={{marginLeft: '25px'}}>
                                                <input type="checkbox" name='Css' onChange={ShowFormFields} value='CSS' className="form-check-input" />
                                                <label className="form-check-label">CSS</label>
                                            </div>
                                            <div className="form-check p-2" style={{marginLeft: '25px'}}>
                                                <input type="checkbox" name='Javascript' onChange={ShowFormFields} value='JAVASCRIPT' className="form-check-input" />
                                                <label className="form-check-label">JAVASCRIPT</label>
                                            </div>
                                            <div className="form-check p-2" style={{marginLeft: '25px'}}>
                                                <input type="checkbox" name='Bootstrap' onChange={ShowFormFields} value='BOOTSTRAP' className="form-check-input" />
                                                <label className="form-check-label">BOOTSTRAP</label>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className="input-group p-2">
                                                <label className="visually-hidden">Location</label>
                                                <select className="form-select" name='Location'  onChange={ShowFormFields}>
                                                <option selected disabled>Location...</option>
                                                <option value="Bengalore">Bengalore</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="Goa">Goa</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='d-flex' style={{marginLeft: '25px'}}>
                                            <div className="form-check p-2">
                                                <input className="form-check-input" type="radio" name="Gender" onChange={ShowFormFields} value="Male" />
                                                <label className="form-check-label">Male</label>
                                            </div>
                                            <div className="form-check p-2" style={{marginLeft: '25px'}}>
                                                <input type="radio" name="Gender" className="form-check-input" onChange={ShowFormFields} value="Female"/>
                                                <label className="form-check-label">Female</label>
                                            </div>
                                            <div className="form-check p-2" style={{marginLeft: '25px'}}>
                                                <input type="radio" name="Gender" className="form-check-input" onChange={ShowFormFields} value="Others"/>
                                                <label className="form-check-label">Others</label>
                                            </div>
                                        </div>

                                        <div className='mt-3 text-center'>
                                            <div className="form-check p-2">
                                                <input type="submit" className='btn btn-success px-4 rounded-0' onClick={submitHandler}/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='col-md-4 ms-3'>
                        <div>
                            <h2 className='mb-4'>Result</h2>
                            <div>
                                <p>First Name: <b>{users.F_name}</b></p>
                                <p>Last Name: <b>{users.L_name}</b></p>
                                <p>Email: <b>{users.Email}</b></p>
                                <p>Password: <b>{users.Password}</b></p>
                                <p>Skills: <b>{users.Html}</b> /<b>{users.Css}</b> /<b>{users.Javascript}</b> /<b>{users.Bootstrap}</b></p>
                                <p>Location: <b>{users.Location}</b></p>
                                <p>Gender: <b>{users.Gender}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default Form;
