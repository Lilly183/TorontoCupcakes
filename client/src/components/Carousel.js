import React from 'react'
import imgRelPath from './template/ImgRelPath';
import '../css/Carousel.css';
import { Link } from 'react-router-dom';

function Carousel() {
  return (
    <div>
        <section className="hero">
            <div className="hero__slider owl-carousel">
                <div className="hero__item set-bg" data-setbg={imgRelPath + "hero/hero-2.jpg"}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 bg-white p-0">
                                <div className="hero__text m-3">
                                    <h2>Making your life sweeter one bite at a time!</h2>
                                    <Link to="/shop" className="primary-btn our__cakes">Our cakes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__item set-bg" data-setbg={imgRelPath + "hero/hero-1.jpg"}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 bg-white p-0">
                                <div className="hero__text m-3">
                                    <h2>Making your life sweeter one bite at a time!</h2>
                                    <Link to="product" className="primary-btn">Our cakes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}


    



export default Carousel;