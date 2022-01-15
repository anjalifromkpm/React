import React,{useState} from 'react';
import Axios from 'axios';

function PostForm() {
    const [Forms,setForms]=useState({
        userId:'',
        title:'',
        body:''
    });

    const changeHandler = (event)=>{
        setForms({...Forms,[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        Axios.post('https://jsonplaceholder.typicode.com/posts',Forms)
             .then((res)=>{
                console.log(res);
             })
             .catch((err)=>{
                 console.log(err);
             })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <pre>{JSON.stringify(Forms)}</pre>
                <div>
                    <input type='text' name='userId' value={Forms.userId} onChange={changeHandler}/>    
                </div>    
                <div>
                    <input type='text' name='title' value={Forms.title} onChange={changeHandler}/>    
                </div>  
                <div>
                    <input type='text' name='body' value={Forms.body} onChange={changeHandler}/>    
                </div>  
                <button type='submit'>Submit</button>
            </form>  
        </div>
    )
}

export default PostForm;
