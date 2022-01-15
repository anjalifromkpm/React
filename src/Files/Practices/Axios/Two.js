import React from "react";

class Two extends React.Component{
    Employee = ["karthik","suresh","shankar"];
    state = {
        emp:this.Employee
    }
    render(){
        return(
            <>
                <pre>{JSON.stringify(this.state)}</pre>
            </>
        )
    }
}
export default Two;