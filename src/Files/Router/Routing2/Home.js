import React from "react";
import '../Routing2/Style.css';

class Home extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <h1 className="text-center mt-5">Home - Component</h1>
                <br />
                <hr />
                <div className="container checking">
                    <h1 className={this.headclr} onClick={this.Addclr}>Good Morning.</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;