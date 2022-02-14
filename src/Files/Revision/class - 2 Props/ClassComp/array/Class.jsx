import React, { Component } from 'react'

/* export class Class extends Component {
    Car = ["Toyata",'2300000','Red'];
  render() {
    return (
      <div>
          <h2>Car name: {this.Car[0]}</h2>
          <h2>Car price: {this.Car[1]}</h2>
          <h2>Car colore: {this.Car[2]}</h2>
      </div>
    )
  }
}
 */
/* export class Class extends Component {
    Car = [
            {
                name:'toyota',
                price:'500000',
                color:'blue'
            },
            {
                name:'Audi',
                price:'100000',
                color:'red'
            }
        ];
  render() {
    return (
      <div>
          <h2>Car name: {this.Car[2].name}</h2>
          <h2>Car price: {this.Car[2].price}</h2>
          <h2>Car colore: {this.Car[2].color}</h2>
      </div>
    )
  }
} */

export class Class extends Component {
    Car = [
            {
                name:'toyota',
                price:'500000',
                color:'blue'
            },
            {
                name:'Audi',
                price:'100000',
                color:'red'
            }
        ];
  render() {
    return (<>
        <table className="table">
            <thead>
                <tr>
                <th>S no:</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>COLOR</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.Car.map((elem,index)=>{
                        const {name,price,color} = elem;
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{color}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
    </>)
  }
}

export default Class;