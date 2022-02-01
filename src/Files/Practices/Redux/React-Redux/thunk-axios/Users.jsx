import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchUser} from './Components/userAction';

const Users = ({userData,fetchUser}) => {
    useEffect(()=>{
        fetchUser()
    },[])
  return(<>
    {
        userData.loading?(
        <h1>Loading</h1>
        ):userData.error?(
        <h1>{userData.error}</h1>
        ):(
            userData.map((elem,index)=>{
                return <h2 key={index}>{elem.name}</h2>
            })
        )
    }
  </>)
};

const mapStateToProps = (state)=>{
    return{
        userData:state.user.user
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        fetchUser:()=>dispatch(fetchUser())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);
