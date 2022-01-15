import React, { Component } from 'react'

class Contactdetails extends Component {
    render() {
        
        return (
            <>
                <h2 className="pb-2">Contact Details</h2>
                <pre>{JSON.stringify(this.props.selinfo)}</pre>
                <div className="card">
                    <img src={this.props.selinfo.picture.large} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="text-center"><a href="#" className="btn btn-warning btn-md">Go somewhere</a></p>
                    </div>
                </div>
            </>
        )
    }
}

export default Contactdetails;
