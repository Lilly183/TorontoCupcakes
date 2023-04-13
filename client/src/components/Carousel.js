import React from 'react'
import '../css/Carousel.css';
import { Link } from 'react-router-dom';

const slides = 
[
    {
        image: "/assets/img/hero/hero-2.jpg",
        heading: "Making your life sweeter one bite at a time!",
        route: "/Shop",
        label: "Our cakes"
    },
    {
        image: "/assets/img/hero/hero-1.jpg",
        heading: "Making your life sweeter one bite at a time!",
        route: "/About",
        label: "About"
    },
];

function Carousel() {
    return (
        <div>
            <section className="hero">
                <div className="hero__slider owl-carousel">

                    {slides.map((slide) => (
                        <div key={slide.route} className="hero__item" style={{backgroundImage: `url(${slide.image})`}}>
                            <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8 bg-white p-0">
                                        <div className="hero__text m-3">
                                            <h2>{slide.heading}</h2>
                                            <Link to={slide.route} className="primary-btn our__cakes">{slide.label}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
}


    



export default Carousel;