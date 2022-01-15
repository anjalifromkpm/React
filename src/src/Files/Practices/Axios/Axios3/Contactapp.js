import React, { Component } from 'react';
import Contactdetails from './Contactdetails';
import Contactlist from './Contactlist';
import Data from './Data';

class Contactapp extends Component {
    Record = Data;
    state = {
        P_datas:[],
        get_datas:{}
    }
    setDatadetails =(elem)=>{
        this.setState({get_datas:elem})
    }

    componentDidMount = ()=>{
        this.setState({P_datas:this.Record})
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mb-5 shadow-sm">
                        <div className="col-12 pb-2">
                            <h1 className="text-center">Product Data</h1>
                            {/* <pre>{JSON.stringify(this.state)}</pre> */}
                        </div>
                    </div>

                    <div className="row shadow-sm p-1">
                        <div className="col-6">
                            <div>
                                <Contactlist passmyData={this.state.P_datas} setDatadetails={this.setDatadetails}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                {
                                    Object.keys(this.state.get_datas).length>0? 
                                    <>
                                      <Contactdetails getDatadetails = {this.state.get_datas}/>  
                                    </> : null
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contactapp
