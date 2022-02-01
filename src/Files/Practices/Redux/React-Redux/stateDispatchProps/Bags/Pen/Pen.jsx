import React from 'react';
import { connect } from 'react-redux';
import {blueAction,blackAction} from '../BagsActions';

const Pen = ({blue,black,blueDispatch,blackDispatch}) => {
  return <div>
      <h1>Buy Blue Pen: {blue}</h1>
      <h1>Buy Black Pen: {black}</h1>
      <button onClick={blueDispatch}>BUY BLUE</button>
      <button onClick={blackDispatch}>BUY BLACK</button>
  </div>;
};

const mapStateToProps = (state)=>{
    return{
        blue:state.books.blue,
        black:state.books.black
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        blueDispatch:()=>dispatch(blueAction()),
        blackDispatch:()=>dispatch(blackAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Pen);
