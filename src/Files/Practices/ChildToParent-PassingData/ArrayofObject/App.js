import React,{useState} from 'react';
import Child from './Child';

const App = ()=>{
    const [age,setage] = useState([]);
    const Handler = (data)=>{
        setage(data)
    }
    return (
        <div>
            <pre>{JSON.stringify(age)}</pre>
            {
                age.map((elem,key)=>{
                    return <tr key={key}>
                        <td>{elem.name}</td>
                        <td>{elem.brand}</td>
                        <td>{elem.price}</td>
                    </tr>
                })
            }
            <Child Handler={Handler}/>
        </div>
    )
}

export default App;
