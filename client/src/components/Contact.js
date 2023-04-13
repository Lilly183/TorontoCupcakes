import React from 'react';
import imgRelPath from './template/ImgRelPath';
import '../css/Contact.css';
import Map from './Map';

const Contact = () => 
{
    return (
        <div>
            <section className="contact spad">
                <div className="container">
                    <Map/>
                    <div className="contact__address">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt"></span>
                                            <p>795 W 5th St, San Bernardino, CA 92410, USA</p>
                                        </li>
                                        <li><span className="icon_headphones"></span>
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li><span className="icon_mail_alt"></span>
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>Los angeles</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt"></span>
                                            <p>639 S Spring St, Los Angeles, CA 90014, USA</p>
                                        </li>
                                        <li><span className="icon_headphones"></span>
                                            <p>+1 213-612-3000</p>
                                        </li>
                                        <li><span className="icon_mail_alt"></span>
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt"></span>
                                            <p>1000 Lakepoint Dr, Frisco, CO 80443, USA</p>
                                        </li>
                                        <li><span className="icon_headphones"></span>
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li><span className="icon_mail_alt"></span>
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact__text">
                                <h3>Contact With us</h3>
                                <ul>
                                    <li>Representatives or Advisors are available:</li>
                                    <li>Mon-Fri: 5:00am to 9:00pm</li>
                                    <li>Sat-Sun: 6:00am to 9:00pm</li>
                                </ul>
                                <img src={imgRelPath + "cake-piece.png"} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact__form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Message"></textarea>
                                            <button type="submit" className="site-btn">Send Us</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;