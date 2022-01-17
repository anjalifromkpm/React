import React,{useState} from 'react';
import Child from './Objects/Child';

const App = ()=>{
    const [age,setage] = useState([]);
    const Handler = (data)=>{
        setage(data)
    }
    return (
        <div>
            <pre>{JSON.stringify(age)}</pre>
            {/* <h1>Hello: {age.name}</h1> */}
            {
                age.map((elem,index)=>{
                    return <tr key={index}>
                        <td>{elem.name}</td>
                        <td>{elem.age}</td>
                    </tr>
                })
            }
            <Child Handler={Handler}/>
        </div>
    )
}

export default App;
