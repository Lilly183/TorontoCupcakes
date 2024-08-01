import React from 'react';
import '../css/About.css';

const About = () =>
{
    return (
        <main>
            <section className="about spad">
                <div className="pageContainer container">
                    <div className="container pt-2 pb-3">
                        <h2 className="pageHeading text-start text-black pb-3">About</h2> 
                        <div className="section-title text-start">
                            <span className="text-black fst-italic">Cakes from the House of Toronto!</span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mb-2">                          
                            <div className="col-lg col-lg-4">
                                <div className="row align-items-center justify-content-center h-100">
                                    <div className="founder__container">
                                        <figure className="founder__wrapper team__item figure d-flex">
                                            <img className="founder figure-img img-fluid m-auto" src={process.env.PUBLIC_URL + "/assets/img/team/michelle.jpg"} alt="Michelle"/>
                                            <figcaption className="team__item__text figure-caption text-center w-100 py-3 px-0"><h6>Michelle Harrison</h6><span>Owner</span></figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg col-lg-8">
                                <div className="row align-items-stretch justify-content-center h-100">
                                    <div className="about__text ">
                                        <p>We are driven by loving what we do and what we make everyday. We use the
                                        finest ingredients to make what we believe are the tastiest treats around, and we love
                                        the idea of making people happy every time they bite into one. How much fun is that?</p>
                                        <br/>
                                        <p>Toronto Cupcakes was created by Michelle Harrison so she could pursue
                                        her love of baking. Inspired by her mother, Michelle opened Toronto Cupcakes in August 2010 as one of
                                        Canada's first gourmet cupcakeries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;