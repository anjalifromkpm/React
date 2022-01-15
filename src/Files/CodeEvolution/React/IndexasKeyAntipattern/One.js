import React from "react";

const One = ()=>{
    const names = ['name1','name2','name3',];
    return(<div>
        {
            names.map((nm,index)=>{
                return <h1>index:{index}, {nm}</h1>
            })
        }
    </div>)
}
export default One;