import React from 'react';
import Counter from './Render/RenderProps/Counter';
import One from './Render/RenderProps/One';
import Two from './Render/RenderProps/Two';

function App() {
    return (
        <div>
            <Counter render={(Counter,clickHandler)=>{return(
                <One Counter={Counter} clickHandler={clickHandler}/>
            )}}/>
            <Counter render={(Counter,clickHandler)=>{return(
                <Two Counter={Counter} clickHandler={clickHandler}/>
            )}}/>
        </div>
    )
}

export default App;
