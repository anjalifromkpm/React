import React, { Component } from "react";

class Cart extends Component{
    state = {
                Name : "Karthik",
                Price : 2300,
                Course : "Reacrt/Java",
                Image : "https://www.behindwoods.com/tamil-movies-cinema-news-16/images/karthi-clarifies-on-rumours-of-political-campaign-photos-pictures-stills.jpg",
                Qty:0
            }
    Decrement = ()=>{
        this.setState({Qty:this.state.Qty-1})
    }
    Increment = ()=>{
        this.setState({Qty:this.state.Qty+1})
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card" style={{width:"250px"}}>
                                <img src={this.state.Image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.Name}</h5>
                                    <p className="card-text">{this.state.Price}</p>
                                    <a href="/" className="btn btn-success">Add To Cart</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>P_Name</th>
                                        <th>P_Image</th>
                                        <th>P_Price</th>
                                        <th>P_QTY</th>
                                        <th>P_Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.Name}</td>
                                        <td><img src={this.state.Image} style={{width:"50px"}} atl="...."/></td>
                                        <td>{this.state.Price}</td>
                                        <td>
                                            <button className="btn btn-outline-primary btn-sm" onClick={this.Decrement}>-</button>
                                             <span className="p-2">{this.state.Qty}</span> 
                                            <button className="btn btn-outline-primary btn-sm" onClick={this.Increment}>+</button>
                                        </td>
                                        <td>{this.state.Price * this.state.Qty}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Cart;