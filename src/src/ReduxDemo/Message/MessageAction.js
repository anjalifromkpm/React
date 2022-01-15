import {GM,GA,GN} from './MessageActionType';

// Action

const gmAction = ()=>{
    return{
        type:GM
    }
}

const gaAction = ()=>{
    return{
        type:GA
    }
}

const gnAction = ()=>{
    return{
        type:GN
    }
}

export {gmAction,gaAction,gnAction};