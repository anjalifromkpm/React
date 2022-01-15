import React from "react";

const One = ()=>{
    const clickHandler = ()=>{
        alert("clicked")
    }
    return(<>
    <div className="text-center">
        <button onClick={clickHandler}>Click</button>
    </div>
    </>)
}
export default One;