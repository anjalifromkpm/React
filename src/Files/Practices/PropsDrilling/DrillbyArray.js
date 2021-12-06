import React from "react";

let DrillbyArray = function(props) {
    return(
        <React.Fragment>
            <div className="container">
                <h1>Component - Drill by Array</h1>
                <pre>{JSON.stringify(props.Emp)}</pre>
            </div>
        </React.Fragment>
    )
}

export default DrillbyArray;