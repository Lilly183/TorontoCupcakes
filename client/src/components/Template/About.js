import React from 'react';
import imgRelPath from './ImgRelPath';
import Breadcrumb from './Breadcrumb';

const About = () => 
{
  return (
    <div>
        <Breadcrumb 
            text = "About" 
        />
        
        {/* <!-- About Section Begin --> */}
        <section className="about spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about__video set-bg" data-setbg={imgRelPath + "about-video.jpg"}>
                            <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                            className="play-btn video-popup"><i className="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about__text">
                            <div className="section-title">
                                <span>About Cake shop</span>
                                <h2>Cakes and bakes from the house of Queens!</h2>
                            </div>
                            <p>The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are
                            Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="about__bar">
                            <div className="about__bar__item">
                                <p>Cake design</p>
                                <div id="bar1" className="barfiller">
                                    <div className="tipWrap"><span className="tip"></span></div>
                                    <span className="fill" data-percentage="95"></span>
                                </div>
                            </div>
                            <div className="about__bar__item">
                                <p>Cake Class</p>
                                <div id="bar2" className="barfiller">
                                    <div className="tipWrap"><span className="tip"></span></div>
                                    <span className="fill" data-percentage="80"></span>
                                </div>
                            </div>
                            <div className="about__bar__item">
                                <p>Cake Recipes</p>
                                <div id="bar3" className="barfiller">
                                    <div className="tipWrap"><span className="tip"></span></div>
                                    <span className="fill" data-percentage="90"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Section End --> */}

        {/* <!-- Testimonial Section Begin --> */}
        <section className="testimonial spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <span>Testimonial</span>
                            <h2>Our client say</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="testimonial__slider owl-carousel">
                        <div className="col-lg-6">
                            <div className="testimonial__item">
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={imgRelPath + "testimonial/ta-1.jpg"} alt=""/>
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Kerry D.Silva</h5>
                                        <span>New york</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star-half_alt"></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial__item">
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={imgRelPath + "testimonial/ta-2.jpg"} alt=""/>
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Kerry D.Silva</h5>
                                        <span>New york</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star-half_alt"></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial__item">
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={imgRelPath + "testimonial/ta-1.jpg"} alt=""/>
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Ophelia Nunez</h5>
                                        <span>London</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star-half_alt"></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial__item">
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={imgRelPath + "testimonial/ta-2.jpg"} alt=""/>
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Kerry D.Silva</h5>
                                        <span>New york</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star-half_alt"></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial__item">
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={imgRelPath + "testimonial/ta-1.jpg"} alt=""/>
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Ophelia Nunez</h5>
                                        <span>London</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star-half_alt"></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial__item">
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={imgRelPath + "testimonial/ta-2.jpg"} alt=""/>
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Kerry D.Silva</h5>
                                        <span>New york</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star-half_alt"></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Testimonial Section End --> */}

        {/* <!-- Team Section Begin --> */}
        <section className="team spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                        <div className="section-title">
                            <span>Our team</span>
                            <h2>Sweet Baker </h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="team__btn">
                            <a href="#" className="primary-btn">Join Us</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="team__item set-bg" data-setbg={imgRelPath + "team/team-1.jpg"}>
                            <div className="team__item__text">
                                <h6>Randy Butler</h6>
                                <span>Decorater</span>
                                <div className="team__item__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="team__item set-bg" data-setbg={imgRelPath + "team/team-2.jpg"}>
                            <div className="team__item__text">
                                <h6>Randy Butler</h6>
                                <span>Decorater</span>
                                <div className="team__item__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="team__item set-bg" data-setbg={imgRelPath + "team/team-3.jpg"}>
                            <div className="team__item__text">
                                <h6>Randy Butler</h6>
                                <span>Decorater</span>
                                <div className="team__item__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="team__item set-bg" data-setbg={imgRelPath + "team/team-4.jpg"}>
                            <div className="team__item__text">
                                <h6>Randy Butler</h6>
                                <span>Decorater</span>
                                <div className="team__item__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Team Section End --> */}
    </div>
  )
}

export default About;