import React,{useState,useEffect} from 'react';
import Child from './ArrayofObject/Child';

const App = ()=>{
    const [age,setage] = useState();
    const Handler = (data)=>{
        setage(data)
    }
    const Arr = [{
        name:'karthik',
        age:23,
        price:32303
    }]
    return (
        <div>
            <pre>{JSON.stringify(age)}</pre>
            {/* {
                age.map((elem,key)=>{
                    return <ul key={key}>
                        <li>{elem.name}</li>
                    </ul>
                })
            } */}
            <button onClick={()=>{Handler(Arr)}}>Click me</button>
            <Child />
        </div>
    )
}

export default App;
