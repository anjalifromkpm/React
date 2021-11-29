import React from "react";

class ProductUi1 extends React.Component{
    render(props){
        return(
            <React.Fragment>
                <div className="col-md-3 col-sm-6">
                <div className="border d-inline-block mt-4">
                    <img src={this.props.Image} alt="......!"/>
                    <p>Name: {this.props.Name}</p>
                    <p>Price: {this.props.Price}</p>
                    <p>Category: {this.props.Category}</p>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductUi1;