import React,{useState} from 'react';
import Data from './Data';

let  Four = ()=>{
    const [search, setsearch] = useState('');
    // Input
    const upDateSearch = (e)=>{
        setsearch(e.target.value)
    }
    // Select
    const selectHandler =  (e)=>{
        setsearch(e.target.value)
    }
    return (
        <>
           <div className="container mt-5">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className='d-flex justify-content-between'>
                            <h3 className="text-center">IMAGE FILTERS | Available products <u>Nature</u>,<u>Cars</u>,<u>Dress</u></h3>
                            <input type='text' name="search" className='form-control w-25'
                            value={search} onChange={upDateSearch} placeholder='Search by Name'/>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <div className='d-flex justify-content-between'>
                            <h3 className="text-center">IMAGE FILTERS | Available products <u>Nature</u>,<u>Cars</u>,<u>Dress</u></h3>
                            <select name='filt' onSelect={selectHandler}>
                                <option value=''>All</option>
                                <option value='nature'>NATURE</option>
                                <option value='car'>CARS</option>
                                <option value='dress'>DRESSES</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <div className=''>
                            <h3 className="text-center">IMAGE FILTERS | Available products <u>Nature</u>,<u>Cars</u>,<u>Dress</u></h3>
                            <div className='text-center w-50 m-auto mt-4'>
                                <button type='button' className='btn border border-success text-success rounded-0 w-25' onClick={()=>{setsearch('')}}>All</button>
                                <button type='button' className='btn border border-success text-success rounded-0 w-25' onClick={()=>{setsearch('nature')}}>NATURE</button>
                                <button type='button' className='btn border border-success text-success rounded-0 w-25' onClick={()=>{setsearch('car')}}>CARS</button>
                                <button type='button' className='btn border border-success text-success rounded-0 w-25' onClick={()=>{setsearch('dress')}}>DRESSES</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* {JSON.stringify(Data)} */}
                    {
                        Data.filter((obj)=>{return obj.category.toLowerCase().includes(search.toLowerCase())}).map((obj)=>{
                            return <>
                                        <div className="col-md-3 pb-3">
                                            <div className='border'>
                                                <img src={obj.image} style={{width:'100%',height:'300px',objectFit:'fill'}}/>
                                                <h5 className='p-2 pt-3' style={{textTransform:'capitalize'}}>{obj.category}</h5>
                                            </div>
                                        </div>
                                   </>
                        })
                    }
                </div>

            </div> 
        </>
    )
}
export default Four;
