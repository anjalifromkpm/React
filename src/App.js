import React from "react";
import Header from './Header';
import Cart from "./Cart";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
              <Header />
              <Cart />
            </React.Fragment>
        )
    }
}

export default App;