import React,{useState} from 'react';
import Data from '../Data';

let Two = ()=>{
    let [search,setsearch] = useState('');
    let updateSearch = (e)=>{
        setsearch(e.target.value)
    }
    return (
        <>
            <div className='conatiner mt-5'>
                <div className='row mb-5'>
                    <div className='col-md-3 m-auto text-center'>
                        <h2 className='text-center mb-4'>Search Data: {search}</h2>
                        <input type='text' placeholder='Search Data' value={search} className='form-control' onChange={updateSearch}/>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-3 m-auto text-center'>
                        {/* {JSON.stringify(Data.employees)} */}
                        {
                            Data.employees.filter((filt)=>{
                                return filt.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                            }).map((e)=>{
                                return <div>
                                    {
                                        <p style={{border:'1px solid #000',padding:'8px'}}>{e.name}</p>
                                    }
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Two;
