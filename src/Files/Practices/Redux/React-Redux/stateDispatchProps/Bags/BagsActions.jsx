import {MATHS,SOCIAL,RULED,UNRULED,BLUE,BLACK} from './BagsType';

const mathsAction = ()=>{
    return{
        type:MATHS
    }
}
const socialAction = ()=>{
    return{
        type:SOCIAL
    }
}
const ruledAction = ()=>{
    return{
        type:RULED
    }
}
const unruledAction = ()=>{
    return{
        type:UNRULED
    }
}
const blueAction = ()=>{
    return{
        type:BLUE
    }
}
const blackAction = ()=>{
    return{
        type:BLACK
    }
}
export {mathsAction,socialAction,ruledAction,unruledAction,blueAction,blackAction};