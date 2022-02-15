import React,{useState} from 'react';
import '../App.css';

const App = () => {
    const [couterONE,setcouterONE]=useState(0);
    const [couterTWO,setcouterTWO]=useState(0);

    const incrementOne = ()=>{
        setcouterONE(couterONE+1)
    }
    const incrementTwo = ()=>{
        setcouterTWO(couterTWO+1)
    }

    const isEven = ()=>{
        let i=0
        while(i<2000000000) i++
        return couterONE%2 === 0;
    }
  return (<div className='App'>
    <div>
        <div className='mb-1'>
            <button onClick={incrementOne}>CounterOne: {couterONE}</button> 
            <span>{isEven()?'Even':'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>CounterTwo: {couterTWO}</button>
        </div>
    </div>
  </div>)
}

export default App;