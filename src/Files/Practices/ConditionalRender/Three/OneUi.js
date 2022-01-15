import React, { Component } from 'react'

class OneUi extends Component {
    state = {
        Bengalore:true,
        Andhrapradesh:false,
        Chennai:false
    }
    Handler = (event)=>{
        this.setState({[event.target.name]:event.target.checked})
    }
    render() {
        return (
            <>
               <div className='container mt-5'>
                   <div className='row'>
                       <div className='col-md-2 py-3 border border-light'>
                           <div>
                               <form>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" name="Bengalore" onClick={this.Handler}/> Bengalore
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" name="Andhrapradesh" onClick={this.Handler} /> Andhrapradesh
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" name="Chennai" onClick={this.Handler} /> Chennai
                                    </div>    
                               </form>
                           </div>
                       </div>

                       <div className='col-md-8'>
                           {
                               JSON.stringify(this.state)
                           }<br /><br />
                           {this.state.Bengalore ? <>
                            <div class="card mb-3">
                                <div class="card-header bg-success text-white">
                                    <p class="card-text">Bengalore</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                           </>:null}

                           {this.state.Andhrapradesh ? <>
                            <div class="card mb-3">
                                <div class="card-header bg-success text-white">
                                    <p class="card-text">Andhrapradesh</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                           </>:null}

                           {this.state.Chennai ? <>
                            <div class="card mb-3">
                                <div class="card-header bg-success text-white">
                                    <p class="card-text">Chennai</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                           </>:null}

                       </div>
                   </div>
               </div>
            </>
        )
    }
}

export default OneUi;
