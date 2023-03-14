import React from 'react';

const Breadcrumb = (props) => 
{
  return (
    <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="breadcrumb__text">
                        <h2>{props.text}</h2>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="breadcrumb__links">
                        <a href="./index.html">Home</a>
                        <span>{props.text}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb;