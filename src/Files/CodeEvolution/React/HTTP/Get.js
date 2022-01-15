import React,{useEffect,useState} from 'react';
import Axios from 'axios';

function Get() {
    const [posts,setposts] = useState([]);
    const [Error,seterror] = useState('');

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((response)=>{
                setposts(response.data)
             })
             .catch((err)=>{
                seterror('Error in fetching data')
             })
    },[])
    return (
        <div className='container text-center'>
            <h2>Lists of Posts</h2>
            <hr />
            {
              (posts.length)>0?<>
              {
                  posts.map((elem)=>{
                    return(<div key={elem.id}>
                      <p>{elem.title}</p>
                    </div>)
                }) 
              }
              </>:null 
            }
            {
                !posts.length>0?<>
                    {Error}
                </>:null
            }
        </div>
    )
}

export default Get;
