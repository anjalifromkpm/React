import React from "react";

class Contactdetails extends React.Component{
    render(){
        let {send_c_info}=this.props;
        return(
            <>
                <h2>Contact Details</h2>
                {/* <pre>{JSON.stringify(this.props.send_c_info)}</pre> */}
                <div className="border border-success rounded-3 mt-3">
                <div class="card">
                    <img src={send_c_info.picture.large} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{send_c_info.location.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{send_c_info.gender}</li>
                        <li class="list-group-item">{send_c_info.location.country}</li>
                        <li class="list-group-item">{send_c_info.location.postcode}</li>
                    </ul>
                    <div class="card-body d-flex justify-content-around">
                        <a href="#" class="btn btn-success rounded-0">Add to Cart</a>
                        <a href="#" class="btn btn-success rounded-0">For More</a>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Contactdetails;