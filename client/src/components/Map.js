import React from 'react';
import '../css/Map.css';

const Map = () => 
{
    return (
        <div className="map border border-dark">
            <div className="map__iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.930769060989!2d-79.3002175645548!3d43.67040963525142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc0771d13aab%3A0xd465ec3f72760975!2sQueen%20St%20E%20%26%20Lee%20Ave%2C%20Toronto%2C%20ON%20M4E%201E5!5e0!3m2!1sen!2sca!4v1594914856725!5m2!1sen!2sca" title="TorontoCupcakesLocation" className="w-100 h-100" style={{border: "0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    )
}

export default Map;