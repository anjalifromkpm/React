import React from 'react';

class User1 extends React.Component{
    constructor (){
        super();
        console.log("i am from constructor")
    }
    componentDidMount = ()=>{
        console.log("i am coming without calling automatically")
    }
    clickHandler = ()=>{
        console.log("I am from click")
    }
    render(){
        return(
            <>
                <h1 className="text-center my-3">Render Method</h1>
                {console.log("Render Method")}
                <hr />
                <button className="btn btn-warning" onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}
export default User1;