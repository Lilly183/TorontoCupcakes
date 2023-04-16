import React from 'react';
import '../css/Contact.css';
import Map from './Map';
import BusinessHours from './BusinessHours';
import ContactInfo from './ContactInfo';

const Contact = () => 
{
    return (
        <main>
            <section className="contact spad">
                <div className="pageContainer container">
                    
                    <div className="container pt-2 pb-4">
                        <h2 className="pageHeading text-start text-black">Contact</h2>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center"><Map/></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row my-3">
                            <div className="col"><BusinessHours/></div>
                            <div className="col mx-auto"><ContactInfo/></div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Contact;