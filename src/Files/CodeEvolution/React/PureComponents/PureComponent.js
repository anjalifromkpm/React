import React,{PureComponent} from "react";

class Purecomponent extends PureComponent{
    render(){
        console.log('**************** Pure component');
        return(<>
            PureComponent {this.props.name}
        </>)
    }
}
export default Purecomponent;