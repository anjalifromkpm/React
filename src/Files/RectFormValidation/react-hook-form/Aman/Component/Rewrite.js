import React,{useState} from "react";
const Rewrite = ({submitData,editId,setShowModal,setSubmitData})=>{
    const [name,setName] = useState(submitData[editId].name);
    const submitHandler = (e)=>{
        e.preventDefault();
        const newData = [...submitData]
        newData[editId] = {
            name:name
        }
        setSubmitData([...newData])
        setShowModal(false)
    }
  return (<>
          <form className="col-md-6 m-auto" onSubmit={submitHandler}>
            <h1>Rewrite input values</h1>
            <div className="d-flex">
            <input type='text' className="form-control rounded-0" placeholder="Rename" value={name}
            onChange={(e)=>{setName(e.target.value)}}/>
            <input type="submit" className="btn btn-primary rounded-0"/>
            </div>
          </form>
  </>);
};

export default Rewrite;