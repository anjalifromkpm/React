import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Action} from './Action';

const Cake = ()=>{
  const storemsg = useSelector(state=> state.cake.Cake)
  const dispatch = useDispatch()
  return <div>
      <h1>Cakes - {storemsg}</h1>
      <button onClick={()=>dispatch(Action())}>BUY CREAM</button>
  </div>;
}

export default Cake;
