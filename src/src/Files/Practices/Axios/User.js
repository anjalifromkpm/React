import React, { Component } from 'react'
import axios from 'axios';

class User extends Component {
    state = {
        userData:[]
    }
    componentDidMount = ()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response)=>{
          //console.log(response);
        this.setState({userData:response.data});
      })
      .catch(()=>{})  
    }
    render() {
        return (
            <>
               <div className="container">
                   <div className="row">
                       <div className="col-md-8">
                           <div>
                               <table className="table table-striped">
                                   <thead>
                                       <tr className="bg-warning text-danger">
                                           <th>ID</th>
                                           <th>TITLE</th>
                                           <th>COMPLETED</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {
                                           this.state.userData.map((elem)=>{ 
                                                    return  <tr>
                                                                <td>{elem.id}</td>
                                                                <td>{elem.title}</td>
                                                                <td>{elem.completed}</td>
                                                            </tr>
                                                ;
                                           })
                                       }
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </div>
               </div>
            </>
        )
    }
}

export default User
