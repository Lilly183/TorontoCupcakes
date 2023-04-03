import React from 'react';
import productsArr from '../demo/data';
// import DemoCard from './DemoCard';
import { CartState } from '../context/Context'
import ProductCard from '../components/ProductCard';
import "./newShop.css";

const Demo = () => 
{

    const test = productsArr.map((product) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        imgSrc: product.image,
        description: product.description,
    }));
    
    const { state: {products} } = CartState();

    // console.log(products);

    return (
        <main>
            <section className="spad">
                <div className="container shopContainer">
                    {/* <div className="container headingContainer"> */}
                        {/* <div className="row justify-content-center">
                            <div className="px-auto">
                                Hi
                            </div>
                        </div> */}
                    {/* </div> */}
                    {/* <div className="col"> */}
                        <div className="row justify-content-center">
                            <h2 className="shopHeading px-0 pb-4">Cupcakes:</h2>
                        </div>
                        <div className="row align-items-center justify-content-center align-content-center">
                            {products.map((prod) => 
                            {
                                return <ProductCard key={prod.id} prod={prod}/>
                            })}
                        </div>
                    {/* </div> */}
                </div>
            </section>
        </main>
    )
}

export default Demo;