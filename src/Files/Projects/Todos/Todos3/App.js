import React,{useState} from 'react';
import Todolist from './Todolist';

const App = ()=>{
    const [Inputvalue,setInputvalue] = useState('');
    const [Todos,setTodos]  = useState([]);

    const changeHandler = (e)=>{
        setInputvalue(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const newTodos = [Inputvalue,...Todos]
        setTodos(newTodos);
        setInputvalue(' ');
        console.log(Todos);
    }
    const deleteHandler = (IndexValue)=>{
        const newTodos = Todos.filter((todo,index)=>{return index !==IndexValue});
        setTodos(newTodos);
    }
    const editHandler = (EditIndexValue)=>{
        const newTodos = Todos.filter((todo,index)=>{return index !==EditIndexValue});
        setTodos(newTodos);
        const selectedItems = Todos.find((todo,index)=>{return index===EditIndexValue})
        setInputvalue(selectedItems);
    }
  return(<>
    <div className='container'>
      <div className='row'>
          <div className='col col-md-4 m-auto'>
              <div className='gutter-gap'>
                  <h1 className='text-center mb-3'>Todo Lists</h1>
                  <form method='post' onSubmit={submitHandler}>
                      <div className='mb-3 d-flex'>
                          <input type='text' placeholder='Enter Lists' className='form-control rounded-0'
                          value={Inputvalue}
                          onChange={changeHandler}/>
                          <input type='submit' value='ADD' className='btn btn-success rounded-0'/>
                      </div>
                  </form>
              </div>
          </div>
      </div>

      <div className='row'>
          <div className='col col-md-4 m-auto'>
              <div className='gutter-gap'>
                  <Todolist Todos={Todos} deleteHandler={deleteHandler} editHandler={editHandler}/>
              </div>
          </div>
      </div>
    </div>
  </>)
}

export default App;
