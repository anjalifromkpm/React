import React,{useState} from 'react';
import Child from './Array/Child';

const App = ()=>{
    const [age,setage] = useState([]);
    const Handler = (data)=>{
        setage(data)
    } 
    return (
        <div>
            <h2>Age: {age}</h2>
            {
                age.map((elem,key)=><ul key={key}>
                    <li>{elem}</li>
                </ul>)
            }
            <Child Handler={Handler}/>
        </div>
    )
}

export default App;
