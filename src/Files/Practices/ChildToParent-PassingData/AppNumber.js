import React,{useState} from 'react';
import Child from './Number/Child';

const App = ()=>{
    const [age,setage] = useState();
    const Handler = (data)=>{
        setage(data)
    } 
    return (
        <div>
            <h2>Age: {age}</h2>
            <Child Handler={Handler}/>
        </div>
    )
}

export default App;
