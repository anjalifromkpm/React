import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>
               <footer className="position-fixed bottom-0 w-100">
                <div className="container-fluid" id="Footer">
                        <div className="row align-items-center py-2">
                            <div className="col-12 py-1">
                                <div>
                                    <p className="text-center text-white mb-0">Copyright © 2018 JevelinTheme - Theme by Shufflehound</p>
                                </div>
                            </div>  
                        </div>
                    </div>  
               </footer>
            </>
        )
    }
}

export default Footer
