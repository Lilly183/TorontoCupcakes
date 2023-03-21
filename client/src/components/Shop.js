import React from 'react';
import '../css/Shop.css'
import Breadcrumb from './template/Breadcrumb';
import Product from './Product';

const Shop = () => 
{
    const data =
    [
        {id: 1, imgSrc: "shop/product-1.jpg", name: "Dozen Cupcakes", price: 32.00},
        {id: 2, imgSrc: "shop/product-2.jpg", name: "Cookies and Cream", price: 30.00},
        {id: 3, imgSrc: "shop/product-3.jpg", name: "Gluten Free Mini Dozen", price: 31.00},
        {id: 4, imgSrc: "shop/product-4.jpg", name: "Cookie Dough", price: 25.00},
        {id: 5, imgSrc: "shop/product-5.jpg", name: "Vanilla Salted Caramel", price: 5.00},
        {id: 6, imgSrc: "shop/product-6.jpg", name: "German Chocolate", price: 14.00},
        {id: 7, imgSrc: "shop/product-7.jpg", name: "Dulce De Leche", price: 32.00},
        {id: 8, imgSrc: "shop/product-8.jpg", name: "Mississippi Mud", price: 8.00},
        {id: 9, imgSrc: "shop/product-9.jpg", name: "VEGAN/GLUTEN FREE", price: 98.85},
        {id: 10, imgSrc: "shop/product-10.jpg", name: "SWEET CELTICS", price: 5.77},
        {id: 11, imgSrc: "shop/product-11.jpg", name: "SWEET AUTUMN LEAVES", price: 26.41},
        {id: 12, imgSrc: "shop/product-12.jpg", name: "PALE YELLOW SWEET", price: 22.47}
    ];

    const products = data.map((product) =>
        <Product
            key = {product.id}
            prod = {product}
        />
    );

    return (
        <div>
            <Breadcrumb 
                text = "Shop" 
            />

            {/* <!-- Shop Section Begin --> */}
            <section className="shop spad">
                <div className="container">
                    <div className="shop__option">
                        <div className="row">
                            <div className="col-lg-7 col-md-7">
                                <div className="shop__option__search">
                                    <form action="#">
                                        <select>
                                            <option value="">Categories</option>
                                            <option value="">Red Velvet</option>
                                            <option value="">Cup Cake</option>
                                            <option value="">Biscuit</option>
                                        </select>
                                        <input type="text" placeholder="Search"/>
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="shop__option__right">
                                    <select>
                                        <option value="">Default sorting</option>
                                        <option value="">A to Z</option>
                                        <option value="">1 - 8</option>
                                        <option value="">Name</option>
                                    </select>
                                    <a href="/"><i className="fa fa-list"></i></a>
                                    <a href="/"><i className="fa fa-reorder"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products}
                    </div>
                    <div className="shop__last__option">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__pagination">
                                    <a href="/">1</a>
                                    <a href="/">2</a>
                                    <a href="/">3</a>
                                    <a href="/"><span className="arrow_carrot-right"></span></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__last__text">
                                    <p>Showing 1-9 of 10 results</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Shop Section End --> */}
        </div>
    )
}

export default Shop;