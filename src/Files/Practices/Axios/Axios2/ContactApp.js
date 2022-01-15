import React from "react";
import Contactlist from "./Contactlist";
import Contactdetails from "./Contactdetails";
import axios from "axios";

class ContactApp extends React.Component{
    state = {
        c_details:[],
        c_append:{}
    }
    setData = (elem)=>{
        this.setState({c_append:elem})
    }
    componentDidMount = ()=>{
        axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
             .then((response)=>{
                this.setState({c_details:response.data})
             })
    }
    render(){
        return (
            <>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-12 text-center">
                            <h1 className="px-3 py-2 border rounded-3 d-inline-block my-3 shadow-sm border-success">Employees Data</h1>
                        </div>
                    </div>
                    <div className="row border border-success shadow-sm rounded-3 py-4 px-2">
                        <div className="col-md-9">
                           <div className="me-3">
                                <Contactlist send_c_details = {this.state.c_details} setnm={this.setData}/>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="me-3">
                                {
                                    Object.keys(this.state.c_append).length>0 ? (
                                        <>
                                            <Contactdetails send_c_info = {this.state.c_append}/>
                                        </>
                                    ) : null
                                }
                                {/* <Contactdetails send_c_info = {this.state.c_append}/> */}
                           </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ContactApp;