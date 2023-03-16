import React from 'react';
import '../css/Copyright.css'

const Copyright = () => 
{
  return (
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 my-2">
                    <p className="copyright__text m-0 text-center text-white">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Copyright;