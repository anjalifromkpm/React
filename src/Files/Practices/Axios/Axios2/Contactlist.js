import React from "react";

class Contactlist extends React.Component{
    appendtoDetails = (elem)=>{
        this.props.setnm(elem)
    }
    render(){
        let {send_c_details} = this.props;
        return(
            <>
                <h2>Contact Lists</h2>
                {/* <pre>{JSON.stringify(this.props.send_c_details)}</pre> */}
                <table className="table table-striped mt-3 border border-success">
                    <thead>
                        <tr className="bg-success text-white">
                            <th className="ps-3">Name</th>
                            <th>Email</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Post Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           send_c_details.map((elem)=>{
                               return (
                                   <tr style={{cursor:'pointer'}} onClick={this.appendtoDetails.bind(this,elem)}>
                                       <td>{elem.name.first}</td>
                                       <td>{elem.email}</td>
                                       <td>{elem.location.state}</td>
                                       <td>{elem.location.country}</td>
                                       <td>{elem.location.postcode}</td>
                                   </tr>
                               )
                           }) 
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Contactlist;