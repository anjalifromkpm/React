import React from "react";

class Three extends React.Component{
    employee = {
        name:"karthik",
        age:23,
        course:"rect"
    }
    state = {
        emp:this.employee
    }
    render(){
        return(
            <>
                <pre>{JSON.stringify(this.state)}</pre>
            </>
        )
    }
}
export default Three;