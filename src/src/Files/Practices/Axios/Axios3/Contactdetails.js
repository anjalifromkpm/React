import React, { Component } from 'react'

class Contactdetails extends Component {
    render() {
        let {getDatadetails} = this.props;
        return (
            <>
                <h2 className="text-center">Product Details</h2>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <div className="card">
                    <div className="card-header" style={{width:'300px'}}>
                        <p>Product Image:</p>
                        <img src={getDatadetails.P_image} className="img-fluid"/>
                        <p>Product Name: {getDatadetails.p_name}</p> 
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Product Price: {getDatadetails.p_price}</li>
                        <li className="list-group-item">Product SKU: {getDatadetails.p_SKU}</li>
                        <li className="list-group-item">
                            <p>Product Description:</p>
                            <p>{getDatadetails.p_description}</p>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Contactdetails
