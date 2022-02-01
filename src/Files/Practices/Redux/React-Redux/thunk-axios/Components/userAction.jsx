import axios from 'axios';
import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './userType';

const fetchUserRequest = ()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (user)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}

const fetchUserFailure = (error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export {fetchUserRequest,fetchUserSuccess,fetchUserFailure}

export const fetchUser = ()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then((res)=>{
                const user = res.data;
                dispatch(fetchUserSuccess(user))
             })
             .catch((err)=>{
                const errorMsg = err.message;
                dispatch(fetchUserFailure(errorMsg))
             })
    }
}