import React from "react";
import User1 from './lifecyclemethods';
import One from "./One";
import Two from './Two';
import Three from "./Three";
import Four from "./Four";

class App extends React.Component{
    render(){
        return(
            <>
                <User1 /> 
                <One />
                <Two />
                <Three />
                <Four />
            </>
        )
    }
}
export default App;