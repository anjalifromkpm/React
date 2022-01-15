import React  from "react";
import axios from "axios";

class Four extends React.Component{
    
        state = {
            Albhum:[]
        }
    openHandler = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
             .then((response)=>{
                this.setState({Albhum:response.data})
             })
             .catch(()=>{})
    }
    render(){
        return(
            <>
                <pre>{JSON.stringify(this.state)}</pre>
                <button className="btn btn-success" onClick={this.openHandler}>OPen</button>
                <hr />
                <table  className="table w-50">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Albhum.map((elem,key)=>{
                                return <tr key={key}>
                                    <td>{elem.userId}</td>
                                    <td>{elem.id}</td>
                                    <td>{elem.title}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Four;