import React, { useState } from "react";
const Edit = ({ submitData, id, setSubmitData}) => {
  const [name, setName] = useState(submitData[id].name);

  const save = (e) => {
    e.preventDefault();
    let newSubmitData = [...submitData];
    newSubmitData[id] = {
      name: name
    };
    setSubmitData([...newSubmitData]);
  };

  return (<>
          <form onSubmit={save}>
            <div className="d-flex align-items-center">
              <div>
                <input
                  value={name}
                  type="text"
                  placeholder="Enter Your Name"
                  className="form-control rounded-0"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input type='submit' className="btn btn-info rounded-0"/>    
              </div>         
            </div>
          </form>
  </>);
};

export default Edit;