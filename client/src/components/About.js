import React from 'react';
import imgRelPath from './template/ImgRelPath';
import Breadcrumb from './template/Breadcrumb';
import '../css/About.css'; 

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
                    <div className="col-12">
                        <div className="backgroundPic m-auto">
                            <div className="team__item d-flex set-bg img-fluid" data-setbg={imgRelPath + "team/michelle.jpg"}>
                                <div className="team__item__text">
                                    <h6>Michelle Harrison</h6>
                                    <span>Owner</span>
                                    <div className="team__item__social">
                                        <a href="/"><i className="fa fa-facebook"></i></a>
                                        <a href="/"><i className="fa fa-twitter"></i></a>
                                        <a href="/"><i className="fa fa-instagram"></i></a>
                                        <a href="/"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="about__text">
                            <div className="section-title">
                                <span className="dark text-center">About Toronto Cupcake</span>
                                <h2 className="dark text-center">Cakes and bakes from the house of Toronto!</h2>
                            </div>
                            <p className="text-center">We are driven by loving what we do and what we make everyday. We get to use the 
                            finest ingredients to make what we believe are the tastiest treats around. And.. we love
                            the idea that our treats are making people happy every time they bite into one. How much fun is that! </p>
                            <br/>
                            <p className="text-center">Toronto Cupcake was created by Michelle Harrison so she could pursue her love of baking. A lifelong
                             baker, inspired by her mother, Michelle opened Toronto Cupcake in August 2010 as one of Canada's first
                             gourmet cupcakeries. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Section End --> */}

        {/* <!-- Testimonial Section Begin --> */}

        {/* <!-- Testimonial Section End --> */}

        {/* <!-- Team Section Begin --> */}
        
        {/* <!-- Team Section End --> */}
    </div>
  )
}

export default About;