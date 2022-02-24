import React,{ useEffect,useState } from 'react';
import './Currency.css';
import Currencyoptions from './Currencyoptions';

const Currency = () => {
    const [currencyOptions,setcurrencyOptions] = useState([])
    const [fromAmount,setfromAmount] = useState(0);
    const [toAmount,settoAmount] = useState(0)
    const [fromCurrency,setfromCurrency] = useState('')
    const [tocurrency,settocurrency] = useState('')
    const [currencyNames,setcurrencyNames] = useState({})

    useEffect(()=>{
        fetch('https://api.frankfurter.app/currencies')
        .then(res=>res.json())
        .then(data=>{
            setcurrencyOptions(Object.keys(data))
            setfromCurrency(Object.keys(data)[0])
            settocurrency(Object.keys(data)[0])
            setcurrencyNames(data)
        })
    },[])
    useEffect(()=>{
        if(parseInt(fromAmount)===0){
            settoAmount(0)
        }else if(fromAmount===''){
            settoAmount('')
        }else if(fromCurrency===tocurrency){
            settoAmount(fromAmount)
        }else{
            fetch(`https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${tocurrency}`)
            .then(res=>res.json())
            .then(data=>settoAmount(Object.values(data.rates)[0]))
        }
    },[fromAmount,fromCurrency,toAmount,tocurrency])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col m-auto'>
                <div className='gutter-gap'>
                    <h1 className='text-center mb-4'>Currency Converter</h1>
                    <div className='d-flex justify-content-between' style={{columnGap:'15px'}}>
                        <div className='from-currency'>
                            <h2>From Currency</h2>
                            <Currencyoptions  prop='from currency' fromCurrency={fromCurrency}
                            currencyOptions={currencyOptions}
                            updateCurrency={(e)=>{
                                setfromCurrency(e.target.value)
                            }}/>
                            <h3>Enter amount in : 
                                {
                                    currencyNames[`${fromCurrency}`]
                                }
                            </h3>
                            <div>
                                <input type='number' value={fromAmount}  className='form-control'
                                onChange={e=>setfromAmount(e.target.value)}/>
                            </div>
                        </div>
                        <div className='to-currency'>
                            <h2>To Currency</h2>
                            <Currencyoptions  prop='To currency' tocurrency={tocurrency}
                            currencyOptions={currencyOptions}
                            updateCurrency={(e)=>{
                                settocurrency(e.target.value)
                            }}/>
                            <h3>Output in : 
                                {
                                    currencyNames[`${tocurrency}`]
                                }
                            </h3>
                            <div>
                                <input type='text' value={toAmount} className='form-control' readOnly autoComplete='off'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
            <div className='col m-auto'>
                <div>
                    <h2 className='text-center'>
                        {fromAmount} : {fromCurrency} = {toAmount} : {tocurrency}
                     </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Currency;