import React from 'react';

// function ChildCompo() {
//     return (
//         <div>
//             <input type='text' />
//         </div>
//     )
// }
const ChildCompo = React.forwardRef((props,ref)=>{
    return  (
                <div>
                    <input type='text' ref={ref}/>
                </div>
            )
})

export default ChildCompo;
