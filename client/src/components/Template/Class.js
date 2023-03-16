import React from 'react';
import imgRelPath from './ImgRelPath';
import Breadcrumb from './Breadcrumb';

const Class = () => 
{
  return (
    <div>
        <Breadcrumb 
            text = "Class" 
        />

        {/* <!-- Class Section Begin --> */}
        <section className="class-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="class__item">
                                    <div className="class__item__pic set-bg" data-setbg={imgRelPath + "class/class-1.jpg"}>
                                        <div className="label">$35.00</div>
                                    </div>
                                    <div className="class__item__text">
                                        <h5><a href="/">ADVANCED BAKING COURSE</a></h5>
                                        <span>Wed 08 Apr 2020; 6.30pm - 9.30pm</span>
                                        <p>Professional course: cook’s certificate in food & wine (six weeks full-time)</p>
                                        <a href="/" className="read_more">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="class__item">
                                    <div className="class__item__pic set-bg" data-setbg={imgRelPath + "class/class-2.jpg"}>
                                        <div className="label">$35.00</div>
                                    </div>
                                    <div className="class__item__text">
                                        <h5><a href="/">TEEN COOKING CAMP</a></h5>
                                        <span>Wed 08 Apr 2020; 6.30pm - 9.30pm</span>
                                        <p>Professional course: cook’s certificate in food & wine (six weeks full-time)</p>
                                        <a href="/" className="read_more">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="class__item">
                                    <div className="class__item__pic set-bg" data-setbg={imgRelPath + "class/class-3.jpg"}>
                                        <div className="label">$35.00</div>
                                    </div>
                                    <div className="class__item__text">
                                        <h5><a href="/">THE ULTIMATE BAKING COURSE</a></h5>
                                        <span>Wed 08 Apr 2020; 6.30pm - 9.30pm</span>
                                        <p>Professional course: cook’s certificate in food & wine (six weeks full-time)</p>
                                        <a href="/" className="read_more">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="class__item">
                                    <div className="class__item__pic set-bg" data-setbg={imgRelPath + "class/class-4.jpg"}>
                                        <div className="label">$35.00</div>
                                    </div>
                                    <div className="class__item__text">
                                        <h5><a href="/">KIDS BAKING COURSE</a></h5>
                                        <span>Wed 08 Apr 2020; 6.30pm - 9.30pm</span>
                                        <p>Professional course: cook’s certificate in food & wine (six weeks full-time)</p>
                                        <a href="/" className="read_more">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="class__item">
                                    <div className="class__item__pic set-bg" data-setbg={imgRelPath + "class/class-5.jpg"}>
                                        <div className="label">$35.00</div>
                                    </div>
                                    <div className="class__item__text">
                                        <h5><a href="/">THE ULTIMATE BAKING COURSE</a></h5>
                                        <span>Wed 08 Apr 2020; 6.30pm - 9.30pm</span>
                                        <p>Professional course: cook’s certificate in food & wine (six weeks full-time)</p>
                                        <a href="/" className="read_more">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="class__item">
                                    <div className="class__item__pic set-bg" data-setbg={imgRelPath + "class/class-6.jpg"}>
                                        <div className="label">$35.00</div>
                                    </div>
                                    <div className="class__item__text">
                                        <h5><a href="/">KIDS BAKING COURSE</a></h5>
                                        <span>Wed 08 Apr 2020; 6.30pm - 9.30pm</span>
                                        <p>Professional course: cook’s certificate in food & wine (six weeks full-time)</p>
                                        <a href="/" className="read_more">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop__pagination">
                            <a href="/">1</a>
                            <a href="/">2</a>
                            <a href="/">3</a>
                            <a href="/"><span className="arrow_carrot-right"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="class__sidebar">
                            <h5>Made from your own hands</h5>
                            <form action="#">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Phone"/>
                                <select>
                                    <option value="">Studying Class</option>
                                    <option value="">Writting Class</option>
                                    <option value="">Reading Class</option>
                                </select>
                                <input type="text" placeholder="Type your requirements"/>
                                <button type="submit" className="site-btn">registration</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Class Section End --> */}
    </div>
  )
}

export default Class;