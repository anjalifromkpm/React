import React from 'react';
import {CreamAction} from './Action'
import { useSelector,useDispatch } from 'react-redux';


const Ui = ()=>{
  const storeMsg = useSelector((state)=>{
    return state.cream.IceCream
  })
  const dispatch= useDispatch();
  return(<>
    <h1>IceCream {storeMsg}</h1>
    <button onClick={()=>dispatch(CreamAction())}>BUY_CREAM</button>
  </>)
}

export default Ui;
