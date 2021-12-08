import React, { Component } from 'react'

class One extends Component {
    ColorsNames = ["Red","Blue","Green","Orange","Yellow"];
    Images = [
        {
        image1:'https://image.shutterstock.com/image-vector/beautiful-card-number-200-made-260nw-544507969.jpg',
        image2:'https://media.istockphoto.com/vectors/years-anniversary-chart-sign-vector-id854410796?k=20&m=854410796&s=612x612&w=0&h=Yj2xXkwXoEBdasmcHZPIyGknGYmHoMlpkWRvt4eX5E0=',
        image3:'https://media.istockphoto.com/photos/numbers-200-3d-picture-id1212534932'
    },
    // {
    //     image2:'https://image.shutterstock.com/image-vector/beautiful-card-number-200-made-260nw-544507969.jpg',
    //     image1:'https://media.istockphoto.com/vectors/years-anniversary-chart-sign-vector-id854410796?k=20&m=854410796&s=612x612&w=0&h=Yj2xXkwXoEBdasmcHZPIyGknGYmHoMlpkWRvt4eX5E0=',
    //     image3:'https://media.istockphoto.com/photos/numbers-200-3d-picture-id1212534932'
    // }
];
Product = [
    {
        p_name:"Iphone 12s",
        p_price:50000,
        p_brand:"Apple",
        p_image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574259457"
    },
    {
        p_name:"Iphone 11s",
        p_price:60000,
        p_brand:"Redmi",
        p_image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574259457"
    },
    {
        p_name:"Real Me",
        p_price:70000,
        p_brand:"Apple",
        p_image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574259457"
    },
    {
        p_name:"Real Me",
        p_price:70000,
        p_brand:"Apple",
        p_image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574259457"
    }
    ,
    {
        p_name:"Real Me",
        p_price:70000,
        p_brand:"Apple",
        p_image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574259457"
    }
    ,
    {
        p_name:"Real Me",
        p_price:70000,
        p_brand:"Apple",
        p_image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574259457"
    }
]

    render() {
        return (
            <>
               <ul>
                    {
                        this.ColorsNames.map((Element)=>{
                            return <li>{Element}</li>
                        })
                    } 
                   
                </ul> 
                <hr />
                {
                    this.Images.map((img)=>{
                        return <div>
                            <img src={img.image1}/>
                        </div>
                    })
                }
                <hr />
                <br />
                <h1 className="text-center mb-5">Products Lists</h1>
                <div className="container">
                    <div className="row">
                    {
                    this.Product.map((produ)=>{
                        
                        return  <div className="col-md-4 mb-4">
                                <div>
                                <div className="card">
                                    <div style={{width:"200px"}}>
                                     <img src={produ.p_image} className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{produ.p_brand}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    })
                }
                    </div>
                </div>
            </>
        )
    }
}

export default One
