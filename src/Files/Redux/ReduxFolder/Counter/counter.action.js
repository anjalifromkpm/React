let INC = 'INC';
let DEC = 'DEC';

let INCAction = ()=>{
    return {type:INC}
}
let DECAction = ()=>{
    return {type:DEC}
}
export {INC,DEC,DECAction,INCAction}