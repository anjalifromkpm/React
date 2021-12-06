import React from "react";
import DrillbyArray from './DrillbyArray';

let DrillbyObject = (props)=>{
    return(
        <React.Fragment>
            <div className="container">
                <h1>Component - Drill By Object</h1>
                <pre>{JSON.stringify(props.Emp)}</pre>
                <hr />
            </div>
            <DrillbyArray Emp={props.Emp}/>
        </React.Fragment>
    )
}

export default DrillbyObject;