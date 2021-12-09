import React, { Component } from 'react'

class Contactlist extends Component {
    setDataHandler = (elem)=>{
        //console.log(elem.p_name)
        this.props.setDatadetails(elem)
    }
    render() {
        let { passmyData } = this.props;
        return (
            <>
                <h2 className="text-center mb-2">Product List</h2>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <table className="table table-striped">
                    <thead>
                        <tr className="bg-info">
                            <th>P_NAME</th>
                            <th>P_SKU</th>
                            <th>P_PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <pre>{JSON.stringify(passmyData)}</pre> */}
                        {
                           passmyData.map((elem,index)=>{
                               return <tr key={index} style={{cursor:'pointer'}} onClick={this.setDataHandler.bind(this,elem)}>
                                   <td>{elem.p_name}</td>
                                   <td>{elem.p_SKU}</td>
                                   <td>{elem.p_price}</td>
                               </tr>
                           }) 
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default Contactlist
