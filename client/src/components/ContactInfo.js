import React from 'react';

const ContactInfo = () => 
{
    const verticalCenter = "d-flex align-items-center justify-content-center";

    return (
        <div>
            <ul className="list-group rounded-0 contactComponent">
                <li className={"list-group-item p-2 " + verticalCenter + " contactComponentHeading"}>
                    Contact Information
                </li>
                <li className="list-group-item p-2 d-flex">
                    <i className={"icon_pin_alt pe-3 " + verticalCenter} title="Location"></i>
                    <address className="m-0">Queen St. East & Lee Ave, Toronto, ON M4E 1E5, CAN</address>
                </li>
                <li className="list-group-item p-2 d-flex">
                    <i className={"icon_phone pe-3 " + verticalCenter} title="Phone"></i>
                    <div className="col">
                        <div className="row m-0">
                            <span className="p-0"><span className="fw-semibold">Local Toronto: </span><a href="tel:+647-478-9464" className="themeLink">&#40;647&#41; 478-9464</a></span>
                        </div>
                        <div className="row m-0">
                            <span className="p-0"><span className="fw-semibold">North America: </span><a href="tel:+1-877-334-9468" className="themeLink">+1-877-334-9468</a></span>
                        </div>
                        <div className="row m-0">
                            <span className="p-0"><span className="fw-semibold">International: </span><a href="tel:+1-647-478-9464" className="themeLink">+1-647-478-9464</a></span>
                        </div>
                    </div>
                </li>
                <li className="list-group-item p-2 d-flex">
                    <i className={"icon_mail_alt pe-3 " + verticalCenter} title="Email"></i>
                    <a href="mailto:inquiry@torontocupcake.com" className="themeLink">inquiry@torontocupcake.com</a>
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;