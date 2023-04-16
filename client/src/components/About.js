import React from 'react';
import '../css/About.css'; 

const About = () => 
{
    return (
        <main>
            <section className="about spad">
                <div className="pageContainer container">
                    <div className="container pt-2 pb-4">
                        <h2 className="pageHeading text-start text-black">About</h2>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="founder__container mx-auto">                                    
                                <figure className="founder__wrapper team__item figure d-flex justify-content-center">
                                    <img className="founder figure-img img-fluid m-auto" src={process.env.PUBLIC_URL + "/assets/img/team/michelle.jpg"} alt="Michelle"/>
                                    <figcaption className="team__item__text figure-caption text-center w-100 py-3 px-0"><h6>Michelle Harrison</h6><span>Owner</span></figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-12 col-md-12">
                            <div className="about__text">
                                <div className="section-title text-center">
                                    <span className="text-black">About Toronto Cupcakes</span>
                                    <h2>Cakes from the House of Toronto!</h2>
                                </div>
                                <p className="text-center">We are driven by loving what we do and what we make everyday. We use the 
                                finest ingredients to make what we believe are the tastiest treats around. And.. we love
                                the idea that our treats are making people happy every time they bite into one. How much fun is that?</p>
                                <br/>
                                <p className="text-center">Toronto Cupcakes was created by Michelle Harrison so she could pursue 
                                her love of baking. Inspired by her mother, Michelle opened Toronto Cupcakes in August 2010 as one of 
                                Canada's first gourmet cupcakeries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;