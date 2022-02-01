import React from 'react';
import { connect } from 'react-redux';
import {INCRCounterAction} from './CounterAction';
import {DECRCounterAction} from './CounterAction';

const Counter = (props)=>{
  return <div>
      <h1>Coutern - {props.counter}</h1>
      <button onClick={props.Increment}>INCR</button>
      <button onClick={props.Decrement}>DECR</button>
  </div>;
}

const mapStateToProps = (state)=>{
    return{
        counter:state.counter.counter
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        Increment:()=>dispatch(INCRCounterAction()),
        Decrement:()=>dispatch(DECRCounterAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
