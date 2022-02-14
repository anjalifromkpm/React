import React,{useState,useEffect} from 'react';
import axios from 'axios';

const One = () => {
    const [user,setuser] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/employee/detail')
             .then((res)=>{
                setuser(res.data)
             })
             .catch()
    },[])
    console.log(user);
  return <>
  
  {JSON.stringify(user)}
          {
            (Object.keys(user).length>0?
            user.map((elem,index)=>{
              return(<div className="card" style={{width:"18rem"}} key={index}>
              <img src={elem.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Name: {elem.name}</h5>
                <p className="card-text">email: {elem.email}</p>
                <p className="card-text">email: {elem.age}</p>
                <p className="card-text">course: {elem.courese}</p>
                <button className='btn btn-success'>Add To Card</button>
              </div>
            </div>)
            })
            :null)
          }
  </>;
};

export default One;
