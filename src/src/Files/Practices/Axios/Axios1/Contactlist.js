import React, { Component } from 'react'

class Contactlist extends Component {
    selectedContact = (elem)=>{
        this.props.selecteddatainfo(elem)
    }
    render() {
        let { contacts } = this.props;
        return (
            <>
              <h2 className="pb-2">Contact List</h2>
              {/* <pre>{JSON.stringify(this.props)}</pre> */}
              <table  className="table table-hover table-striped border">
                    <thead>
                        <tr  className="bg-warning">
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>GENDER</th>
                            <th>POST CODE</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                contacts.map((elem,key)=>{
                                    return <tr  key={key} onClick={this.selectedContact.bind(this, elem)}>
                                           <td>{elem.location.street.name}</td> 
                                           <td>{elem.dob.age}</td>
                                           <td>{elem.email}</td>
                                           <td>{elem.gender}</td>
                                           <td>{elem.location.postcode}</td>
                                    </tr>
                                })
                            }
                    </tbody>
                </table> 
            </>
        )
    }
}

export default Contactlist;
