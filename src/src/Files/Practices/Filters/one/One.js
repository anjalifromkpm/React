import React,{useState} from 'react';

let One = ()=>{
    let [search,setseach] = useState('');
    let searchHandler = (event)=>{
        event.preventDefault();
        setseach(event.target.value)
    }
    const Names = [
        {
            name:'karthik'
        },
        {
            name:'suresh'
        },
        {
            name:'shankar'
        },
        {
            name:'mani'
        }
    ]
    return (
        <>
          <div className='container mt-5'>
              <div className='row'>
                  <div className='col-md-3 m-auto'>
                    <h3 className='text-center'>Search Names</h3>  
                    <br />
                    <input type="text" placeholder="Search Names" value={search}
                     onChange={searchHandler}
                    className='form-control'/>
                    <br />
                    {search}
                    
                    <div className='text-center'>{
                            Names.filter((n)=>{return n.name.includes(search)}).map((e)=>{
                                return <p style={{border:'1px solid #000',padding:'8px'}}>{e.name}</p>
                            })
                        }</div>
                  </div>
              </div>
          </div>
        </>
    )
}

export default One;
