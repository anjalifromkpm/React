import React,{Component} from "react";

class RegComponent extends Component{
    render(){
        console.log('**************** Regular component');
        return(<>
            RegComponent {this.props.name}
        </>)
    }
}
export default RegComponent;