import React from "react";

class UI extends React.Component{
    Arr = [
        {id:101,name:"karthik",email:"kar@gmail.com",sal:20000},
        {id:102,name:"M Karthik",email:"kar@gmail.com",sal:20000    }
    ];
    render(){
        let Res = this.Arr.map((elem,index)=>{
            return <tr>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.sal}</td>
            </tr>
        })
        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.Arr)}</pre>
                <hr />
                <table className="table w-25 border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>SALARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Res}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default UI;