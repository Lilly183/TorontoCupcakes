import React from 'react';
import { CartState } from '../context/Context';
import ProductCard from './ProductCard';
import '../css/Shop.css';

const Shop = () => 
{    
    const { state: {products} } = CartState();

    return (
        <main>
            <section className="spad">
                <div className="container shopContainer">
                    <div className="row justify-content-center">
                        <h2 className="pageHeading shopHeading text-black px-0 pb-4">Cupcakes</h2>
                    </div>
                    <div className="row align-items-center justify-content-center align-content-center">
                        {products.map((prod) => 
                        {
                            return <ProductCard key={prod.id} prod={prod}/>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Shop;