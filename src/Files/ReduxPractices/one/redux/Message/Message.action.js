//create action tyoes
const GM = 'GM';
const GN = 'GN';

let GmAction = ()=>{
    return {type:GM}
}
let GnAction = ()=>{
    return {type:GN}
}

export {GM,GN,GmAction,GnAction};

//action is function returns actionable objects