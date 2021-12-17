let INCR = 'INCR';
let DECR = 'DECR';
let IncrAction = ()=>{
    return {
        type:INCR
    }
}
let DecrAction = ()=>{
    return {
        type:DECR
    }
}

export {IncrAction,DecrAction,INCR,DECR};