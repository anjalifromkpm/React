import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

function Form() {
    const {register,handleSubmit,formState:{errors},reset,trigger} = useForm()
    const [name, setName] = useState("");
    const [submitData, setSubmitData] = useState([{name:'Hi'}]);
    const [editId, setEditId] = useState(0);

    const submitHandler = (e)=>{
        const data = {
            name:name
        }
        setSubmitData([...submitData, data])  
    }
    const deleteHandler = (IndexValue)=>{
        const newData = submitData.filter((elem,index)=>{return index!==IndexValue})
        setSubmitData(newData)  
    }
    //console.log(submitData[editId].name);
  return(
    <div className="container">
    <div className='row m-md-auto'>
        <div className='col col-md-8  m-md-auto p-3 shadow'>
            <div className='gutter-gap'>
                <h1 className='text-center mb-3'>To Do List</h1>
                <pre>{JSON.stringify(submitData[editId].name)}</pre>
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
                    {submitData.length > 0 ?  <>
                        {submitData.map((ele, index) => {
                    return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ele.name}</td>
                        <td>
                        <i
                            className="me-2 bi bi-pencil-square text-success"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setEditId(index)
                            }}
                        ></i>
                        <i
                            className="bi bi-trash text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={()=>{deleteHandler(index)}}
                        ></i>
                        </td>
                    </tr>
                    );
                })}
                    </>:null}
                
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default Form;
