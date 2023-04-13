import React from 'react'
import '../css/Carousel.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const slides = 
[
    {
        imgSrc: "/assets/img/hero/hero-2.jpg",
        heading: "Making your life sweeter one bite at a time!",
        route: "/Shop",
        label: "Our cakes"
    },
    {
        imgSrc: "/assets/img/hero/hero-1.jpg",
        heading: "Making your life sweeter one bite at a time!",
        route: "/About",
        label: "About"
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
                                        <h2>{slide.heading}</h2>
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