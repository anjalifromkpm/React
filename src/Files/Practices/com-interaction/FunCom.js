import'./App.css';
import Components from './Componets';
import ProductUi from './ProductUi';

function FunCom(){
    let Name  = 'W3Schools';
    let Price = 15000;
    let Category = 'Bags';
    let Image = 'https://www.w3schools.com/html/img_girl.jpg';
    
     return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center">
                <h1>Function - Componet</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                <div className="border d-inline-block mt-4">
                    <img src={Image} alt="......!"/>
                    <p>Name: {Name}</p>
                    <p>Price: {Price}</p>
                    <p>Category: {Category}</p>
                </div>
                </div>
                <ProductUi Name={Name} Price={Price} Category={Category} Image={Image} />
                <Components />
            </div>
        </div>
    )
}

export default FunCom;