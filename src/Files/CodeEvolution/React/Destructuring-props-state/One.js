import React from "react";

// const One = (props)=>{
//     return(<>
//         <h2>{props.name}, {props.age}</h2>
//     </>)
// }

// 1. const One = ({name,age})=>{
//     return(<>
//         <h2>{name}, {age}</h2>
//     </>)
// }

const One = (props)=>{
    const {name,age} = props;
    return(<>
        <h2>{name}, {age}</h2>
    </>)
}

export default One;