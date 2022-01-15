import React, { Component } from 'react';

class Class extends Component {
    constructor(props){
        super(props);
        this.state = {
            CRtime:new Date().toLocaleTimeString(),
            crTime:new Date().toLocaleTimeString(),
        }    
    }
    componentDidMount = ()=>{
        console.log('i am coming when the render method is excuted!');
        setInterval(()=>{
            this.setState({
                CRtime:new Date().toLocaleTimeString()
            })
        },1000)
    }
    componentWillUpdate = ()=>{
        // this will execute when the render method is executed!
        // if render method is rendering few minuts continuesly then also it will update
        // console.log('Update Cycle');
    }
    componentWillUnmount = ()=>{
        console.log('I am coming whne ur leaving this page!')
    }
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card header text-center p-2 bg-primary">
                            <h4>{this.state.CRtime}</h4>
                            </div>
                            <div className="card header text-center p-2 bg-success">
                            <h4>{this.state.crTime}</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Class;
