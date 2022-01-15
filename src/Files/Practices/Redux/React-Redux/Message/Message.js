import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {gmAction,gaAction,gnAction} from '../../../../../src/ReduxDemo/Message/MessageAction';

const Message = ()=>{
    const message = useSelector(state=> state.MessageM.message);
    const dispatch = useDispatch();
    return (
        <div className='gutter-gap p-2 border'>
            <div>
                <h2>Meggase: {message}</h2>
            </div>
            <div className='mt-5'>
                <button className='btn btn-success bg-white text-success rounded-0 px-4 me-1'
                onClick={()=>{dispatch(gmAction())}}>GM</button>
                <button className='btn btn-success bg-white text-success rounded-0 px-4 me-1'
                onClick={()=>{dispatch(gnAction())}}>GA</button>
                <button className='btn btn-success bg-white text-success rounded-0 px-4 me-1'
                onClick={()=>{dispatch(gaAction())}}>GN</button>
            </div>
        </div>
    )
}

export default Message;
