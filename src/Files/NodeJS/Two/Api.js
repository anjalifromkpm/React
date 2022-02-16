import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Api = () => {
    const [list,setlist] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/tasks')
        .then((res)=>{
            setlist(res.data)
        })
    },[])
  return (
    <div className='p-5'>
      <pre>{JSON.stringify(list)}</pre>
      {list.map((elem,index)=>{
        return(<ul>
          <li>{elem.todo}</li>
        </ul>)
      })}
    </div>
  )
}

export default Api;