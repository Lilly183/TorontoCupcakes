import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/Carousel.css';

const slides = 
[
    {
        imgSrc: "/assets/img/hero/hero-2.jpg",
        heading: "Welcome to Toronto Cupcakes!",
        description: "Making your life sweeter, one bite at a time.",
        route: "/Shop",
        label: "Our products"
    },
    {
        imgSrc: "/assets/img/hero/hero-1.jpg",
        heading: "For the best experience, please create an account.",
        description: "It's quick, easy, and free.",
        route: "/Register",
        label: "Sign Up"
    },
];

const options = 
{
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoheight: "false",
    autoplay: false,
    dots: false,
    items: 1,
    loop: true,
    margin: 0,
    
    nav: true,
    navText: ["<i class='fa fa-angle-left'><i/>", "<i class='fa fa-angle-right'><i/>"],
    smartSpeed: 1200
};

const Carousel = () => 
{
    return (
        <OwlCarousel id="heroCarousel" className="hero__slider owl-carousel" {...options}>
        {
            slides.length === 0 ?
            <div className="item"></div> 
            :
            slides.map(slide => 
            {
                return (
                    <div key={slide.route} className="hero__item" style={{backgroundImage: `url(${slide.imgSrc})`}}>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8 bg-white p-0">
                                    <div className="hero__text m-3">
                                        <h2 className="mb-2">{slide.heading}</h2>
                                        <p className="mb-3"><em>{slide.description}</em></p>
                                        <Link to={slide.route} className="primary-btn our__cakes">{slide.label}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </OwlCarousel>
    );
}

export default Carousel;