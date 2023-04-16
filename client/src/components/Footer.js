import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLink from './SocialMediaLink';
import Copyright from './Copyright';
import '../css/Footer.css';

const Footer = () => 
{
    const supportLinks = 
    [
        {id: 1, route: "/Contact", label: "Contact Us"},
        {id: 2, route: "/About", label: "About"}
    ];

    const socialMediaLinks = 
    [
        {id: 1, icon: "fa fa-facebook", url: "https://www.facebook.com/"},
        {id: 2, icon: "fa fa-instagram", url: "https://www.instagram.com/"},
        {id: 3, icon: "fa fa-twitter", url: "https://twitter.com/"},
        {id: 4, icon: "fa fa-youtube", url: "https://www.youtube.com/"}
    ];

    return (
        <footer className="footer w-100 bg-dark bg-gradient">
            <div className="footer__container container">
                <div className="row">
                    <div className="col-4 d-flex justify-content-around border-end border-secondary">
                        <div className="footer__support">
                            <h6 className="mb-2">Need Help?</h6>
                            <ul>
                                {supportLinks.map((supportLink) =>
                                    <li key={supportLink.id}><Link to={supportLink.route}>{supportLink.label}</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 border-end border-secondary">
                        <div>
                            <h6 className="text-center text-white mb-3">Follow Us!</h6>
                            <div className="row justify-content-center text-center">
                                {socialMediaLinks.map((socialMediaLink) =>
                                    <SocialMediaLink key={socialMediaLink.id} icon={socialMediaLink.icon} url={socialMediaLink.url}/>
                                )}
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