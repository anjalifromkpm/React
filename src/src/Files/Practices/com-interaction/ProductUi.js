import React from 'react';

let ProductUi = (props)=>{
    return(
        <React.Fragment>
                <div className="col-md-3 col-sm-6">
                <div className="border d-inline-block mt-4">
                    <img src={props.Image} alt="......!"/>
                    <p>Name: {props.Name}</p>
                    <p>Price: {props.Price}</p>
                    <p>Category: {props.Category}</p>
                </div>
                </div>
        </React.Fragment>
    )
}

export default ProductUi;