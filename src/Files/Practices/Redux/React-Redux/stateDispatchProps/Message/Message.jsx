import React from 'react';
import { connect } from 'react-redux';
import {GMaction,GAaction,GNaction} from './MessageAction'

const Message = (props)=>{
  return <div>
      <h2>Karthik: {props.Message}</h2>
      <button onClick={props.GM}>GM</button>
      <button onClick={props.GA}>GA</button>
      <button onClick={props.GN}>GN</button>
  </div>;
}

const mapStateToProps = (state)=>{
    return{
        Message:state.message.message
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        GM:()=>dispatch(GMaction()),
        GA:()=>dispatch(GAaction()),
        GN:()=>dispatch(GNaction()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message);
