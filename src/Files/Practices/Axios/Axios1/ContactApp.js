import React, { Component } from 'react'
import Contactlist from './Contactlist';
import Contactdetails from './Contactdetails';
import axios from 'axios';

class ContactApp extends Component {
    state = {
        emp_details:[],
        emp_info:{}
    }
    getSelectedContact = (elem) => {
        //console.log("Test case 1", elem);
        this.setState({
            emp_info: elem,
        });
      };

    componentDidMount = ()=>{
        axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
             .then((reponse)=>{
                this.setState({emp_details:reponse.data})
             })
             .catch()
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div>
                                <h1 className="text-center text-decoration-underline my-4">Employees List</h1>
                            </div>
                        </div>
                    </div>
                    {/********/}
                    <div className="row">
                        <div className="col-md-8">
                            <div className="me-5">
                                <Contactlist contacts={this.state.emp_details} selecteddatainfo = {this.getSelectedContact}/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div>
                            {Object.keys(this.state.emp_info).length > 0 ? (
                                <>
                                <Contactdetails selinfo = {this.state.emp_info}/>
                                </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactApp;
