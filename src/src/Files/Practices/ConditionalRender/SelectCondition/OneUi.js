import React, { Component } from 'react'
    
class OneUi extends Component {
    state = {
        Bengalore:false,
        Chennai:false,
        Goa:false
    }
    Handler = (event)=>{
        this.setState({
            [event.target.name]:event.target.selected
        })
    }
    render() {
        return (
            <>
                <div className='container mt-5'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-9'>
                            <div>
                                <h3>Select Your Prefered Location..</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div>
                            <select class="form-select" onChange={this.Handler}>
                                <option value={true} name="Bengalore" >Bengalore</option>
                                <option value={true} name="Chennai" >Chennai</option>
                                <option value={true} name="Goa" >Goa</option>    
                            </select>
                            </div>
                        </div>
                        {JSON.stringify(this.state)}
                        <hr className='mt-3'/>
                    </div>

                    <div className='row'>
                        <div className='col-md-9'>
                            <div>
                                {
                                    this.state.Bengalore?<>
                                        <div class="card border-success mb-3">
                                        <div class="card-header bg-transparent border-success">
                                            Bengalore
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Success card title</h5>
                                            <p class="card-text"> 
                                                Some quick example text to build on the card title
                                                and make up the bulk of the card's content.
                                                Some quick example text to build on the card title
                                                and make up the bulk of the card's content.
                                                Some quick example text to build on the card title
                                                and make up the bulk of the card's content.
                                                Some quick example text to build on the card title
                                                and make up the bulk of the card's content.
                                                Some quick example text to build on the card title
                                                and make up the bulk of the card's content.
                                                Some quick example text to build on the card title
                                                and make up the bulk of the card's content.
                                            
                                                </p>
                                            </div>
                                            <div class="card-footer bg-transparent border-success">Footer</div>
                                        </div>
                                    </>:null
                                }
                                
                                {
                                    this.state.Chennai?<>
                                        <div class="card border-success mb-3">
                                            <div class="card-header bg-transparent border-success">
                                                Chennai
                                            </div>
                                            <div class="card-body text-success">
                                                <h5 class="card-title">Success card title</h5>
                                                <p class="card-text"> 
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                
                                                </p>
                                            </div>
                                            <div class="card-footer bg-transparent border-success">Footer</div>
                                        </div>
                                    </>:null
                                }

                                {
                                    this.state.Chennai?<> 
                                        <div class="card border-success mb-3">
                                            <div class="card-header bg-transparent border-success">
                                                Goa
                                            </div>
                                            <div class="card-body text-success">
                                                <h5 class="card-title">Success card title</h5>
                                                <p class="card-text"> 
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
                                                
                                                </p>
                                            </div>
                                            <div class="card-footer bg-transparent border-success">Footer</div>
                                        </div>
                                    </>:null
                                }                              

                            </div>
                        </div>
                    </div>

                </div>  
            </>
        )
    }
}

export default OneUi
