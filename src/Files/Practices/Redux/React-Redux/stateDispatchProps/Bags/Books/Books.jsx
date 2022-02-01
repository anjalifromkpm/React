import React from 'react';
import {mathsAction,socialAction} from '../BagsActions';
import { connect } from 'react-redux';

const Books = ({maths,social,mathsDispatch,socailDispatch}) => {
  return <div>
      <h1>Buy Maths Books: {maths}</h1>
      <h1>Buy Social Books: {social}</h1>
      <button onClick={mathsDispatch}>BUY MATHS</button>
      <button onClick={socailDispatch}>BUY SOCAIL</button>
  </div>;
};

const mapStateToProps = state=>{
    return{
        maths:state.books.maths,
        social:state.books.social
    }
};
const mapDispatchToProps = dispatch=>{
    return{
        mathsDispatch:()=>dispatch(mathsAction()),
        socailDispatch:()=>dispatch(socialAction())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Books);
