import React from "react";

// class Two extends React.Component{
//     render(){
//         return(<>
//             <h2>{this.props.name},{this.props.age}</h2>
//         </>)
//     }
// }

class Two extends React.Component{
    render(){
        const {name,age} = this.props;
        return(<>
            <h2>{name},{age}</h2>
        </>)
    }
}

export default Two;