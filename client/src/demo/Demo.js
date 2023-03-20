import React from 'react';
import products from './data';
import DemoCard from './DemoCard';

const Demo = () => 
{
  return (
    <main className="bg-dark">
        <section className="spad bg-secondary">
            <div className="container bg-success">
                <div className="row bg-danger">
                    <div className="col-lg-12 text-center">
                        <div className="products__wrapper">
                            {products.map((product) => 
                            (
                                <DemoCard
                                key = {product._id}
                                product = {product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Demo;