import React, { useState } from "react";
//import Edit from "./Edit";
import Rewrite from './Rewrite';
import { useForm } from "react-hook-form";

const Todolist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const [name, setName] = useState("");
  const [id, setId] = useState(1);
  const [submitData, setSubmitData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const onSubmit = (e) => {
    reset();

    setId(id + 1);
    const data = {
      id: id,
      name: name
    };
    setSubmitData([...submitData, data]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="col-10 m-auto">
      <h1>To-Do-List</h1>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className={`form-control ${errors.name && "invalid"}`}
              {...register("name", {
                required: "Name is Required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 character required",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum 30 character are allowed",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Only alphabets are allowed"
                }
              })}
              onKeyUp={() => {
                trigger("name");
              }}
              placeholder="Enter Person Name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <button type="reset" className="btn btn-primary">
              Clear
            </button>
          </div>
        </div>
      </form>

      <table className="table mt-3 col-10 m-auto">
        <thead className="thead-light">
          <tr>
            <th>Sl.No.</th>
            <th>Name</th>
            <th>Action</th>
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
                    className="mr-4 fas fa-edit"
                    onClick={() => {
                      setShowModal(true);
                      setEditId(index);
                    }}
                    style={{ cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      {showModal && <Rewrite submitData={submitData} editId={editId} setShowModal={setShowModal} setSubmitData={setSubmitData}/>}
      
      
      {/* {showModal && (
        <Edit
          submitData={submitData}
          id={editId}
          setSubmitData={setSubmitData}
        />
      )} */}

      {/* {showModal && (
        <Edit
          submitData={submitData}
          id={editId}
          setSubmitData={setSubmitData}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )} */}
    </>
  );
};

export default Todolist;