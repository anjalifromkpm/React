import React from 'react';
import './Currency.css';

const Currencyoptions = ({prop,fromCurrency,toCurrency,currencyOptions,updateCurrency}) => {
  const Options = currencyOptions.map((data,index)=>{
    return(<option key={index} value={data}>{data}</option>)
  })
  return (<>
    {
      prop==='from currency' ? 
      <select name='currency' className='form-select' value={fromCurrency} onChange={updateCurrency}>
        {Options}
      </select>:prop==='To currency'?
      <select name='currency' className='form-select' value={toCurrency} onChange={updateCurrency}>
      {Options}
      </select>:null
    }
  </>)
}

export default Currencyoptions;