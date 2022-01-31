import React,{useState} from 'react';
import Edit from './Edit';
import {useForm} from 'react-hook-form';

function Form() {
    const mystyle = {
        columnGap:'15px'
    }
    const {register,handleSubmit,formState:{errors},reset,trigger} = useForm()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [project, setProject] = useState("");
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [id, setId] = useState(1);
    const [submitData, setSubmitData] = useState([{name:'hi'}]);
    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const submitHandler = (e)=>{
        setId(id+1)
        const data = {
            id:id,
            name:name,
            email:email,
            mobile:mobile,
            project:project,
            task:task,
            status:status,
            start:start,
            end:end
        }
        setSubmitData([...submitData, data]);
        // console.log(submitData);
        
    }
    //console.log(submitData[0].name);
  return(
    <div className="container">
    <div className='row m-md-auto'>
        {/* {showModal && <div className='col col-md-8  m-md-auto p-3 shadow'>
            <div className='gutter-gap'>
                <Edit submitData={submitData} editId={editId} setSubmitData={setSubmitData} showModal={showModal}/>
            </div>
        </div>}  */}
        <div className='col col-md-8  m-md-auto p-3 shadow'>
            <div className='gutter-gap'>
                <h1 className='text-center mb-3'>To Do List</h1>
                <form method='post' onSubmit={handleSubmit(submitHandler)}>
                   <div className='mb-3'>
                        <input type='text' placeholder='Enter Person Name' className='form-control rounded-0'
                        {...register('name',{
                            required:'Input value is required',
                            minLength:{
                                value:4,
                                message:'Minimum 3 character required'
                            },
                            pattern:{
                                value:/^[a-zA-Z\s]*$/,
                                message:'Only alphabets are allowed'
                            }
                        })}
                        onChange={(e)=>setName(e.target.value)}/>
                        {errors.name && <span className='text-danger'>{errors.name.message}</span>}
                    </div> 
                    {/* <div className='mb-3 d-md-flex' style={mystyle}>
                        <div className='w-100'>
                            <input type='text' placeholder='Enter A Valid Email' name='email' className='form-control rounded-0'/>
                        </div>
                        <div className='w-100'>
                            <input type='text' placeholder='Enter A Valid Mobile Number' name='number' className='form-control rounded-0'/>
                        </div>
                    </div> 
                    <div className='mb-3'>
                        <input type='text' placeholder='Enter Project Name' name='project_name' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' placeholder='Enter Task Description' name='task_description' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3 d-md-flex' style={mystyle}>
                        <div className='w-100'>
                                <p>Start Date</p>
                                <input type='date' name='start_date' className='form-control rounded-0'/>
                        </div>
                        <div className='w-100'>
                            <p>End Date</p>
                            <input type='date' name='end_date' className='form-control rounded-0'/>
                        </div>
                    </div> 
                        
                    <div className='mb-3'>
                       <div className=' d-sm-flex align-items-center radio-status'  style={mystyle}>
                            <p className='m-0'>Task Status:</p> 
                            <input type='radio' name='status' className='' value='Planned'/> Planned
                            <input type='radio' name='status' className='' value='In-Progress'/> In-Progress
                            <input type='radio' name='status' className='' value='Done'/> Done
                        </div>
                    </div> */}
                    <div className='mb-3 d-flex align-items-center justify-content-between mt-3'>
                       <input type='submit' value='SUBMIT' className='btn btn-primary  rounded-0'/>
                       <button type='reset' className='btn btn-success rounded-0'>CLEAR</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>

    <div className='row m-auto'>
        <div className='col-md-6 m-auto'>
            <div className='gutter-gap'>
            <table className="table mt-3">
                <thead className="thead-light">
                <tr>
                    <th>Sl.No.</th>
                    <th>Name</th>
                    <th>Edit / Delete</th>
                </tr>
                </thead>
                <tbody>
                {submitData.map((ele, index) => {
                    const { id, name} = ele;
                    return (
                    <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>
                        <i
                            className="me-2 bi bi-pencil-square text-success"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setEditId(index)
                                setShowModal(true)
                            }}
                        ></i>
                        <i
                            className="bi bi-trash text-danger"
                            style={{ cursor: "pointer" }}
                        ></i>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default Form;
