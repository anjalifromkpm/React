import React from "react";
import ProductUi1 from './ProductUi1';

class Components extends React.Component{
    Name  = 'W3Schools';
    Price = 15000;
    Category = 'Bags';
    Image = 'https://www.w3schools.com/html/img_girl.jpg';
    render(){
        return(
            <React.Fragment>
                <div className="col-md-3 col-sm-6">
                <div className="border d-inline-block mt-4">
                    <img src={this.Image} alt="......!"/>
                    <p>Name: {this.Name}</p>
                    <p>Price: {this.Price}</p>
                    <p>Category: {this.Category}</p>
                </div>
                </div>
                <ProductUi1 Name={this.Name} Image={this.Image} Price={this.Price} Category={this.Category}/>
            </React.Fragment>
        )
    }
}

export default Components;