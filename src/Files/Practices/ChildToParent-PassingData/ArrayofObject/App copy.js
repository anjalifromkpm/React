import React,{useState} from 'react';
import Child from './Child';

const App = ()=>{
    // const [age,setage] = useState();
    // const Handler = (data)=>{
    //     setage(data)
    // }
    const emp=[{
        name:'karthik',
        age:23
    },{
        name:'suresh',
        age:23
    }]
    return (
        <div>
            <pre>{JSON.stringify(emp)}</pre>
            {
                emp.map((elem,key)=>{
                    return <ul>
                        <li>{elem.name}</li>
                    </ul>
                })
            }
            <Child />
        </div>
    )
}

export default App;
