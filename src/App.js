import React from "react";
import Header from './Style/Header';
import Employees from "./Files/TableData/Employees";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
              <Header />
              <Employees />
            </React.Fragment>
        )
    }
}

export default App;