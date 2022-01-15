import React, { Component } from 'react';

class Cls extends Component {
    constructor(props) {
        super(props)
        this.Inp = React.createRef();
    }
    clickHandler = ()=>{
        alert(this.Inp.current.value);
    }
    componentDidMount = ()=>{
        this.Inp.current.focus()
        console.log(this.Inp.current);
    }
    render() {
        return (
            <div className='text-center'>
                <input type='text' ref={this.Inp}/>
                <button onClick={this.clickHandler}>Click button</button>
            </div>
        )
    }
}

export default Cls;
