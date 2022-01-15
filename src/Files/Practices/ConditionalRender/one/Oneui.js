import React, { Component } from 'react'

class Oneui extends Component {
    state = {
        update:false
    }
    LogIn = ()=>{
        this.setState({update:true})
    }
    LogOut = ()=>{
        this.setState({update:false})
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 m-auto'>
                            <h1> UI - Component</h1>
                            {
                               (this.state.update)==false ? 
                               <>
                                 <button className="btn btn-success" onClick={this.LogIn}>LogIn</button>
                               </> :
                               <>
                                 <button className="btn btn-primary" onClick={this.LogOut}>LogOut</button>
                               </>
                            }
                           
                            <br /><br />{JSON.stringify(this.state)}
                            
                            <br /><br />
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Oneui
