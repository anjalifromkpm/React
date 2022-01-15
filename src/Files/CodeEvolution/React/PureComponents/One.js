import React,{Component} from "react";
import Purecomponent from "./PureComponent";
import RegComponent from "./RegComponent";

class Parent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name:'karthik'
        }
    }
    
    componentDidMount = ()=>{
        setInterval(()=>{
            this.setState({
                // name:'karthik'
                name:'karthik m'
            })
        },2000)
    }
    render(){
        console.log('**************** Parent component');
        return(<>
            ParentComponent <br />
            <Purecomponent name={this.state.name}/><br />
            <RegComponent name={this.state.name} />
        </>)
    }
}
export default Parent;