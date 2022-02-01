import React from 'react';
import { connect } from 'react-redux';
import {ruledAction,unruledAction} from '../BagsActions';

const Notes = ({ruled,unruled,ruledDispatch,unruledDispatch}) => {
  return <div>
      <h1>Buy Ruled Notes: {ruled}</h1>
      <h1>Buy UnRuled Notes: {unruled}</h1>
      <button onClick={ruledDispatch}>BUY RULED</button>
      <button onClick={unruledDispatch}>BUY UNRULED</button>
  </div>;
};

const mapStateToProps = (state) => {
    return {
        ruled:state.books.ruled,
        unruled:state.books.unruled
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ruledDispatch:()=>dispatch(ruledAction()),
        unruledDispatch:()=>dispatch(unruledAction())
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Notes);
