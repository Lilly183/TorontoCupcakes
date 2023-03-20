import React from 'react';
import '../css/Footer.css'
import SocialMediaLink from './SocialMediaLink';
import Copyright from './Copyright';

const Footer = () => 
{
  return (
    <footer className="footer w-100 bg-dark bg-gradient">
        <div className="footer__container container">
            <div className="row">
                <div className="col-4 d-flex justify-content-around border-end border-secondary">
                    <div className="footer__support">
                        <h6 className="mb-2">Need Help?</h6>
                        <ul>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 border-end border-secondary">
                    <div>
                        <h6 className="text-center text-white mb-3">Follow Us!</h6>
                        <div className="row justify-content-center text-center">
                            <SocialMediaLink icon="fa fa-facebook"/>
                            <SocialMediaLink icon="fa fa-instagram"/>
                            <SocialMediaLink icon="fa fa-twitter"/>
                            <SocialMediaLink icon="fa fa-youtube"/>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-around">
                    <div className="footer__legal">
                        <h6 className="mb-2">Legal</h6>
                        <ul>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Copyright/>
    </footer>
  )
}

export default Footer;