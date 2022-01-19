import React,{useState} from 'react';

const TodoForm = ({AddTodo})=>{
    const [Input , setInput] = useState('');

    const changeHandle = (e)=>{
        setInput(e.target.value)
    }
    const SubmitHandle = (e)=>{
        e.preventDefault();
        AddTodo({
            id:Math.floor(Math.random()*10000),
            Text:Input
        })
        setInput('')
    }

return <form className='d-flex col-3 m-auto mb-4' onSubmit={SubmitHandle} method='post'>
            <input type='text' name='input' placeholder='Add todo' value={Input} 
            className='form-control rounded-0'
            onChange={changeHandle}/>
            <button type='submit' className='btn btn-success rounded-0'>ADD</button>
       </form>;
}

export default TodoForm;
