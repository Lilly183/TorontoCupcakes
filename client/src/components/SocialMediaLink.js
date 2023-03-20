import React from 'react';
import '../css/SocialMediaLink.css'

const SocialMediaLink = (props) => 
{
  return (
    <a href="/" className="social__media__link m-1 p-0 text-white" target="_blank">
        <i className={props.icon}></i>
    </a>
  )
}

export default SocialMediaLink;