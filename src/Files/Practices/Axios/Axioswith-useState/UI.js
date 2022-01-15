import React,{useState,useEffect} from 'react';
import  Axios from 'axios';

const UI = ()=>{
    let [user,setuser] = useState([])
    useEffect(()=>{
            Axios.get('https://jsonplaceholder.typicode.com/users')
                 .then((response)=>{
                    console.log(response.data)
                    setuser(response.data)
                 })
                 .catch()
        },[])
    return (
        <div className='m-2'>
            <h2>useState() with Axios</h2>
            <pre>{JSON.stringify(user)}</pre>
        </div>
    )
}

export default UI
