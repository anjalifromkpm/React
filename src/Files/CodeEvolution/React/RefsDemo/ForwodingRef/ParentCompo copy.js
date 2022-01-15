import React, { Component } from 'react';
import ChildCompo from './ChildCompo';

export class ParentCompo extends Component {
    constructor(props) {
        super(props)
        this.InpRef = React.createRef()
    }
    clickHandler = ()=>{
        this.InpRef.current.focus();
    }
    render() {
        return (
            <div className='text-center '>
                <ChildCompo ref={this.InpRef}/>
                <button className='mt-2' onClick={this.clickHandler}>Foucs Input</button>
            </div>
        )
    }
}

export default ParentCompo;

