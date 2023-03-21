import React from 'react';
import productsArr from '../demo/data';
import DemoCard from './DemoCard';
import { CartState } from '../context/Context'

const Demo = () => 
{

    const test = productsArr.map((product) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        imgSrc: product.image
    }));
    
    const { state: {products} } = CartState();

    // console.log(products);

    return (
        <main className="bg-dark">
            <section className="spad bg-secondary">
                <div className="container bg-success">
                    <div className="row bg-danger">
                        <div className="col-lg-12 text-center">
                            <div className="products__wrapper">
                                {products.map((prod) => 
                                {
                                    return <DemoCard key={prod.id} prod={prod}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Demo;