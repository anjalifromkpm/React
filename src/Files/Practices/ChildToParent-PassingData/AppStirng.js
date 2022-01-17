import React,{useState} from 'react';
import Child from './String/Child';

const App = ()=>{
    const [name,setname] = useState();
    const Handler = (data)=>{
        setname(data)
    } 
    return (
        <div>
            <h2>Hello: {name}</h2>
            <Child Handler={Handler}/>
        </div>
    )
}

export default App;
