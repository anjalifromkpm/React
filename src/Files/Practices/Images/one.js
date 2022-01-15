import React, { Component } from 'react';
import karthikm from './karthik.jpg';

class one extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require('./karthik.jpg').default} width={300} height={400} alt='...'/>
                        </div>
                        <div className="col-md-6">
                            <img src={karthikm} width={300} height={400} alt='...'/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default one;
