import {GM,GA,GN} from './MessageType';

const GMaction = ()=>{
    return{
        type:GM
    }
}
const GAaction = ()=>{
    return{
        type:GA
    }
}
const GNaction = ()=>{
    return{
        type:GN
    }
}

export {GMaction,GAaction,GNaction}